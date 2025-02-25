import { useState } from "react";
import "../styles/CarForm.css";
import toast, { Toaster } from "react-hot-toast";

function CarForm({ onAddCar, carCount }) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    type: "",
    year: "",
    registrationDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (carCount >= 10) return "You cannot add more than 10 cars!";

    if (
      !formData.brand ||
      !formData.model ||
      !formData.type ||
      !formData.year ||
      !formData.registrationDate
    ) {
      return "All fields are required!";
    }

    const year = Number(formData.year);
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || !Number.isInteger(year)) {
      return "Year must be a whole number!";
    }
    if (year < 1971 || year > currentYear) {
      return `Year must be between 1971 and ${currentYear}!`;
    }

    const regDate = new Date(formData.registrationDate);
    const today = new Date();
    if (regDate <= today) {
      return "Registration expiration date must be in the future!";
    }

    const textRegex = /[a-zA-Z]/;
    if (
      !textRegex.test(formData.brand) ||
      !textRegex.test(formData.model) ||
      !textRegex.test(formData.type)
    ) {
      return "Brand, model, and type must contain at least one letter.";
    }

    return null;
  };

  const formatText = (text) => {
    return text
      .trim()
      .replace(/\s*-\s*/g, "-")
      .replace(/\s+/g, " ")
      .split(/[\s-]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("-");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    const newCar = {
      brand: formatText(formData.brand),
      model: formatText(formData.model),
      type: formData.type,
      year: parseInt(formData.year, 10),
      registrationDate: formData.registrationDate,
    };

    onAddCar(newCar);
    toast.success("Car successfully added!");

    setFormData({
      brand: "",
      model: "",
      type: "",
      year: "",
      registrationDate: "",
    });
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <Toaster />
      <h2>Add New Car</h2>

      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={formData.model}
        onChange={handleChange}
      />

      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="">Type</option>
        <option value="Convertible">Convertible</option>
        <option value="Coupe">Coupe</option>
        <option value="Crossover">Crossover</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Luxury">Luxury</option>
        <option value="Sedan">Sedan</option>
        <option value="Sports Car">Sports Car</option>
        <option value="SUV">SUV</option>
        <option value="Truck">Truck</option>
        <option value="Van / Minivan">Van / Minivan</option>
        <option value="Wagon / Hatchback">Wagon / Hatchback</option>
      </select>

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
      />
      <label className="input-label">Registration expiration date: </label>
      <input
        type="date"
        name="registrationDate"
        value={formData.registrationDate}
        onChange={handleChange}
      />

      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;

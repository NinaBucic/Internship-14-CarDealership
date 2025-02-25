import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Filter from "./components/Filter";
import initialCarsData from "./data";

function App() {
  const savedCars = JSON.parse(localStorage.getItem("cars"));
  const initialCars = savedCars ? savedCars : initialCarsData;

  const [cars, setCars] = useState(initialCars);
  const [filteredCars, setFilteredCars] = useState(initialCars);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  const handleAddCar = (newCar) => {
    const updatedCars = [...cars, { id: uuidv4(), ...newCar }].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      if (a.brand !== b.brand) return a.brand.localeCompare(b.brand);
      return a.model.localeCompare(b.model);
    });
    setCars(updatedCars);
    setFilteredCars(updatedCars);
  };

  const handleDeleteCar = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this car?"
    );
    if (!confirmDelete) return;

    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    setFilteredCars(updatedCars);
  };

  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCars(cars);
      return;
    }

    const filtered = cars.filter((car) => {
      const combined = (car.brand + " " + car.model).toLowerCase();
      return combined.includes(searchTerm.toLowerCase());
    });

    setFilteredCars(filtered);
  };

  return (
    <div>
      <CarForm onAddCar={handleAddCar} carCount={cars.length} />
      <Filter onFilter={handleFilter} />
      <CarList cars={filteredCars} onDeleteCar={handleDeleteCar} />
    </div>
  );
}

export default App;

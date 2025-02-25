import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Filter from "./components/Filter";

const initialCars = [
  {
    id: uuidv4(),
    brand: "Toyota",
    model: "Corolla",
    type: "Sedan",
    year: 2020,
    registrationDate: "2025-06-10",
  },
  {
    id: uuidv4(),
    brand: "BMW",
    model: "X5",
    type: "SUV",
    year: 2019,
    registrationDate: "2025-07-01",
  },
  {
    id: uuidv4(),
    brand: "Mercedes",
    model: "C-Class",
    type: "Sedan",
    year: 2021,
    registrationDate: "2024-03-15",
  },
  {
    id: uuidv4(),
    brand: "Audi",
    model: "A4",
    type: "Sedan",
    year: 2018,
    registrationDate: "2024-04-20",
  },
  {
    id: uuidv4(),
    brand: "Volkswagen",
    model: "Golf",
    type: "Hatchback",
    year: 2022,
    registrationDate: "2025-09-30",
  },
  {
    id: uuidv4(),
    brand: "Ford",
    model: "Mustang",
    type: "Sports Car",
    year: 2017,
    registrationDate: "2024-02-05",
  },
  {
    id: uuidv4(),
    brand: "Tesla",
    model: "Model 3",
    type: "Electric",
    year: 2023,
    registrationDate: "2026-01-01",
  },
  {
    id: uuidv4(),
    brand: "Honda",
    model: "Civic",
    type: "Sedan",
    year: 2020,
    registrationDate: "2024-12-12",
  },
].sort((a, b) => {
  if (a.year !== b.year) return b.year - a.year;
  if (a.brand !== b.brand) return a.brand.localeCompare(b.brand);
  return a.model.localeCompare(b.model);
});

function App() {
  const [cars, setCars] = useState(initialCars);
  const [filteredCars, setFilteredCars] = useState(initialCars);

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

    const lowerCaseTerm = searchTerm.toLowerCase();
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

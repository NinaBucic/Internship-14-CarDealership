import { v4 as uuidv4 } from "uuid";

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

export default initialCars;

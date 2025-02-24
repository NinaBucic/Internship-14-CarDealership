import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CarForm from "./components/CarForm";

function App() {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCar) => {
    setCars([...cars, { id: uuidv4(), ...newCar }]);
  };

  return (
    <div>
      <h1>Car Dealership</h1>
      <CarForm onAddCar={handleAddCar} carCount={cars.length} />
    </div>
  );
}

export default App;

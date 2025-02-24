import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CarForm from "./components/CarForm";

function App() {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCar) => {
    setCars([...cars, { id: uuidv4(), ...newCar }]);
  };

  return <CarForm onAddCar={handleAddCar} carCount={cars.length} />;
}

export default App;

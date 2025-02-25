import "../styles/CarList.css";

function CarList({ cars, onDeleteCar }) {
  return (
    <div className="car-list">
      {cars.length === 0 ? (
        <h3 className="no-cars">No cars available.</h3>
      ) : (
        cars.map((car) => (
          <div key={car.id} className="car-card">
            <h3>
              {car.brand} {car.model}
            </h3>
            <p>
              <strong>Type:</strong> {car.type}
            </p>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
            <p>
              <strong>Exp. Reg:</strong> {car.registrationDate}
            </p>
            <button onClick={() => onDeleteCar(car.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CarList;

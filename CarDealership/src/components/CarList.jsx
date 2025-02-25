import "../styles/CarList.css";

function CarList({ cars, onDeleteCar }) {
  return (
    <div className="car-list">
      {cars.length === 0 ? (
        <h3 className="no-cars">No cars available.</h3>
      ) : (
        cars.map((car) => {
          const regDate = new Date(car.registrationDate);
          const timeDiff = regDate - new Date();
          const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

          return (
            <div
              key={car.id}
              className="car-card"
              style={{
                border: daysLeft <= 30 ? "3px solid red" : "1px solid #ccc",
              }}
            >
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
          );
        })
      )}
    </div>
  );
}

export default CarList;

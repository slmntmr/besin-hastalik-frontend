const FoodList = ({ foods }) => {
  return (
    <div className="row">
      {foods.map((food, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{food.name}</h5>
              <p className="card-text">{food.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;

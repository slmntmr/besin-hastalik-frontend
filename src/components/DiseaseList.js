const DiseaseList = ({ diseases }) => {
  return (
    <div className="row">
      {diseases.map((disease, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{disease.name}</h5>
              <p className="card-text">{disease.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiseaseList;

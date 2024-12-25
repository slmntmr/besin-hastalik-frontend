'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [foodName, setFoodName] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const router = useRouter();

  const handleFoodSearch = (e) => {
    e.preventDefault();
    if (foodName.trim()) {
      router.push(`/foods/${foodName}`);
    }
  };

  const handleDiseaseSearch = (e) => {
    e.preventDefault();
    if (diseaseName.trim()) {
      router.push(`/diseases/${diseaseName}`);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Search for Food and Disease</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Search Food</h2>
          <form onSubmit={handleFoodSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name of the food..."
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-2 w-100">
            Search
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Search Disease</h2>
          <form onSubmit={handleDiseaseSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name of the disease..."
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary mt-2 w-100">
            Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

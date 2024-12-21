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
      <h1 className="text-center">Besin ve Hastalık Ara</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Besin Ara</h2>
          <form onSubmit={handleFoodSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Besin adı girin..."
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-2 w-100">
              Ara
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Hastalık Ara</h2>
          <form onSubmit={handleDiseaseSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Hastalık adı girin..."
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary mt-2 w-100">
              Ara
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

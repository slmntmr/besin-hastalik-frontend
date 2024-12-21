'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DiseaseSearchPage = () => {
  const [diseaseName, setDiseaseName] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (diseaseName.trim()) {
      router.push(`/diseases/${diseaseName}`);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Hastalık Arama</h1>
      <form onSubmit={handleSearch} className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Hastalık adı girin..."
            value={diseaseName}
            onChange={(e) => setDiseaseName(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Ara
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiseaseSearchPage;

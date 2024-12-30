'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [foodName, setFoodName] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleFoodSearch = async (e) => {
    e.preventDefault();
    const trimmedFoodName = foodName.trim(); // Boşlukları temizle
    if (trimmedFoodName) {
      setLoading(true); // Loading state aktif
      setTimeout(() => {
        router.push(`/foods/${trimmedFoodName}`);
        setLoading(false); // Arama tamamlanınca yükleme durumu kapatılır
      }, 1000); // 1 saniyelik simülasyon
    }
  };

  const handleDiseaseSearch = async (e) => {
    e.preventDefault();
    const trimmedDiseaseName = diseaseName.trim(); // Boşlukları temizle
    if (trimmedDiseaseName) {
      setLoading(true); // Loading state aktif
      setTimeout(() => {
        router.push(`/diseases/${trimmedDiseaseName}`);
        setLoading(false); // Arama tamamlanınca yükleme durumu kapatılır
      }, 1000); // 1 saniyelik simülasyon
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
              disabled={loading} // Arama sırasında input devre dışı
            />
            <button
              type="submit"
              className="btn btn-primary mt-2 w-100"
              disabled={loading} // Arama sırasında buton devre dışı
            >
              {loading ? 'Searching...' : 'Search'}
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
              disabled={loading} // Arama sırasında input devre dışı
            />
            <button
              type="submit"
              className="btn btn-secondary mt-2 w-100"
              disabled={loading} // Arama sırasında buton devre dışı
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FoodSearchPage = () => {
  const [foodName, setFoodName] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (foodName.trim()) {
      router.push(`/foods/${foodName}`);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Besin Arama</h1>
      <form onSubmit={handleSearch} className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Besin adı girin..."
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Ara
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoodSearchPage;

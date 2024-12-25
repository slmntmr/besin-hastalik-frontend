import { getRecommendedFoods } from '../../../services/diseaseService';
import FoodList from '../../../components/FoodList';

export default async function DiseasePage({ params }) {
  try {
    // "params" asenkron olarak çözülüyor
    const { name } = await Promise.resolve(params);

    // Backend'den veriler çekiliyor
    const foods = await getRecommendedFoods(name);

    // Eğer sonuç varsa, ilk eşleşen hastalık adını al
    const matchedDiseaseName = foods.length > 0 ? foods[0].diseaseName || name : name;

    return (
      <div className="container mt-4">
        <h1>{matchedDiseaseName} Foods That Help with Diseases</h1>
        {foods.length > 0 ? (
          <FoodList foods={foods} />
        ) : (
          <p>No registered foods found for this disease..</p>
        )}
      </div>
    );
  } catch (error) {
    // Hata mesajını kontrol edin ve uygun şekilde gösterin
    const errorMessage =
      error.message.includes('Disease not found')
        ? error.message
        : 'Disease not found.';

    return (
      <div className="container mt-4">
        <h1>{errorMessage.includes('Disease not found') ? 'Information' : 'Hata'}</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }
}

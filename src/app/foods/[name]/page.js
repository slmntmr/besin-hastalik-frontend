import { getRelatedDiseases } from '../../../services/foodService';
import DiseaseList from '../../../components/DiseaseList';

export default async function FoodPage({ params }) {
  try {
    // Asenkron olarak params çözümü
    const { name } = await Promise.resolve(params);

    // Backend'den verileri çekin
    const diseases = await getRelatedDiseases(name);

    // Eğer sonuç varsa, ilk eşleşen besin adını al
    const matchedFoodName = diseases.length > 0 ? diseases[0].foodName || name : name;

    return (
      <div className="container mt-4">
        <h1>{matchedFoodName} besininin İyi geldiği hastalıklar</h1>
        {diseases.length > 0 ? (
          <DiseaseList diseases={diseases} />
        ) : (
          <p>Bu besin için kayıtlı hastalık bulunamadı.</p>
        )}
      </div>
    );
  } catch (error) {
    const errorMessage =
      error.message.includes('Besin bulunamadı')
        ? error.message
        : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';

    return (
      <div className="container mt-4">
        <h1>{errorMessage.includes('Besin bulunamadı') ? 'Bilgilendirme' : 'Hata'}</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }
}

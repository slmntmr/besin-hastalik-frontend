import { getRelatedDiseases } from '../../../services/foodService';
import styles from '../../../styles/foods.module.css';

export default async function FoodPage({ params }) {
  const { name } = params;
  const diseases = await getRelatedDiseases(name);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.foodTitle}>{name}</h1>
      <ul className={styles.diseaseList}>
        {diseases.map((disease) => (
          <li key={disease.name} className={styles.diseaseItem}>
            {disease.name} - {disease.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

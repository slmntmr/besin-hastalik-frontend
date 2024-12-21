import { getRecommendedFoods } from '../../../services/diseaseService';
import styles from '../../../styles/diseases.module.css';

export default async function DiseasePage({ params }) {
  const { name } = params;
  const foods = await getRecommendedFoods(name);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.diseaseTitle}>{name}</h1>
      <ul className={styles.foodList}>
        {foods.map((food) => (
          <li key={food.name} className={styles.foodItem}>
            {food.name} - {food.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

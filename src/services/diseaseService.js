import axios from 'axios';

export const getRecommendedFoods = async (name) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/diseases/${name}/recommended-foods`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(error.response.data); // Backend'den gelen hatayı ilet
    }
    throw new Error('Beklenmeyen bir hata oluştu.');
  }
};

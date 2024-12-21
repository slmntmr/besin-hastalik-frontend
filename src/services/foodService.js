import axios from 'axios';

export const getRelatedDiseases = async (name) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/foods/${name}/related-diseases`);
    return response.data;
  } catch (error) {
    // Hata durumunda backend'den dönen mesajı fırlat
    throw new Error(error.response?.data || 'Bir hata oluştu.');
  }
};

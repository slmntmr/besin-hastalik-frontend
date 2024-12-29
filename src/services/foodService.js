import axios from 'axios';

export const getRelatedDiseases = async (name) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/foods/${name}/related-diseases`);
    return response.data;
  } catch (error) {
    // Hata durumunda backend'den dönen mesajı fırlat
    throw new Error(error.response?.data || 'Bir hata oluştu.');
  }
};

import axios from 'axios';

export const getRelatedDiseases = async (name) => {
  try {
    console.log("Gönderilen isim:", name); // Loglama yap
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/foods/${name}/related-diseases`);
    console.log("API Yanıtı:", response.data); // Gelen veriyi logla
    return response.data;
  } catch (error) {
    console.error("API Hatası:", error.response?.data || error.message); // Hata detaylarını logla
    throw new Error(error.response?.data || 'Bir hata oluştu.');
  }
};

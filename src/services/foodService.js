import axios from 'axios';

// Sabit bir backend URL tanımlayın
const BASE_URL = "https://healthyfoodapi.onrender.com";

export const getRelatedDiseases = async (name) => {
  try {
    console.log("Gönderilen isim:", name); // Loglama yap
    const response = await axios.get(`${BASE_URL}/api/foods/${name}/related-diseases`);
    console.log("API Yanıtı:", response.data); // Gelen veriyi logla
    return response.data;
  } catch (error) {
    console.error("API Hatası:", error.response?.data || error.message); // Hata detaylarını logla
    throw new Error(error.response?.data || 'Bir hata oluştu.');
  }
};

export const getRecommendedFoods = async (name) => {
  try {
    console.log("Gönderilen hastalık ismi:", name); // Loglama yap
    const response = await axios.get(`${BASE_URL}/api/diseases/${name}/recommended-foods`);
    console.log("API Yanıtı:", response.data); // Gelen veriyi logla
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Hastalık bulunamadı:", name); // Hata durumunu logla
      throw new Error(error.response.data); // Backend'den gelen mesajı ilet
    }
    console.error("API Hatası:", error.message || "Bilinmeyen hata"); // Genel hataları yakala
    throw new Error('Beklenmeyen bir hata oluştu.');
  }
};

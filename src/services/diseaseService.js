import axios from 'axios';

export const getRecommendedFoods = async (name) => {
  try {
    console.log("Gönderilen hastalık ismi:", name); // Loglama yap
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/diseases/${name}/recommended-foods`);
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

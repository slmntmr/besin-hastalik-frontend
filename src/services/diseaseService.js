import axios from 'axios';

// Sabit bir backend URL tanımlıyoruz
const BASE_URL = "https://healthyfoodapi.onrender.com";

// Gecikme fonksiyonu
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getRecommendedFoods = async (name) => {
  try {
    console.log("Gönderilen hastalık ismi:", name); // Loglama yap

    // Koşullu gecikme: Eğer hastalık ismi 'test' ise gecikme uygula
    if (name.toLowerCase() === "test") {
      console.log("'test' parametresi algılandı. 3 saniye bekleniyor...");
      await delay(5000);
    }

    // API çağrısı
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

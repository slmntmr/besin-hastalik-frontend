import axios from 'axios';

// Sabit bir backend URL tanımlayın
const BASE_URL = "https://healthyfoodapi.onrender.com";

// Gecikme fonksiyonu
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getRelatedDiseases = async (name) => {
  try {
    console.log("Gönderilen isim:", name); // Loglama yap

    // Koşullu gecikme: Eğer input boş veya sadece boşluklardan oluşuyorsa
    if (!name || name.trim() === "") {
      console.log("Boş input algılandı. 3 saniye bekleniyor...");
      await delay(5000);
    }

    // API çağrısı
    const response = await axios.get(`${BASE_URL}/api/foods/${name}/related-diseases`);
    console.log("API Yanıtı:", response.data); // Gelen veriyi logla
    return response.data;
  } catch (error) {
    console.error("API Hatası:", error.response?.data || error.message); // Hata detaylarını logla
    throw new Error(error.response?.data || 'Bir hata oluştu.');
  }
};

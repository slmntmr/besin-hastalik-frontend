export const getRelatedDiseases = async (name) => {
  try {
    console.log("Gönderilen isim:", name); // Parametreyi logla
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/foods/${name}/related-diseases`);
    console.log("API Yanıtı:", response.data); // Yanıtı logla
    return response.data;
  } catch (error) {
    console.error("Hata Detayı:", error.response?.data || error.message);
    throw new Error(error.response?.data || "Bir hata oluştu.");
  }
};

import axios from 'axios';

export const getRelatedDiseases = async (name) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/foods/${name}/related-diseases`
    );
    console.log("Gelen Veri:", response.data); // Gelen veriyi konsola yazdır
    return response.data;
  } catch (error) {
    console.error("Hata:", error); // Hata varsa konsola yazdır
    throw new Error(error.response?.data || "Bir hata oluştu.");
  }
};

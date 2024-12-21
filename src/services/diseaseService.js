import axios from 'axios';

export const getRecommendedFoods = async (name) => {
  const response = await axios.get(`/api/diseases/${name}/recommended-foods`);
  return response.data;
};

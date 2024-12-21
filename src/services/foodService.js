import axios from 'axios';

export const getRelatedDiseases = async (name) => {
  const response = await axios.get(`/api/foods/${name}/related-diseases`);
  return response.data;
};

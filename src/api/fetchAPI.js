import axios from "axios";

const baseUrl = `https://youtube-v31.p.rapidapi.com`;
const options = {
  url: baseUrl,
  params: {
    maxResults: "50",
    part: "snippet",
  },
  headers: {
    "X-RapidAPI-Key": "ea971d2c7cmsh8869a18b3ab2ecdp1448f0jsnb74b5f5d0cac",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};

import axios from "axios";

const baseUrl = `https://youtube-v31.p.rapidapi.com`;
const options = {
  url: baseUrl,
  params: {
    maxResults: "50",
    part: "snippet",
  },
  headers: {
    "X-RapidAPI-Key": "03ee2c943amsh1105d8c1e5e5686p1f9425jsn77de68fe0ea8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};

import axios from 'axios'

const baseUrl = 'https://tiktok-backend-tannv.herokuapp.com'

export const fetchVideos = async () => {
  const videos = await axios.get(`${baseUrl}/videos`);
  return videos;
}
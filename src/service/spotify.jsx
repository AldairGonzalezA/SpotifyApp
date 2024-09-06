import axios from 'axios';

const CLIENT_ID = '3f617972f3a84d1d94d42e68de449f9b'
const REDIRECT_URI = 'http://localhost:5173'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

export const getAccessToken = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
};

export const login = () => {
  window.location.href = AUTH_URL;
};

 export const BuscarArtista = async (accessToken, query) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'artist',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching artist:', error);
    throw error;
  }
} 



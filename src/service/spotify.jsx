import axios from 'axios'

const CLIENT_ID = '3f617972f3a84d1d94d42e68de449f9b'
const REDIRECT_URI = 'http://localhost:5173'
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

export const getAccessToken = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
};

export async function PopularSongs(accessToken) {
  const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists',{
    method:'GET',
    headers:{
      Authorization: `Bearer ${accessToken}`,
    }
  })
  const data = await response.json()

  const playlistId = data.playlists.items[0].id
  const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`,{
    method:'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  const playlistData = await playlistResponse.json()
  return playlistData.tracks.items.map(item => ({
    id: item.track.id,
    name: item.track.name,
    album: item.track.album.name,
    album_image: item.track.album.images[1],
    artists: item.track.artists.map(artist => artist.name),
    preview_url: item.track.preview_url,
    external_url: item.track.external_urls.spotify
  }))
}

export const login = () => {
  window.location.href = AUTH_URL;
};

export const BuscarArtista = async (accessToken, query, pagina) => {
  const offset = (pagina-1)*20
  try {
    let url = '';
    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    if (query) {
      url = 'https://api.spotify.com/v1/search';
      config.params = {
        q: query,
        type: 'track',
        offset: offset,
        limit: 20,
      };
    } 

    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    if(error.response && error.response.status === 401){
      login()
    }else{
      throw error
    }
  }
} 



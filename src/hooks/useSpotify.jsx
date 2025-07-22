import { getAccessToken, login, BuscarArtista, PopularSongs } from "../service/spotify"
import { useEffect, useState } from "react"

export const useSpotify = (artista,pagina) => {
  const [canciones, setCanciones] = useState([])
  const [total,setTotal] = useState(1)
  
  useEffect(()=>{
    const fetchData = async () =>{
      const accessToken = getAccessToken();
      if (accessToken) {
        try {
          if (artista === '') {
            const popularSongs = await PopularSongs(accessToken);
            setCanciones(popularSongs);
          } else {
            const data = await BuscarArtista(accessToken, artista, pagina);
            setCanciones(data.tracks.items);
            setTotal(data.tracks.total);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        login();
      }
    }

    fetchData()
  },[artista, pagina])

  return {
    canciones,
    total
    
  }
}

import { getAccessToken, login, BuscarArtista } from "../service/spotify"
import { useEffect, useState } from "react"

export const SpotifyApp = () => {
  const [artist, setArtist] = useState('')
  const [artistas, setArtistas] = useState([])

  useEffect(()=>{
    const accessToken = getAccessToken()
    if(accessToken){
      BuscarArtista(accessToken,artist).then((data)=>{
        setArtistas(data.artist.items)
      })
    }
  },[artist])

  const handleSearch = () => {
    const accessToken = getAccessToken()
    if(accessToken){
      BuscarArtista(accessToken,artist).then((data)=>{
        setArtistas(data.artist.items)
      })
    }else{
      login()
    }
  }

  return {
    handleSearch,
    
  }
}

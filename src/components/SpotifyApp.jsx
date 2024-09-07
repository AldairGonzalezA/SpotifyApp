import { useEffect, useState } from "react"
import { useSpotify } from "../hooks/useSpotify"
import { SearchArtist } from "./SearchArtist"
import { GridTracks } from "./GridTracks"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const SpotifyApp = () => {
  const [pagina,setPagina] = useState(1)
  const [artista,setArtista] = useState('')
  const {canciones, total} = useSpotify(artista,pagina)

  const handleSearch = (artist) =>{
    setArtista(artist)
  }


  return (
    <>
    <SearchArtist handleSearch={handleSearch}/>
    <GridTracks canciones={canciones}/>
    <Pagination count={Math.round(total / 20)} className='d-flex justify-content-center' style={{backgroundColor:'black', color: "white"}} onChange={(e, value) => (setPagina(value))} sx={{'& .MuiPaginationItem-root': {
          color: 'white', 
        },}} />
    </>
  )
}

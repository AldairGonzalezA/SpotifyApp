import { useState } from "react"


export const SearchArtist = ({handleSearch}) => {
    const [artista, setArtista] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleSearch(artista)
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://storage.googleapis.com/spotify-newsroom-staging.appspot.com/1/2021/02/Spotify_Logo_RGB_White.png" width={325} height={125} alt="" />
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setArtista(e.target.value)}}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
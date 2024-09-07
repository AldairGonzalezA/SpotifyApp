

export const GridTracks = ({ canciones }) => {

    return (
        <>
            <div className="d-flex flex-row row row-cols-5" style={{ backgroundColor: '#1ED760'}}>
      {canciones && canciones.length > 0 ? (
        canciones.map((song) => (
          <div key={song.id} className="card m-4" style={{ backgroundColor: 'black', color: 'white'}}>
            {song.album.images && song.album.images.length > 0 && (
              <img
                src={song.album.images[1].url} 
                className="card-img-top rounded"
                alt={song.name}
              />
            )}
            <div className="card-body d-flex flex-column align-items-center" style={{ backgroundColor: 'black', color: 'white'}}>
              <h5 className="card-title">{song.name}</h5>
              <p className="card-text " style={{color:'white'}}>
                {song.artists.map(artist => artist.name).join(', ')}
              </p>
              {song.preview_url ? (
                <audio controls className="w-100">
                  <source src={song.preview_url} type="audio/mpeg" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              ) : (
                <p className="text-red-500">Vista previa no disponible</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron canciones.</p>
      )}
    </div>
        </>
    )
}
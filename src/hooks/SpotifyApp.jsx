

export const SpotifyApp = () => {
  const ID_Cliente = "3f617972f3a84d1d94d42e68de449f9b";
  const redirect_uri = 'http//localhost:5173/callback'
  const scope = 'user-read-private user-read-email'

  const generatedRandomString = (length) =>{
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
    let result = ''
    for(let i = 0; i < length; i++){
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return result
  }
  const state = generatedRandomString(16)
  
  const handleLogin = () =>{
    const authUrl = 'https://accounts.spotify.com/authorize?' + new URLSearchParams({
      response_type:'code',
      cliente_id: ID_Cliente,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }).toString()

    window.location.href = authUrl
  }


  return (
    <>
      <div>
        <button onClick={handleLogin}> Presione el Boton</button>
      </div>
    </>
  )
}

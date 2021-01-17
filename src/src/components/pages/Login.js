import React from 'react';

const Login = () => {
    const client_id = '3b83df1eb5414ccfa16275dc089add12';
    const redirect_uri = 'http://localhost:3001/loggedIn'
    const scope = 'user-read-private user-top-read playlist-modify-public playlist-read-private playlist-read-collaborative app-remote-control user-modify-playback-state user-read-recently-played';

    window.location.replace('https://accounts.spotify.com/authorize?'
        + 'client_id=' + client_id
        + '&response_type=' + 'token'
        + '&redirect_uri=' + redirect_uri
        + '&show_dialog=' + 'true'
        + '&scope=' + scope
    )
  

  const onSubmit = () => {
    // do authentication here
    // if authentication works then redirect to `/room/${roomId}`
    // otherwise error
    // currrently user and host see the same page
    if (username !== '' && password !== '') {
      logIn(client_id, redirect_uri, scope);
      //console.log('login done');
      history.push(`/room/${roomId}`);
    } else {
      setError(true);
    }
    //console.log(`username: ${username}`);
    //console.log(`password: ${password}`);
  }

    return (
        <div className="login-container">
            <h1>Login to Spotify</h1>
        </div>
    );
}


export default Login;
import './styles/index.scss';

import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import { Login } from './pages/Login';
import { getTokenFromUrl } from './pages/Login/spotify';

const spotify = new SpotifyWebApi();

function Player() {
  return <div>I&apos;m Player</div>;
}

export function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash: { access_token: string } = getTokenFromUrl();

    window.location.hash = '';

    const _token = hash?.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

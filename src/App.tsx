import './styles/index.scss';

import { useEffect, useState } from 'react';

import { Login } from './pages/Login';
import { getTokenFromUrl } from './pages/Login/spotify';

function Player() {
  return <div></div>;
}

export function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash: { access_token: string } = getTokenFromUrl();

    window.location.hash = '';

    const _token = hash?.access_token;

    if (_token) {
      setToken(token);
    }
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

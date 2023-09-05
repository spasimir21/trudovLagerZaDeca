import { createContext } from 'react';

interface TokenData {
  raw: string;
  parsed: {
    uuid: string;
    username: string;
  };
}

interface APIState {
  token: TokenData | null;
  refreshToken: string | null;
}

function getDefaultAPIState(): APIState {
  return {
    token: null,
    refreshToken: null
  };
}

function parseToken(rawToken: string): TokenData {
  return {
    raw: rawToken,
    parsed: JSON.parse(atob(rawToken.split('.')[1]))
  };
}

function loadAPIState() {
  const state = getDefaultAPIState();

  const rawToken = localStorage.getItem('token');
  if (rawToken == null) return state;

  state.refreshToken = localStorage.getItem('refreshToken');
  state.token = parseToken(rawToken);

  return state;
}

function saveAPIState(state: APIState) {
  if (state.refreshToken != null) localStorage.setItem('refreshToken', state.refreshToken);
  if (state.token != null) localStorage.setItem('token', state.token.raw);
}

const APIContext = createContext<APIState>(getDefaultAPIState());

export { APIState, loadAPIState, saveAPIState, parseToken, APIContext, getDefaultAPIState };

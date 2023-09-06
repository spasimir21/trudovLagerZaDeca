import { Action, Reducer, createStateContext, State } from '../utils/state';
import jsonwebtoken from 'jsonwebtoken';

enum APIStateScopes {
  Token
}

interface TokenData {
  raw: string;
  parsed: {
    fullname: string;
    email: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: number;
    isMale: boolean;
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
    parsed: jsonwebtoken.decode(rawToken) as any
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
  else localStorage.removeItem('refreshToken');

  if (state.token != null) localStorage.setItem('token', state.token.raw);
  else localStorage.removeItem('token');
}

function setupAPIStateAutosave(state: State<APIState, APIStateScopes>) {
  state.subscribe(saveAPIState, [APIStateScopes.Token]);
}

const APIStateContext = createStateContext<APIState, APIStateScopes>();

const logoutAction = Action(getDefaultAPIState, [APIStateScopes.Token]);

const loginAction = Action(
  (_, token: string, refreshToken: string) => {
    return {
      token: parseToken(token),
      refreshToken
    };
  },
  [APIStateScopes.Token]
);

const getTokenDataReducer = Reducer((apiState: APIState) => apiState.token, [APIStateScopes.Token]);

export {
  APIStateContext,
  logoutAction,
  loginAction,
  getTokenDataReducer,
  getDefaultAPIState,
  parseToken,
  loadAPIState,
  saveAPIState,
  setupAPIStateAutosave
};

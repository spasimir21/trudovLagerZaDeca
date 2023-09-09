import { Action, Reducer, createStateContext, State } from '../utils/state';
import * as jwt from '../api/jwt';

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

async function parseToken(rawToken: string): Promise<TokenData> {
  return {
    raw: rawToken,
    parsed: (await jwt.decode(rawToken)) as any
  };
}

function loadTokens() {
  const token = localStorage.getItem('token');
  if (token == null) return null;

  const refreshToken = localStorage.getItem('refreshToken');
  // const token = await parseToken(rawToken);

  return [token, refreshToken];
}

function saveAPIState(state: APIState) {
  if (state.refreshToken != null) localStorage.setItem('refreshToken', state.refreshToken);
  else localStorage.removeItem('refreshToken');

  if (state.token != null) localStorage.setItem('token', state.token.raw);
  else localStorage.removeItem('token');
}

async function loadAPIState(state: State<APIState, APIStateScopes>) {
  const tokens = loadTokens();
  if (tokens == null) return;

  state.modify(loginAction.modifier as any, tokens, loginAction.scopes);
}

function setupAPIStateAutosave(state: State<APIState, APIStateScopes>) {
  state.subscribe(saveAPIState, [APIStateScopes.Token]);
}

const APIStateContext = createStateContext<APIState, APIStateScopes>();

const logoutAction = Action(getDefaultAPIState, [APIStateScopes.Token]);

const loginAction = Action(
  async (_, token: string, refreshToken: string) => {
    return {
      token: await parseToken(token),
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

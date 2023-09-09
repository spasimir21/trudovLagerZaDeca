import { HTTPError, RequestFactory } from './useRequest';
import { DOMAIN, Service } from '../constants';
import * as jwt from './jwt';

type LoginRequestResult = [string, string];

interface LoginRequestArgs {
  email: string;
  password: string;
}

interface LoginRequestError {
  statusCode: number;
  message: string;
}

const LoginRequest: RequestFactory<LoginRequestResult, LoginRequestArgs, LoginRequestError> = args => ({
  url: `//${Service.AUTH}.${DOMAIN}/login`,
  request: {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args)
  },
  mock: async () => {
    const accounts = JSON.parse(localStorage.getItem('accounts') ?? '{}');
    if (!(args.email in accounts)) throw new HTTPError(400, 'Email is not registered!', {});
    if (accounts[args.email].password !== args.password) throw new HTTPError(400, 'Password is incorrect!', {});

    return [await jwt.sign(accounts[args.email]), ''];
  }
});

export { LoginRequest };

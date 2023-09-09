import { HTTPError, RequestFactory } from './useRequest';
import { DOMAIN, Service } from '../constants';
import * as jwt from './jwt';

type RegisterRequestResult = [string, string];

interface RegisterRequestArgs {
  fullname: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: number;
  isMale: boolean;
}

interface RegisterRequestError {
  statusCode: number;
  message: string;
}

const RegisterRequest: RequestFactory<RegisterRequestResult, RegisterRequestArgs, RegisterRequestError> = args => ({
  url: `//${Service.AUTH}.${DOMAIN}/register`,
  request: {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args)
  },
  mock: async () => {
    const accounts = JSON.parse(localStorage.getItem('accounts') ?? '{}');
    if (args.email in accounts) throw new HTTPError(400, 'Email is already registered!', {});
    accounts[args.email] = args;
    localStorage.setItem('accounts', JSON.stringify(accounts));

    return [await jwt.sign(args), ''];
  }
});

export { RegisterRequest };

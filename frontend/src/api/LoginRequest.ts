import { DOMAIN, Service } from '../constants';
import { RequestFactory } from './useRequest';

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
  }
});

export { LoginRequest };

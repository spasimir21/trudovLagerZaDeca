import { DOMAIN, Service } from '../constants';
import { RequestFactory } from './useRequest';

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
  }
});

export { RegisterRequest };

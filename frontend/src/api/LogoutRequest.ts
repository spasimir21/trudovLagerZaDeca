import { DOMAIN, Service } from '../constants';
import { RequestFactory } from './useRequest';

type LogoutRequestResult = undefined;

interface LogoutRequestArgs {
  token: string;
}

interface LogoutRequestError {
  statusCode: number;
  message: string;
}

const LogoutRequest: RequestFactory<LogoutRequestResult, LogoutRequestArgs, LogoutRequestError> = args => ({
  url: `//${Service.AUTH}.${DOMAIN}/logout`,
  request: {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${args.token}` }
  }
});

export { LogoutRequest };

import { createGraphQLRequest } from './GraphQLRequest';
import { DOMAIN, Service } from '../constants';

type RandomRequestResult = { random: number };

interface RandomRequestArgs {
  from: number;
  to: number;
}

const RandomRequest = createGraphQLRequest<RandomRequestResult, RandomRequestArgs>(
  `//${Service.WIKI}.${DOMAIN}`,
  () => `
    query($from: Int!, $to: Int!) {
      random(from: $from, to: $to)
    }
  `,
  args => args
);

export { RandomRequest, RandomRequestArgs };

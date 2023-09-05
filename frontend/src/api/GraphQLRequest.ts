import { RequestFactory } from './useRequest';

function createGraphQLRequest<TResult, TArgs>(
  domain: string,
  gqlQuery: (args: TArgs) => string,
  gqlVariables: (args: TArgs) => any
): RequestFactory<{ data: TResult }, TArgs, { errors: { message: string }[] }> {
  return (args: TArgs) => ({
    url: `${domain}/graphql`,
    request: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: gqlQuery(args),
        variables: gqlVariables(args)
      })
    }
  });
}

export { createGraphQLRequest };

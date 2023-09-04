import { Model } from '@lager/neo4ogm';

const Token = Model('Token', {
  refreshToken: String,
  token: String
});

export { Token };

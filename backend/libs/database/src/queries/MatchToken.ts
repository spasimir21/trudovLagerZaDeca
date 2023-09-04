import { Token } from '../models/Token';
import { Query } from '@lager/neo4ogm';

const MatchToken = Query(
  `
    MATCH (token:${Token} { token: $token, refreshToken: $refreshToken })
    RETURN token
  `,
  { token: String, refreshToken: String },
  { token: Token }
);

export { MatchToken };

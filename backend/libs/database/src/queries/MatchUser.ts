import { Query } from '@lager/neo4ogm';
import { User } from '../models/User';

const MatchUser = Query(
  `
    MATCH (user:${User})
    WHERE user.email = $email
    RETURN user
  `,
  { email: String },
  { user: User }
);

export { MatchUser };

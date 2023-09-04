import { Model, UUID } from '@lager/neo4ogm';

const User = Model('User', {
  uuid: UUID,
  username: String,
  email: String,
  password: String
});

export { User };

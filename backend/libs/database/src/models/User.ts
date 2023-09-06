import { Model, UUID } from '@lager/neo4ogm';

const User = Model('User', {
  uuid: UUID,
  fullname: String,
  email: String,
  password: String,
  phoneNumber: String,
  dateOfBirth: Number,
  isMale: Boolean
});

export { User };

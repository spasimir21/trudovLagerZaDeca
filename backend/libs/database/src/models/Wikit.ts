import { Model, UUID } from '@lager/neo4ogm';

const Wikit = Model('Wikit', {
  uuid: UUID,
  title: String
});

export { Wikit };

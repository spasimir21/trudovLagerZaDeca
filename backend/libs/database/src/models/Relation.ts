import { Range, Model, UUID } from '@lager/neo4ogm';

const Relation = Model('Relation', {
  uuid: UUID,
  parent: UUID,
  child: UUID,
  rating: Range(0, 1)
});

export { Relation };

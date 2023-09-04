import { Range, Model, UUID } from '@lager/neo4ogm';

const Text = Model('Text', {
  uuid: UUID,
  wikit_title: String,
  text: String,
  rating: Range(0, 1),
  difficulty: Range(0, 1)
});

export { Text };

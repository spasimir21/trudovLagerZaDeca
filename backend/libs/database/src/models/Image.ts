import { Range, Model, UUID } from '@lager/neo4ogm';

const Image = Model('Image', {
  uuid: UUID,
  wikit_title: String,
  description: String,
  hash: String,
  rating: Range(0, 1)
});

export { Image };

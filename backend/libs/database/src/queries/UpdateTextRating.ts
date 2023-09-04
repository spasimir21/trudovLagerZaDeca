import { Range, Query, UUID } from '@lager/neo4ogm';
import { Text } from '../models/Text';

const UpdateTextRating = Query(
  `
    MATCH (text:${Text} { uuid: $text })
    SET text.rating = $rating
  `,
  { text: UUID, rating: Range(0, 1) },
  {}
);

export { UpdateTextRating };

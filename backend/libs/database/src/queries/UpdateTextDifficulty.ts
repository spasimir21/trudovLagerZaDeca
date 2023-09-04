import { Range, Query, UUID } from '@lager/neo4ogm';
import { Text } from '../models/Text';

const UpdateTextDifficulty = Query(
  `
    MATCH (text:${Text} { uuid: $text })
    SET text.difficulty = $difficulty
  `,
  { text: UUID, difficulty: Range(0, 1) },
  {}
);

export { UpdateTextDifficulty };

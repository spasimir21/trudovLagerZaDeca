import { Wikit } from '../models/Wikit';
import { Query } from '@lager/neo4ogm';

const WikitExists = Query(
  `
    MATCH (wikit:${Wikit} { title: $title })
    RETURN wikit
  `,
  { title: String },
  { wikit: Wikit }
);

export { WikitExists };

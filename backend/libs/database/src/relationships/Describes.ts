import { Relationship } from '@lager/neo4ogm';
import { Wikit } from '../models/Wikit';
import { Text } from '../models/Text';

const Describes = Relationship('DESCRIBES', [Text], [Wikit]);

export { Describes };

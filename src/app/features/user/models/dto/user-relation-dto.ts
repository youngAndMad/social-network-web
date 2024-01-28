import { RelationDto } from './relation-dto';

export type UserRelationDto = {
  blocks: RelationDto[];
  friends: RelationDto[];
  outgoingSubscriptions: RelationDto[];
  incomingSubscriptions: RelationDto[];
};

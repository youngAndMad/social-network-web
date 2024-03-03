import { User } from '../user';

export type RelationDto = {
  createdTime: Date;
  id: number;
  user: User;
};

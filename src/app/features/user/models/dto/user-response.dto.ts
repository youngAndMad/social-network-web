import { User } from '../user';
import { UserRelationDto } from './user-relation-dto';

export type UserResponseDto = {
  user: User;
  relations: UserRelationDto;
};

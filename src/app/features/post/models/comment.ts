import { FileEntity } from './file-entity';

export type Comment = {
  id: number;
  content: string;
  authorId: number;
  postId: number;
  files: FileEntity[]; //?
};

import { Comment } from './comment';
import { PostType } from './enum/post-type';
import { FileEntity } from './file-entity';
import { PostReaction } from './post-reaction';

export type Post = {
  id: number;
  content: string;
  comments: Comment[];
  authorId: number;
  type: PostType;
  reactions: PostReaction[];
  files:FileEntity[]
};

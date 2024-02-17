import { PostReactionType } from './enum/post-reaction-type';

export type PostReaction = {
  id: number;
  reactionType: PostReactionType;
  authorId: number;
  postId: number;
};

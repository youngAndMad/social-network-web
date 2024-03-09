import { ChatMember } from './member';
import { Message } from './message';

export type Chat = {
  id: string;
  type: 'PRIVATE' | 'GROUP';
  createdAt: Date;
  name: string;
  messages: Message[];
  members: ChatMember[];
};

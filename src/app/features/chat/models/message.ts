import { AppUser } from 'src/app/common/model/appuser';

export type Message = {
  id: string;
  content: string;
  sentAt: string;
  sender: AppUser;
};

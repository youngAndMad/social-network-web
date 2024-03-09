import { AppUser } from 'src/app/common/model/appuser';

export type ChatMember = {
  appUser: AppUser;
  lastSeenMessageId: string;
};

import { AppUser } from 'src/app/common/model/appuser';
import { ChannelType } from './enums/channel-type';

export type Channel = {
  id: string;
  name: string;
  type: ChannelType;
  avatarUrl: string;
  admin: AppUser;
  moderatorList: AppUser[];
  subscriberList: AppUser[];
};

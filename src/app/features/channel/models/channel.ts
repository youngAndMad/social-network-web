import { AppUser } from 'src/app/common/model/appuser';

export type Channel = {
  id: string;
  name: string;
  type: 'IT' | 'SPORT' | 'EDUCATION' | 'MUSIC' | 'AUTO' | 'ELECTRONICS';
  avatarUrl: string;
  admin: AppUser;
  moderatorList: AppUser[];
  subscriberList: AppUser[];
};

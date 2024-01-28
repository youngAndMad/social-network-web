import { Address } from './address';
import { Gender } from './enums/gender';

export type User = {
  id: number;
  givenName: string;
  preferredUsername: string;
  familyName: string;
  avatar: string;
  gender: Gender;
  birthDate: Date;
  address: Address;
};

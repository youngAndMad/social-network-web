import { AddressDto } from './address-dto';

export type UserSuggestionDto = {
  id: number;
  givenName: string;
  preferredUsername: string;
  familyName: string;
  email: string;
  birthDate: string;
  avatar: string;
  address: AddressDto | null;
};

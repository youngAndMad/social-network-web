import { Gender } from '../enums/gender';
import { AddressDto } from './address-dto';

export class RegistrationDto {
  givenName: string;
  address?: AddressDto;
  familyName: string;
  preferredUsername: string;
  email: string;
  gender?: Gender;
  birthDate?: Date;
}

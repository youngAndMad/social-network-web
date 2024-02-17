import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }

  getItem<T>(key: string): T | null {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  getProfile(): Profile {
    console.log('extract profile');
    return JSON.parse(localStorage.getItem('user')!);
  }

  setProfile(user: Profile): void {
    console.log('update profile');
    localStorage.setItem('user', JSON.stringify(user));
  }
}

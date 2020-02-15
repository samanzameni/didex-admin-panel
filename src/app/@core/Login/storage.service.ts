import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() { }

      setAccessToken(token: string): void {
        localStorage.setItem('didex_admin_access_token', token);
      }
      getAccessToken(): string {
       return localStorage.getItem('didex_admin_access_token');
      }
      removeAccessToken(): void {
        localStorage.removeItem('didex_admin_access_token');
      }
}

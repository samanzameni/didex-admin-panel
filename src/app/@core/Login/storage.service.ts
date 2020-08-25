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
    setAccessRole(role: string[]): void {
      localStorage.setItem('didex_admin_role', JSON.stringify(role) );
    }
    getAccessRole(): string {
      return JSON.parse(localStorage.getItem('didex_admin_role'));
    }
    removeAccessRole(): void {
      localStorage.removeItem('didex_admin_role');
    }
    setCaptchaToken(token: string): void {
      localStorage.setItem('didex_admin_captcha_token', token);
    }
    getCaptchaToken(): string {
      return localStorage.getItem('didex_admin_captcha_token');
    }
    removeCaptchaToken(): void {
      localStorage.removeItem('didex_admin_captcha_token');
    }
    setLoginStep(step: string): void {
    localStorage.setItem('didex_login_step', step);
  }
    getLoginStep(): string {
    return localStorage.getItem('didex_login_step');
  }
    removeLoginStep(): void {
    localStorage.removeItem('didex_login_step');
  }
}

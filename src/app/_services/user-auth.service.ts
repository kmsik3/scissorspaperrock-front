import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setUserRole(userRole: string) {
    localStorage.setItem('userRole', userRole);
  }

  public getUserRole() {
    return localStorage.getItem('userRole');
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  public getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  public setRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  public getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  public setEmail(email: string) {
    localStorage.setItem('email', email);
  }

  public getEmail() {
    return localStorage.getItem('email');
  }

  public setError(error: Error) {
    localStorage.setItem('err', error.message);
  }

  public getError() {
    return localStorage.getItem('error');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getAccessToken() && this.getRefreshToken();
  }
}

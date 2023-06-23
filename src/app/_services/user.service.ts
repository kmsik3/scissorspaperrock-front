import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8080";

  requestHeader = new HttpHeaders(
    {
      "No-Auth": "True"
    }
  )

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData: any) {
    return this.httpClient.post(this.PATH_OF_API + "/api/v1/player/login", loginData, { headers: this.requestHeader });
  }

  public register(loginData: any) {
    return this.httpClient.post(this.PATH_OF_API + "/api/v1/player/signup", loginData, { headers: this.requestHeader });
  }

  public roleMatch(allowedRoles: [string]): boolean {
    let isMatch = false;
    const userRole: any = this.userAuthService.getUserRole();
    if (userRole != null && userRole) {
      for (let i = 0; i < allowedRoles.length; i++) {
        if (userRole === allowedRoles[i]) {
          isMatch = true;
          return isMatch;
        }
      }
    }
    return isMatch;
  }
}

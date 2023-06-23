import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isSuccessful = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) {

  }

  ngOnInit(): void {

  }

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setEmail(response.player.email);
        this.userAuthService.setUserRole(response.player.role);
        this.userAuthService.setAccessToken(response.accessToken);
        this.userAuthService.setRefreshToken(response.refreshToken);

        if(response.accessToken && response.refreshToken && response.player.role) {
          this.router.navigate(['/game'])
        }
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
    
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register(registerForm: NgForm) {
    this.userService.register(registerForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setEmail(response.email);
        this.userAuthService.setUserRole(response.userRole);
        this.userAuthService.setAccessToken(response.accessToken);
        this.userAuthService.setRefreshToken(response.refreshToken);

        if(response.accessToken && response.refreshToken && response.userRole) {
          this.router.navigate(['/game'])
        }
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
    
  }

}

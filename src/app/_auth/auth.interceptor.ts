import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserAuthService } from "../_services/user-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userAuthService: UserAuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        if (req.headers.get("No-Auth") === 'True') {
            return next.handle(req.clone());
        }

        const accessToken = this.userAuthService.getAccessToken();
        const refreshToken = this.userAuthService.getRefreshToken();

        req = this.addToken(req, accessToken, refreshToken);
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if (err.status === 401) {
                        this.router.navigate(['/login']);
                    } else if (err.status === 403) {
                        this.router.navigate(['/forbidden']);
                    } else if (err.status === 400) {
                        return throwError(() => err.error.message);
                    }
                    console.log("Something goes wrong");

                    return throwError(() => new Error("Some thing is wrong"));
                }
            )
        );
    }

    private addToken(request: HttpRequest<any>, accessToken: any, refreshToken: any) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
                RefreshToken: `Bearer ${refreshToken}`
            }
        });
    }
}
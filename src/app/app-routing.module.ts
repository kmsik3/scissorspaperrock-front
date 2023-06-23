import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './_auth/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data: {roles:['ADMIN']} },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard], data: {roles:['USER']} },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'game', component: GameComponent, canActivate:[AuthGuard], data: {roles:['ADMIN', 'USER']} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

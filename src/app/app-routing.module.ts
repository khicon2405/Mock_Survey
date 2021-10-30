import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';
import { LoginComponent } from './routes/sessions/login/login.component';
import { RegisterComponent } from './routes/sessions/register/register.component';
import { HomeComponent } from './routes/user/home/home.component';
import { SurveyComponent } from './routes/user/survey/survey.component';
import { UserComponent } from './routes/user/user.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    children: [{
      path: 'user',
      component: UserComponent,
  
      children: [
        { path: '', redirectTo: 'survey', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'survey', component: SurveyComponent },
      ],
    },

    ]
  },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent}
  // {
  //   path: 'user',
  //   component: UserComponent,

  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: HomeComponent },
  //     { path: 'survey', component: SurveyComponent },
  //   ],
  // },
  // { path: 'survay', component: SurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

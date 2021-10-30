import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './routes/sessions/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SurveyComponent } from './routes/user/survey/survey.component';
import { UserComponent } from './routes/user/user.component';
import { NavComponent } from './routes/user/nav/nav.component';
import { HomeComponent } from './routes/user/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './routes/sessions/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    SurveyComponent,
    UserComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

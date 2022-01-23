import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // register

@NgModule({
  // components
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // register

@NgModule({
  // components
  declarations: [
    AppComponent,
    LoginComponent
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

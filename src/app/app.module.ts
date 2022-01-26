import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component'; // register

// services
import { PubsubService } from './services/pubsub';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  // components, pipes , directives
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderNavbarComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // services
  providers: [
    PubsubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

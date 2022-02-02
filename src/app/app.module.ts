import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component'; // register

// services
import { PubsubService } from './services/pubsub';
import { ApiServices } from './services/api.service';
// directives
import { NumberOnlyDirective } from './directives/numberonly.directive';
// pipes
import { FilterProduct } from './pipes/filter-products';
// components
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LiveProductsComponent } from './live-products/live-products.component';
import { ChildComponentComponent } from './child-component/child-component.component';
@NgModule({
  // components, pipes , directives
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderNavbarComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    LiveProductsComponent,
    NumberOnlyDirective,
    FilterProduct,
    ChildComponentComponent
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngmodel
    HttpClientModule // rest api calls
  ],
  // services
  providers: [
    PubsubService,
    ApiServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

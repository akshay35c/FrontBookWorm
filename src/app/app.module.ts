import { AuthenticationService } from './authentication.service';
import { CustomerDetails } from './CustomerDetails';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerserviceService } from './customerservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerDisplayComponent } from './customer-display/customer-display.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EbookComponent } from './ebook/ebook.component';
import { AudiobookComponent } from './audiobook/audiobook.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MyshelfComponent } from './myshelf/myshelf.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductdbComponent } from './productdb/productdb.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDisplayComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    ProductComponent,
    EbookComponent,
    AudiobookComponent,
    RegisterComponent,
    CartComponent,
    HomeComponent,
    CarouselComponent,
    MyshelfComponent,
    FooterComponent,
    ContactUsComponent,
    ProductdbComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

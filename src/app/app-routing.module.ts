import { CartComponent } from './cart/cart.component';
import { EbookComponent } from './ebook/ebook.component';
import { ProductComponent } from "./product/product.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { CustomerDisplayComponent } from "./customer-display/customer-display.component";
import { CustomerComponent } from "./customer/customer.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AudiobookComponent } from './audiobook/audiobook.component';
import { RegisterComponent } from './register/register.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { MyshelfComponent } from './myshelf/myshelf.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductdbComponent } from './productdb/productdb.component';

const routes: Routes = [
  { path: 'ProductDisplay', component: ProductComponent },
  { path: 'EbookDisplay', component: EbookComponent },
  { path: 'AudioBookDisplay', component: AudiobookComponent },
  { path: 'CustomerRegister', component: CustomerComponent },
  { path: 'CustomerDisplay', component: CustomerDisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shelf', component: MyshelfComponent },
  {path: 'contactus', component: ContactUsComponent},
  { path: 'ProductdbDisplay', component: ProductdbComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

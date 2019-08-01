import { Router } from '@angular/router';
import { ProductComponent } from './../product/product.component';
import { LoginServiceService } from './../login-service.service';
import { CustomerDetails } from './../CustomerDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer:CustomerDetails=new CustomerDetails();
  router: any;
  constructor(private service :LoginServiceService,private route:Router) { }

  ngOnInit(){}

   public Username;
   checkUser()
  {
    //console.log(this.login)
   this.service.searchUser(this.customer).subscribe((data)=>this.Username=data);
   if (this.Username==="valid user")
   {
    this.route.navigate(['/ProductDisplay']);
   }
   else return;
  }

}

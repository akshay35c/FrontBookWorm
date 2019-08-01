import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service: CartService) { }
  lstuser: ProductComponent[];
  ngOnInit() {
    this.service.getfromcart().subscribe((data) => {
      this.lstuser = data;
    });
  }
   total:number=0;
  delfromcart(Prdt:ProductComponent)
  {
    
    this.service.deletefromcart(Prdt).subscribe((data) => console.log(data));
    this.delfromINV(Prdt);
    window.location.reload();
  }

  delfromINV(Prdt:ProductComponent)
  {
    this.service.deletefromInv(Prdt).subscribe((data) => console.log(data))
  }
  calmoney()
  {
    this.total=0;
    for(var i=0;i<=this.lstuser.length;i++)
    {
      this.total=this.total+this.lstuser[i].P_SP;
    }
    
  }

  

}




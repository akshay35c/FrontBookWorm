import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent {
  imageWidth: number = 150;
  imageLeftMargin: number = 25;
  imageH: number = 170;

  P_product_id: number;
  P_name: string;
  P_type: string;
  P_category_id: number;
  P_language_id: number;
  P_mrp: number;
  P_SP: number;
  P_desc: string;
  P_author: string;
  P_image: string;
  P_Rent: string;
  P_lib: string;
  P_rentamt: number;
  P_rentmindays: number;
  P_publisher: string;
  P_Fdate: Date;
  P_tdate: Date;

  ProductComponent$;
  constructor(private service: ProductServiceService,private Cartservice:CartService) {
    this.ProductComponent$ = service.getEbookProduct();
  }

  addtocart(Prdt:ProductComponent)
  {
    this.Cartservice.addcart(Prdt).subscribe((data) => console.log(data));
    this.addinv(Prdt);
  }

  addinv(Prdt:ProductComponent)
  {
    this.Cartservice.addInv(Prdt).subscribe((data) => console.log(data));
  }

}

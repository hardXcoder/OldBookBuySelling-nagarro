import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { DataService } from '../data.service';
import { Data } from '../data';
import { CartData } from '../cartdata';
import { cartotal } from '../cartTotal';






@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DataService]
})



export class CartComponent implements OnInit {

  constructor(private dataService: DataService,
    private router: Router,
    private location: Location) { }

  data: CartData[];
  data2 : cartotal[];

  totalamount =0;


  ngOnInit() {

    console.log("In the cart component")
    console.log("very hilarious^^^^^^^^^^^^^^^^^^^^^^^^")
    
    console.log(this.dataService.IsLoggedIn)
    console.log(this.dataService.IsCurrentId)


    // Here I want to achieve the functionality that the user is able to
    // go to the cart when he is logged in 
    if (this.dataService.IsLoggedIn) {

      this.dataService.showCart(this.dataService.IsCurrentId)
        .subscribe(datas => {
          // console.log("boiled egss******************")

          // console.log( datas);

          // console.log("boiled potatoes******************")

          this.data = datas
          this.helper();

          console.log("yo yo honey sigh")
          console.log(this.data)
        })

    }
    else {
      this.router.navigate(['/signIn'])
    }


  }
  
  helper(){


    for(let i=0;i<this.data.length;i++)
    {
        // this.data2.push({'total':this.data[i].price*this.data[i].quantity});
        this.totalamount = this.totalamount+this.data[i].price*this.data[i].quantity;
    }


  }

  helper2(id,op){


    
          if(op==='inc')
          {
        this.totalamount = this.totalamount + this.data[id].price;
          }
        
        else{
          this.totalamount = this.totalamount-this.data[id].price;
        }
    


  }

  helper3(id){

    this.totalamount = this.totalamount-this.data[id].price*this.data[id].quantity;

}

  removeFromCart(i) {
    alert("Book has been removed from cart")

    // console.log(this.bookArray[i])
    // this.route.navigate(['/cart']);
    this.helper3(i);

    this.data.splice(i,1);

    this.dataService.removeFromCart(this.data[i].order_id, this.data[i].buyer_email)


  }

  incOrder(id) {

    var book_id = this.data[id].book_id;
    var buyer_email = this.data[id].buyer_email;
    var quantity = this.data[id].quantity;
    this.data[id].quantity =    this.data[id].quantity +1 ;


    this.dataService.incOrder(book_id,buyer_email,quantity)
    this.helper2(id,'inc');


  }
  
  decOrder(id) {

    var order_id =this.data[id].order_id;
    var book_id = this.data[id].book_id;
    var buyer_email = this.data[id].buyer_email;
    var quantity = this.data[id].quantity;

    this.data[id].quantity =    this.data[id].quantity -1 ;
    

    this.dataService.decOrder(order_id,book_id,buyer_email,quantity)
   
    this.helper2(id,'dec');

  }

  placeOrder() {
    alert("Thank You for placing your Order!")
  }

  pageRefresher() {

    // window.location.reload();

  }

}

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BookData} from '../bookdata';
import { DataService } from '../data.service';





@Component({
  selector: 'app-middle2',
  templateUrl: './middle2.component.html',
  styleUrls: ['./middle2.component.css']
})
export class Middle2Component implements OnInit {

  // this is the dummy user made , until the user authentication is made 

  bookArray : BookData[];
  inputText ;
  result="";

  constructor(private router: ActivatedRoute,
    private route: Router,
    private dataService: DataService) { }

  ngOnInit() {

    this.dataService.showAllInventory()
    .subscribe(datas =>{

      // console.log("boiled inventory******************")

      // console.log( datas);

      // console.log("cooled inventory******************")


      this.bookArray = datas
      // console.log(this.bookArray) 

    })

  }

  addToCart(i){

    console.log(this.bookArray[i])

    // If local storage is not null , then add to cart results in picking the Id
    // from local storage and putting it in the cart with currId from localstorage
    if(localStorage.currId!=null){

      alert("Book has been added to your cart!")
    this.dataService.addToCart(this.bookArray[i],localStorage.currId)

    }else{

      alert("Please log in to your account!")
     this.route.navigate(['/signIn'])

    }
  }

  clickedCategory(input){


    this.dataService.showByCategory(input)
    .subscribe(datas =>{

      this.bookArray = datas
      if(datas.length==0)
      {
        this.result="No book found ! Try with different search"
      }

    })

  }

  clickedCondition(input){


    this.dataService.showByCondition(input)
    .subscribe(datas =>{

      this.bookArray = datas
      if(datas.length==0)
      {
        this.result="No book found ! Try with different search"
      }

    })
  }

  clickedName(input){


    this.dataService.showByName(input)
    .subscribe(datas =>{

      this.bookArray = datas
      if(datas.length==0)
      {
        this.result="No book found ! Try with different search"
      }

    })
  }

  clickedAuthor(input){

    console.log("my author input")
    console.log(input)


    this.dataService.showByAuthor(input)
    .subscribe(datas =>{

      this.bookArray = datas
      if(datas.length==0)
      {
        this.result="No book found ! Try with different search"
      }

    })
  }


  clickedPrice(input){


    this.dataService.showByPrice(input)
    .subscribe(datas =>{

      this.bookArray = datas
      if(datas.length==0)
      {
        this.result="No book found ! Try with different search"
      }

    })
  }



}

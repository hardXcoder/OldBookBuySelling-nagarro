import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BookData} from '../../bookdata';




@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {


  constructor(private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {

     

  }

  clickedCart(){

    console.log("ujjwal in clicked cart")
    console.log(this.route)
    this.route.navigate(['/cart']);
  }

  clickedLogin(){
    this.route.navigate(['login']);
  }

  clickedSignIn(){
    this.route.navigate(['signIn']);
  }

  clickedAdmin(){
    this.route.navigate(['admin']);
  }

}

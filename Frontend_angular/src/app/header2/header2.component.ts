import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BookData} from '../bookdata';
import { DataService } from '../data.service';




@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})

export class Header2Component implements OnInit {

  bookArray : BookData[];


  constructor(private router: ActivatedRoute,
    private route: Router,
    private dataService: DataService) { }

  ngOnInit() {
  }

  clickedCart(){

    console.log("ujjwal in clicked cart")
    console.log(this.route)
    this.route.navigate(['/cart']);
  }

  clickedSignIn(){
    this.route.navigate(['signIn']);
  }

  clickedSignUp(){
    this.route.navigate(['signUp']);
  }

  clickedAdmin(){
    this.route.navigate(['admin']);
  }

  clickedMessageBox(){
    
    this.route.navigate(['messages']);

  }

  clickedlogout(){

    alert("You are Loged Out!")
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("currId")
    this.route.navigate(['homepage']);
  }

  clickedHome(){
    
    
    this.route.navigate(['homepage'])
  }

}

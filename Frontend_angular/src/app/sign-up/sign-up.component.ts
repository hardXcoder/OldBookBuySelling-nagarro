import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private dataService: DataService,
    private router: Router, ) { }

  ngOnInit() {
  }


  registerUser(event) {


    event.preventDefault()

    console.log(event)

    const target = event.target

    const name = target.querySelector('#name').value
    const email = target.querySelector('#email').value
    const college = target.querySelector('#college').value
    const address = target.querySelector('#address').value
    const number = target.querySelector('#number').value
    const password = target.querySelector('#pass').value


    // To clear off the responses after button press
    target.querySelector('#name').value="";
    target.querySelector('#email').value="";
    target.querySelector('#college').value="";
    target.querySelector('#address').value="";
    target.querySelector('#number').value="";
    target.querySelector('#pass').value="";

    console.log("hello everyone")

    this.dataService.addUserDetails(name, email, college, address, number, password)
      .subscribe(data => {
        if (data.success) {
          console.log(data.message)

          // This updation is for when some user is already logged in 
          // and the new user goes to the sign up page . As soon he sign
          // ups , he hould be redirected to the homepage with localstorage 
          // containing his credentials
           console.log(data.user_email)
          // this.dataService.updateLocalStorage(data.user_id)
           
          //   this.router.navigate(['/homepage'])
        } else {
          window.alert(data.message)
        }
      })
  }

}

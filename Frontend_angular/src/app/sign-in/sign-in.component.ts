import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private dataService : DataService,
               private router: Router, ) { }

  ngOnInit() {
  }

  loginUser(event){

    event.preventDefault()

     const target =event.target
     const email = target.querySelector('#email').value
     const password = target.querySelector('#pass').value

     target.querySelector('#email').value="";
     target.querySelector('#pass').value="";

     console.log("hello from dheer side")
     console.log(email)
     console.log(password)
    
    this.dataService.checkUserDetails(email,password).subscribe(data =>{
      console.log(data)

      if(data.success){
        // this.router.navigate(['/admin'])
        window.alert(data.message)

        console.log(data.message)
        console.log(data.success)

        this.dataService.setLogStatus(true);

        console.log("hello bomb")
        console.log(data.user_email)
        this.dataService.setCurrentId(data.user_email);

        console.log("In the sign in component")

        console.log("very funny^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

        console.log(this.dataService.IsLoggedIn)
        console.log(this.dataService.IsCurrentId)
        console.log(data.user_email)

        this.router.navigate(['/homepage'])

      } else{
        window.alert(data.message)
        console.log(data.message)
      }
    })

  } 

  

}

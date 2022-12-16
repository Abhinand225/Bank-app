import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
// class is a collection of properties and methods
  constructor(){//1st executed
                //used for object initialization
                //It automatically invokes when an object is created
  }
  ngOnInit(): void {// 2nd executed
                    //initial process of component
                    //when a component is created ,at same time it initialize or authorize
                    //when a component is created ,There is a life cycle for it
    
  }

  aim="Your Perfect Banking Partner"
  accountNo="Enter the account number"
  password="Enter the password"

  acno=""
  pswd=""
  //properties
  UserDetails:any={
    1000:{acno:1000,username:"abhi",password:1000,balance:2000},
    1001:{acno:1001,username:"adwaid",password:1001,balance:2000},
    1002:{acno:1002,username:"pranav",password:1002,balance:2000}
  }
  //User defined function// 4th executed
  login(){
    var acno=this.acno;
    var pswd=this.pswd;
    var UserDetails=this.UserDetails;

    if(acno in UserDetails)
    {
      if(pswd==UserDetails[acno].password)
      {
        alert("login successful");
      }
      else
      {
        alert("incorrect password");
      }
    }
    else
    {
      alert("user not found")
    }
    
  }
  acnoChange(event:any){
    // console.log(event.target.value);
    this.acno=event.target.value;
    console.log(this.acno);
    
    
  }
  pswdChange(event:any){
    // console.log(event.target.value);
    this.pswd=event.target.value;
    console.log(this.pswd);
  }

}

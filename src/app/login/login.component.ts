import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm:NgForm){
    console.log(signInForm.value.email);
    console.log(signInForm.value.password);
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.AuthenticationService.authenticate(signInData);
  }
  

}

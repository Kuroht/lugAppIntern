import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dummyLogin = {
    username : "admin",
    password : "admin"
  }
  loginForm: FormGroup;
  @Output() logged: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login(){
    if(this.loginForm.invalid) return;

    if(this.loginForm.value.username === this.dummyLogin.username && 
      this.loginForm.value.password === this.dummyLogin.password){
        this.logged.emit(true);
    } else {
      console.log("Errors logging in");
    }
  }
}

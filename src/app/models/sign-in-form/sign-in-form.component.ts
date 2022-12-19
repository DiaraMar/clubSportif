import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthenticationService } from '../../service/authentication.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  type : string ="password";
  isText : boolean = false;
  eyeIcon : string ="fa-eye-slash";
  signInForm! : FormGroup;
  //passwordPattern : string ="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$";

  constructor(private fb : FormBuilder,private authenticationService : AuthenticationService) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.minLength(5), Validators.required]] //+, Validators.pattern(this.passwordPattern) Regex password no shorter than 5 chars, and with letters and numbers
    })
  }

  /*submitSignIn(loginForm : NgForm){
    this.authenticationService.loginUser();
    //console.log(loginForm.controls['password'].value)
    //console.log(loginForm.controls['firstName'].value)
    }*/

    hideShowPass(){
      this.isText= !this.isText;
      this.isText ? (this.eyeIcon ="fa-eye", this.type="text") : (this.eyeIcon="fa-eye-slash", this.type ="password");
    }

    onSignIn(){
      if(this.signInForm.valid){      
        this.authenticationService.signIn(this.signInForm)
      }else{
        ValidateForm.validateAllFormFields(this.signInForm);
        alert("your form is invalid")
      }
    }




}

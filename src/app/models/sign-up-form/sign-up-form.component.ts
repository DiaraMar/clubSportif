import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit {

  type : string ="password";
  isText : boolean = false;
  eyeIcon : string ="fa-eye-slash";
  signUpForm! : FormGroup;
  //passwordPattern : string ="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$";

  constructor(private fb : FormBuilder, private authenticationService : AuthenticationService) {}


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username : ['', [Validators.required]],
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]],
    })
  }

  hideShowPass(){
    this.isText= !this.isText;
    this.isText ? (this.eyeIcon ="fa-eye", this.type="text") : (this.eyeIcon="fa-eye-slash", this.type ="password");
  }

  onSignUp(){
    if(this.signUpForm.valid){
      this.authenticationService.signUp(this.signUpForm)
      .subscribe({
        next:(res)=>{
          alert(res.message)
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }else{
      ValidateForm.validateAllFormFields(this.signUpForm);
      alert("your form is invalid")
    }
  }


}

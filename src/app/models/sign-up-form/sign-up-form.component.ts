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

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  step: number = 1;
  //passwordPattern : string ="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$";

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      club: ['', [Validators.required]],
      subscription: ['', [Validators.required]],
      civility: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateBirth: ['', [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]], //not working
      adress: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)]],
      zip: ['', [Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/)]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      isSubscribedTrainingProgram: ['', []],
      isSubscribedToEmailing: ['', [Validators.required]],
      isAggreingTermsOfSales: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      isPayer: ['', [Validators.required]],
      ribRegisterChoice: ['', [Validators.required]],
      bankingEstablishment: ['', []],
      IBAN: ['', []],
      BIC: ['', []],
      civilityPayer: ['', []],
      lastnamePayer: ['', []],
      firstnamePayer: ['', []],
      emailPayer: ['', []],
      dateBirthPayer: ['', [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]], //not working
      phonePayer: ['', [Validators.pattern(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)]],
      bankingEstablishmentPayer: ['', []],
      IBANPayer: ['', []],
      BICPayer: ['', []],
    })

    let elementToShow = document.getElementById("step1-form");
    let firstElementToHide = document.getElementById("step2-form");
    let secondElementToHide = document.getElementById("step3-form");

    elementToShow?.classList.remove("invisible");
    firstElementToHide?.classList.add("invisible");
    secondElementToHide?.classList.add("invisible");

    
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = "fa-eye", this.type = "text") : (this.eyeIcon = "fa-eye-slash", this.type = "password");
  }


  onSignUp() {
    console.log(this.signUpForm)
    // if(this.signUpForm.valid){
    //   this.authenticationService.signUp(this.signUpForm)
    //   .subscribe({
    //     next:(res)=>{
    //       alert(res.message)
    //     },
    //     error:(err)=>{
    //       alert(err?.error.message)
    //     }
    //   })
    // }else{
    //   ValidateForm.validateAllFormFields(this.signUpForm);
    //   alert("your form is invalid")
    // }
  }


}






  // onNextStepForm() {
  //   if (this.step >= 1 && this.step <3) {
  //     this.step += 1;
  //     let newStep = this.step;
      
  //     if (newStep === 3) {
  //       let elementToShow = document.getElementById("step3-form");
  //       let firstElementToHide = document.getElementById("step1-form");
  //       let secondElementToHide = document.getElementById("step2-form");

  //       elementToShow?.classList.remove("invisible");
  //       firstElementToHide?.classList.add("invisible");
  //       secondElementToHide?.classList.add("invisible");
  //     }

  //     if (newStep === 2) {

  //       let elementToShow = document.getElementById("step2-form");
  //       let firstElementToHide = document.getElementById("step1-form");
  //       let secondElementToHide = document.getElementById("step3-form");

  //       elementToShow?.classList.remove("invisible");
  //       firstElementToHide?.classList.add("invisible");
  //       secondElementToHide?.classList.add("invisible");
  //     }
  //   }
  // }



    // onPreviousStepForm() {
  //   if (this.step > 0 && this.step <=3) {
  //     this.step -= 1;
  //     let newStep = this.step;
  //     console.log(newStep);
      
  //     if (newStep === 2) {
  //       let elementToShow = document.getElementById("step2-form");
  //       let firstElementToHide = document.getElementById("step1-form");
  //       let secondElementToHide = document.getElementById("step3-form");

  //       elementToShow?.classList.remove("invisible");
  //       firstElementToHide?.classList.add("invisible");
  //       secondElementToHide?.classList.add("invisible");
  //     }

  //     if (newStep === 1) {

  //       let elementToShow = document.getElementById("step1-form");
  //       let firstElementToHide = document.getElementById("step2-form");
  //       let secondElementToHide = document.getElementById("step3-form");

  //       elementToShow?.classList.remove("invisible");
  //       firstElementToHide?.classList.add("invisible");
  //       secondElementToHide?.classList.add("invisible");
  //     }
  //   }
  // }
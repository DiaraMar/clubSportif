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
      email: ['', [Validators.required, Validators.email]],
      dateBirth: ['', [Validators.required, Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]], //not working
      adress: ['', [Validators.required, Validators.pattern(/^\d+\s[A-z]+\s[A-z]+/)]],
      phone: ['', [Validators.required, Validators.pattern(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)]],
      zip: ['', [Validators.required, Validators.pattern(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/)]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      isSubscribedTrainingProgram: ['', []],
      isSubscribedToEmailing: ['', [Validators.required]],
      isAggreingTermsOfSales: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      isPayer: ['', [Validators.required]],
      ribRegisterChoice: ['', [Validators.required]],
      RIB: ['', []],
      bankingEstablishment: ['', []],
      IBAN: ['', [Validators.pattern(/^(?:(?:IT|SM)\d{2}[A-Z]\d{22}|CY\d{2}[A-Z]\d{23}|NL\d{2}[A-Z]{4}\d{10}|LV\d{2}[A-Z]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[A-Z]{4}\d{14}|GI\d{2}[A-Z]{4}\d{15}|RO\d{2}[A-Z]{4}\d{16}|KW\d{2}[A-Z]{4}\d{22}|MT\d{2}[A-Z]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})$/)]],
      BIC: ['', [Validators.pattern(/([a-zA-Z]{4})([a-zA-Z]{2})(([2-9a-zA-Z]{1})([0-9a-np-zA-NP-Z]{1}))((([0-9a-wy-zA-WY-Z]{1})([0-9a-zA-Z]{2}))|([xX]{3})|)/)]],
      civilityPayer: ['', []],
      lastnamePayer: ['', []],
      firstnamePayer: ['', []],
      emailPayer: ['', [Validators.email]],
      dateBirthPayer: ['', [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]], //not working
      phonePayer: ['', [Validators.pattern(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)]],
      bankingEstablishmentPayer: ['', []],
      RIBPayer: ['', []],
      IBANPayer: ['', [Validators.pattern(/^(?:(?:IT|SM)\d{2}[A-Z]\d{22}|CY\d{2}[A-Z]\d{23}|NL\d{2}[A-Z]{4}\d{10}|LV\d{2}[A-Z]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[A-Z]{4}\d{14}|GI\d{2}[A-Z]{4}\d{15}|RO\d{2}[A-Z]{4}\d{16}|KW\d{2}[A-Z]{4}\d{22}|MT\d{2}[A-Z]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})$/)]],
      BICPayer: ['', [Validators.pattern(/([a-zA-Z]{4})([a-zA-Z]{2})(([2-9a-zA-Z]{1})([0-9a-np-zA-NP-Z]{1}))((([0-9a-wy-zA-WY-Z]{1})([0-9a-zA-Z]{2}))|([xX]{3})|)/)]],
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
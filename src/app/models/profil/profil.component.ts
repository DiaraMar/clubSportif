import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/class/member';
import { PersonList } from 'src/app/class/mock/personList';
import { Person } from 'src/app/class/person';
import { DeleteAccountService } from 'src/app/service/delete-account.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  USERS: any[] = [
    {
      email: "andy_chak@gmail.com",
      role: "member",
      ID: 123,
      civility: "mr",
      lastname: "anderson",
      firstname: "chakir",
      dateBirth: new Date("2002-03-25"),
      phone: "0639985475",
      adress: "1 rue de paris",
      zip: 75008,
      city: "paris",
      country: "france",
      bankingDetail: { rib: "698526548365214789", establishment: "nickel", iban: "852314756852314756852314756", bic: "ncklfr5" },
      isSubscribedTrainingProgram: false,
      isSubscribedToEmailing: true,
      contract: [
        {
          IDContract: 236,
          club: "fitness park",
          subscription: "sans engagement",
          payer: null,
        },
        {
          IDContract: 237,
          club: "fitness park",
          subscription: "sans engagement",
          payer:
          {
            civility: "mrs",
            lastname: "anderson",
            firstname: "sylvia",
            email: "sylvia.anderson25@wanadoo.com",
            dateBirth: new Date("13/01/1945"),
            phone: "0687453152",
            adress: "1 rue de paris",
            zip: 75008,
            city: "paris",
            country: "france",
            bankingDetail: { rib: "12345123412345678912", establishment: "la banque populaire", iban: "123456789123456789123456789", bic: "lbqpfr54" }
          }
        },
        {
          IDContract: 237,
          club: "fitness park",
          subscription: "sans engagement",
          payer:
          {
            civility: "mr",
            lastname: "anderson",
            firstname: "pierre",
            email: "travauxterrassement@outlook.com",
            dateBirth: new Date("13/12/1944"),
            phone: "0678933242",
            adress: "1 rue de paris",
            zip: 75008,
            city: "paris",
            country: "france",
            bankingDetail: { rib: "632545879852364758", establishment: "la banque populaire", iban: "254125412541263698785412368", bic: "lbqpfr54" },
            Activity : 
            [
              {idCourse: 185987, coach: "Fred delamo", linkCoach: "/coach", discipline:"cardio", date: new Date("2022-8-19"), duration: 45, statusCourse:"valid", rateCoach: 3, rateMember:5   }
            ]
          }
        }
      ]
    },
    {
      email: "roxane_power@gmail.com",
      role: "member",
      ID: 124,
      civility: "mrs",
      lastname: "martineau",
      firstname: "roxane",
      dateBirth: new Date("1990-8-19"),
      phone: "0682774415",
      adress: "9 rue du moulin",
      zip: 91130,
      city: "ris-orangis",
      country: "france",
      bankingDetail: { rib: "", establishment: "", iban: "", bic: "" }
    }
  ]

  currentUserConnected = this.USERS[0];


  constructor(private deleteAccount : DeleteAccountService) { }

  ngOnInit(): void {
  }

  deleteThisAccount(){
    let result;

    console.log(result);

    if(result){
        // Delete logic goes hereù
        this.deleteAccount.deleteAccount(this.currentUserConnected.ID)
    }  }


}

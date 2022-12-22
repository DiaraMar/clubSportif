import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  COACHS: any[] = [
    {
      email: "sosRegim@gmail.com",
      role: "coach",
      ID: 153,
      civility: "mr",
      lastname: "noel",
      firstname: "leo",
      dateBirth: new Date("1985-03-25"),
      phone: "0639985475",
      adress: "1 rue de paris",
      zip: 75008,
      city: "paris",
      country: "france",
      bankingDetail: { rib: "698526548365214789", establishment: "nickel", iban: "852314756852314756852314756", bic: "ncklfr5" },
      isSubscribedTrainingProgram: false,
      isSubscribedToEmailing: true,
      discipline :["fitness waterpool", "kapoera"], 
      planing:"calendlylink"
    },
    {
      email: "roxane_coachsportifpersonnel@gmail.com",
      role: "coach",
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
      bankingDetail: { rib: "", establishment: "", iban: "", bic: "" },
      isSubscribedTrainingProgram: false,
      isSubscribedToEmailing: true,
      discipline :["fitness waterpool", "kapoera"], 
      planing:"calendlylink"
    }
  ]

  currentUserConnected = this.COACHS[1];


  constructor() { }

  ngOnInit(): void {

    console.log("///////////////////");
    console.log(this.currentUserConnected);
  }

}

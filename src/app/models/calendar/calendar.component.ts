import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date = new Date("2022-12-01");
  firstDay: number = -1;
  lastDay: number = -1;
  sum: number = 0;
  startPoint: number = 0;
  myEvents : Map<Date, object[]>=new Map();
  

  SEMAINE1: number[] = [];
  SEMAINE2: number[] = [];
  SEMAINE3: number[] = [];
  SEMAINE4: number[] = [];
  SEMAINE5: number[] = [];
  SEMAINE6: number[] = [];

  constructor() { }

  ngOnInit(): void {

    this.getMonth(this.date);

    this.myEvents.set(new Date("2022-12-01"),  [{id:158, title: "kapoeira", start:15, duration:45}, {id:159, title: "gymnastique", start:16, duration:45}])
    this.myEvents.set(new Date("2022-15-01"),  [{id:158, title: "kapoeira", start:15, duration:45}, {id:159, title: "gymnastique", start:16, duration:45}])
  }

  getMonth(date: Date) {

    this.firstDay = date.getDay();
    this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    this.sum = this.lastDay + this.firstDay - 1;
    this.startPoint = 2 - this.firstDay;

    for (let i = 1; i < 6; i++) {

      if (i === 6) {
        for (let y = 1; y < 8; y++) {
          if (this.startPoint<=this.lastDay) {
          this.SEMAINE6.push(54);
          console.log("check", this.startPoint)

          this.startPoint += 1;
        }
      }
    }

      if (i === 5) {
          for (let y = 1; y < 8; y++) {
            if (this.startPoint<=this.lastDay) {
            this.SEMAINE5.push(this.startPoint);
            this.startPoint += 1;
          }
        }
      }

      if (i === 4) {
        for (let y = 1; y < 8; y++) {
          this.SEMAINE4.push(this.startPoint);
          this.startPoint += 1;
        }
      }

      if (i === 3) {
        for (let y = 1; y < 8; y++) {
          this.SEMAINE3.push(this.startPoint);
          this.startPoint += 1;
        }
      }

      if (i === 2) {
        for (let y = 1; y < 8; y++) {
          this.SEMAINE2.push(this.startPoint);
          this.startPoint += 1;
        }
      }

      if (i === 1) {
        for (let y = 1; y < 8; y++) {
          this.SEMAINE1.push(this.startPoint);
          this.startPoint += 1;
        }
      }

      console.log("firstDay", this.firstDay);
      console.log("lastDay", this.lastDay);
      console.log("sum", this.sum);
      console.log("start point", this.startPoint);
      console.log("semaine 1", this.SEMAINE1);
      console.log("semaine 2", this.SEMAINE2);
      console.log("semaine 3", this.SEMAINE3);
      console.log("semaine 4", this.SEMAINE4);
      console.log("semaine 5", this.SEMAINE5);
      console.log("semaine 6", this.SEMAINE6);
      console.log(this.date);
      console.log(this.date.getUTCDay);




    }


  }
}
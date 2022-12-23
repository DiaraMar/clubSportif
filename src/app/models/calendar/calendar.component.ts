import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  date = new Date("2022-10-01");
  firstDay: number = -1;
  lastDay: number = -1;
  selectedYear : number= -1;
  selectedMonth : number= -1;
  sum: number = 0;
  startPoint: number = 0;
  myEvents : Map<string, Object[]>=new Map();
  buildDate : string="";
  

  SEMAINE1: any[] = [];
  SEMAINE2: any[] = [];
  SEMAINE3: any[] = [];
  SEMAINE4: any[] = [];
  SEMAINE5: any[] = [];
  SEMAINE6: any[] = [];




  constructor() { }

  ngOnInit(): void {

    this.createCalendar(this.date);

    // this.myEvents.set(new Date("2022-12-01"),  [{id:158, title: "kapoeira", start:15, duration:45}, {id:159, title: "gymnastique", start:16, duration:45}]);
    // this.myEvents.set(new Date("2022-15-01"),  [{id:158, title: "kapoeira", start:15, duration:45}, {id:159, title: "gymnastique", start:16, duration:45}]);
    // this.myEvents.set(new Date("2022-11-01"),  [{id:158, title: "kapoeira", start:15, duration:45}, {id:159, title: "gymnastique", start:16, duration:45}]);
    this.myEvents.set("11/11/2022",  [{title: "event 1", start:11, status:true}, {title:"event 2",  start:12, status:true}]);
    this.myEvents.set("02/10/2022",  [{title: "event 3", start:74, status:true}, {title:"event 4",  start:11, status:false}]);
    this.myEvents.set("06/12/2022",  [{title: "event 5", start:74, status:false}, {title:"event 6",  start:13, status:true}]);


    // console.log("test");
    // console.log(new Date("2022-12-01").toString);
    // console.log(this.myEvents.get("2022-12-01"));
    // let size = this.myEvents.get("2022-12-01")?.length!;

     this.getValueOfElement("01/11/2022");

  }

  createCalendar(date: Date) {

    this.selectedMonth = date.getMonth()+1;
    this.selectedYear= date.getFullYear();
   
    this.firstDay = date.getDay();
    this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    this.sum = this.lastDay + this.firstDay - 1;
    this.startPoint = 2 - this.firstDay;
    let monthKey="";

    if(this.selectedMonth<10){
      monthKey ="0"+this.selectedMonth;
    }else{
      monthKey=""+this.selectedMonth;
    }

    for (let i = 1; i <= 6; i++) {

      if (i === 6) {

        for (let y = 1; y < 8; y++) {

          if(this.startPoint<=this.lastDay){
            if(this.startPoint<1){
              this.SEMAINE6.push("");          
            }
            if(this.startPoint<10 &&  this.startPoint>0){
              if(this.startPoint>0){
                let date = this.buildDate = "0"+ this.startPoint +"/" +monthKey+"/" + this.selectedYear;
                //let date = new Date(this.buildDate);
                this.SEMAINE6.push(date);          
              }}
            else{
              let date = this.buildDate = this.startPoint +"/" +this.selectedMonth+"/" + this.selectedYear;
              this.SEMAINE6.push(date);   
            }
             
  
            this.startPoint += 1;

          }

        }
    }

      if (i === 5) {

        for (let y = 1; y < 8; y++) {

          if(this.startPoint<=this.lastDay){
            if(this.startPoint<1){
              this.SEMAINE5.push("");  
              console.log('this.startPoint<1',this.startPoint)        
            }
            if(this.startPoint<10 &&  this.startPoint>0){
              if(this.startPoint>0){
                let date = this.buildDate = "0"+ this.startPoint +"/" +monthKey+"/" + this.selectedYear;
                //let date = new Date(this.buildDate);
                this.SEMAINE5.push(date);  
                console.log('this.startPoint<10 >0',this.startPoint)        
        
              }}
            else{
              let date = this.buildDate = this.startPoint +"/" +this.selectedMonth+"/" + this.selectedYear;
              this.SEMAINE5.push(date);
              console.log('else',this.startPoint)        
   
            }
            console.log(y,'else',this.startPoint);
            this.startPoint += 1;
          }
        }
      }

      if (i === 4) {
        for (let y = 1; y < 8; y++) {

  
          if(this.startPoint<10 &&  this.startPoint>0){
            if(this.startPoint>0){
              let date = this.buildDate = "0"+ this.startPoint +"/" +monthKey+"/" + this.selectedYear;
              //let date = new Date(this.buildDate);
              this.SEMAINE4.push(date);          
            }}
          else{
            let date = this.buildDate = this.startPoint +"/" +this.selectedMonth+"/" + this.selectedYear;
            this.SEMAINE4.push(date);   
          }
           

          this.startPoint += 1;
        }
      }

      if (i === 3) {
        for (let y = 1; y < 8; y++) {

  
          if(this.startPoint<10 &&  this.startPoint>0){
            if(this.startPoint>0){
              let date = this.buildDate = "0"+ this.startPoint +"/" +monthKey+"/" + this.selectedYear;
              //let date = new Date(this.buildDate);
              this.SEMAINE3.push(date);          
            }}
          else{
            let date = this.buildDate = this.startPoint +"/" +this.selectedMonth+"/" + this.selectedYear;
            this.SEMAINE3.push(date);   
          }
           

          this.startPoint += 1;
        }
      }

      if (i === 2) {
        for (let y = 1; y < 8; y++) {

          if(this.startPoint<1){
            this.SEMAINE2.push("");          
          }
          if(this.startPoint<10 &&  this.startPoint>0){
            if(this.startPoint>0){
              let date = this.buildDate = "0"+ this.startPoint +"/" +monthKey+"/" + this.selectedYear;
              //let date = new Date(this.buildDate);
              this.SEMAINE2.push(date);          
            }}
          else{
            let date = this.buildDate = this.startPoint +"/" +this.selectedMonth+"/" + this.selectedYear;
            this.SEMAINE2.push(date);   
          }
           

          this.startPoint += 1;
        }

      }

      if (i === 1) {
        for (let y = 1; y < 8; y++) {

          if(this.startPoint<10){
            if(this.startPoint>0){
              let date = this.buildDate = "0"+ this.startPoint +"/" +monthKey+"/" + this.selectedYear;
              //let date = new Date(this.buildDate);
              this.SEMAINE1.push(date);          
            }else{
              this.SEMAINE1.push("");          

            }


          }
          else{
            let date = this.buildDate = "0"+ this.startPoint +"/" +this.selectedMonth+"/" + this.selectedYear;
            this.SEMAINE1.push(date);   
          }
           

          this.startPoint += 1;
        }

      }

      // console.log("firstDay", this.firstDay);
      // console.log("lastDay", this.lastDay);
      // console.log("sum", this.sum);
      // console.log("start point", this.startPoint);
       //console.log("semaine 1", this.SEMAINE1);
       //console.log("semaine 2", this.SEMAINE2);
       //console.log("semaine 3", this.SEMAINE3);
       //console.log("semaine 4", this.SEMAINE4);
       //console.log("semaine 5", this.SEMAINE5);
       //console.log("semaine 6", this.SEMAINE6);
      // console.log(this.date);
      // console.log(this.date.getUTCDay);

    }
  }


  getValueOfElement (date : string){

    //console.log("Notre date");
    //console.log(date);

    // console.log(date);
    // console.log(date.toDateString());
    // console.log(date.toLocaleDateString("fr"));
    // console.log(typeof (date.toLocaleDateString("fr")));

    //console.log("My events");
    //console.log(this.myEvents);

    //console.log(this.myEvents.get(date)!);

    //console.log("Object.values(element)");
    // for(let element of this.myEvents.get(date)!){
        // console.log(Object.values(element));
        // return
      //  console.log(element);
        // }

        return(this.myEvents.get(date)!);
  }
  getObject(object : Object){
    console.log(Object.values(object));
    return Object.values(object);
  }


}
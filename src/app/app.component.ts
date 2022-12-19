import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  menuIsActiv: boolean;

  constructor() { 
    this.menuIsActiv = false;
 }

 ngOnInit(){
   document.getElementById("nav-container")?.classList.add('notVisible');

 }

  displayMenu(){
    this.menuIsActiv ? 
    document.getElementById("nav-container")?.classList.add('notVisible') :
    document.getElementById("nav-container")?.classList.remove('notVisible');

    //menu-global
    this.menuIsActiv = !this.menuIsActiv;


  }
}

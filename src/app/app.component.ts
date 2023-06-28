import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lugAppIntern';
  logged = true;


  changedLoggedState() {
    this.logged = true;
    console.log("Logged", this.logged);
  }
}

import { EmitNum } from './emit-num';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

odds:number[] = [5,4,5,3,5,3,3];
evens:number[] = [4,3];

  title = 'app works!';

  onEventCreated(o:EmitNum) {

    var i = o.counter;
    switch (i % 2)
    {
      case 0:
        this.odds.push(i);
      break;
      case 1:
        this.evens.push(i);
      break;
      default:
      break;
    }
  
    console.log("event created"+o.counter);
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmitNum } from '../../emit-num'

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  constructor() { }
  
  private timerReference;

  @Output() eventCreated = new EventEmitter<EmitNum>();
   
  @Output('counter') i:number;

  ngOnInit() {
    this.i=0;
  }
  
  onClickStartGame()
  {
    console.log("star pushed");
    this.timerReference= setInterval(
      ()=>{
          console.log("time"+(++this.i));
          var counter:EmitNum = new EmitNum();
          counter.counter = this.i;
          this.eventCreated.emit(counter);},400);
    
  }

  onClickStopGame()
  {
    console.log("stop pushed");
    clearInterval(this.timerReference);
  }

}

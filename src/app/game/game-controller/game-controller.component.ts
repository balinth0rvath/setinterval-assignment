import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  constructor() { }
  
  private timerReference;

  @Output() eventCreated = new EventEmitter<{emitNum:number}>();
   
  @Output('counter') i:number;

  ngOnInit() {
    this.i=0;
  }
  
  onClickStartGame()
  {
    console.log("star pushed");
    this.timerReference= setInterval(
      ()=>{console.log("time"+(++this.i));this.eventCreated.emit({ emitNum:this.i });},400);
    
  }

  onClickStopGame()
  {
    console.log("stop pushed");
    clearInterval(this.timerReference);
  }

}

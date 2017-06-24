import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game/game-controller/game-controller.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

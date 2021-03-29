import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuForm: FormGroup;
  optionGame: string;
  choose: boolean = false;

  escolherDificuldade(opt){
    this.choose = true
    this.optionGame = opt
  }
  
}

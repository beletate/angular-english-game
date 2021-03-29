import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facil',
  templateUrl: './facil.component.html',
  styleUrls: ['./facil.component.css']
})
export class FacilComponent implements OnInit {

  facilMenu: FormGroup
  count = 1
  acertos = 0
  mensagem:string = "Lorem Ipsum"
  respostasCorretas = ['Went', 'Has', 'Were', 'Am', 'Doesnot']
  respostasJogador = []

  constructor() { }

  ngOnInit(): void {
  }

  escolherOpcao(value:string){
    this.count = this.count + 1
    this.respostasJogador.push(value)
    console.log(this.respostasJogador)
    if(this.count == 6){
      this.checarRespostas()
    }
  }
  checarRespostas(){
    for(let i in this.respostasCorretas){
      if(this.respostasJogador[i] === this.respostasCorretas[i]){
        this.acertos = this.acertos + 1
      }
    }
  }
}

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
  mensagem: string
  respostasCorretas = ['Went', 'Has', 'Were', 'Am', 'Doesnot']
  respostasJogador = []

  constructor() { }

  ngOnInit(): void {
  }

  escolherOpcao(value: string) {
    this.count = this.count + 1
    this.respostasJogador.push(value)
    if (this.count == 6) {
      this.checarRespostas()
      this.mensagem = this.acertos >= 3 ? "Parabéns, vejo que se dedicou muito ao teste! Vá para o próximo nível!" : "Não desista, continue tentando!"
    }
  }
  checarRespostas() {
    for (let i in this.respostasCorretas) {
      if (this.respostasJogador[i] === this.respostasCorretas[i]) {
        this.acertos = this.acertos + 1
      }
    }
  }
}

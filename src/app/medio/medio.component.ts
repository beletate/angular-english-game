import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medio',
  templateUrl: './medio.component.html',
  styleUrls: ['./medio.component.css']
})
export class MedioComponent implements OnInit {

  medioMenu: FormGroup
  count = 1
  acertos = 0
  mensagem: string
  respostasCorretas = ['a', 'His', 'wifesRight', 'bigger', 'went']
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

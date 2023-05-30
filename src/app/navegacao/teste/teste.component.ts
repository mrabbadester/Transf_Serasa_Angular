import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  public nome: String = "";
  minhaVariavel: String = "Marlus";
  Sobrenome: String = "Abbade";

  linkSite: String = "https://www.google.com.br";


  contador: number = 0;


  adicionaUm() {
    this.contador++;
  }

  menosUm() {
    this.contador--;
  }

  zerarContador() {
    this.contador = 0;
  }

teclar(event: any){
  console.log(event.target.value);

  this.nome = event.target.value;
}



}

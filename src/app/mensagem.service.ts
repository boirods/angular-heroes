import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  mensagens: string[] = [];

  addMensagem(mensagem: string){
    this.mensagens.push(mensagem);
  }
  clear(){
    this.mensagens=[];
  }
}

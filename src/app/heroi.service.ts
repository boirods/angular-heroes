import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MensagemService } from './mensagem.service';
import { Heroi } from './hero';
import { HEROIS } from './mock-herois';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private messageService:MensagemService) { }
  
  getHerois():Observable<Heroi[]>{
    const herois = of(HEROIS);
    this.messageService.addMensagem('HeroiService: recebido a lista de heróis');
    return herois;
  }
  getHeroi(id:Number):Observable<Heroi>{
    const heroi = HEROIS.find(h => h.id === id)!;
    this.messageService.addMensagem(`HeroiService: pegado o heroi de id=${id}`);
    return of(heroi);
  }
}

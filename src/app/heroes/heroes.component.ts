import { Component, OnInit } from '@angular/core';

import { Heroi } from '../hero';
import { HeroiService } from '../heroi.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  herois:Heroi[] = [];
  selectedHeroi?: Heroi;

  constructor(private heroiService:HeroiService, private mensagemService:MensagemService) {}

  ngOnInit(): void {
    this.getHerois();
  }

  getHerois():void{
    this.heroiService.getHerois().subscribe(herois => this.herois = herois);
  }

}

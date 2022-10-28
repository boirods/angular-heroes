import { Component, OnInit } from '@angular/core';
import { Heroi } from '../hero';
import { HeroiService } from '../heroi.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  herois:Heroi[]=[];
  poderosos:Heroi[]=[];
  melhorAtaque: Heroi = {} as Heroi;
  melhorDefesa: Heroi = {} as Heroi;
  piorAtaque: Heroi = {} as Heroi;
  piorDefesa: Heroi = {} as Heroi;
  maiorPoder: Heroi = {} as Heroi;
  menorPoder: Heroi = {} as Heroi;

  constructor(private messageService:MensagemService,
    private heroiService:HeroiService) { }

  ngOnInit(): void {
    this.getPoderosos();
    this.melhorAtaque = this.getMelhorAtaque();
    this.melhorDefesa = this.getMelhorDefesa();
    this.piorAtaque = this.getPiorAtaque();
    this.piorDefesa = this.getPiorDefesa();
    this.maiorPoder = this.getMaiorPoder();
    this.menorPoder = this.getMenorPoder();
  }

  getPoderosos():void{
    this.heroiService.getHerois().subscribe( herois =>this.herois = herois);
    for(let heroi of this.herois){
      heroi.poder = heroi.ataque + heroi.defesa;
    }
    this.poderosos = this.herois.sort((a:Heroi,b:Heroi) => {return a.poder - b.poder}).reverse();
    this.poderosos = this.poderosos.slice(0,3);
    //this.poderosos = this.poderosos.reverse();
    this.messageService.addMensagem("Recebido a lista de 3 mais poderosos")
  }
  getMelhorAtaque():Heroi{
    let maisforte = this.herois[0]; 
    console.log(maisforte+' - primeiro heroi - ata')
    this.herois.forEach((heroi) => {
      if(heroi.ataque > maisforte.ataque) {
        maisforte = heroi;
      }
    })
    return maisforte;
  }
  getMelhorDefesa():Heroi{
    let maisforte = this.herois[0];
    console.log(maisforte+' - primeiro heroi - def')
    this.herois.forEach((heroi) => {
      if(heroi.defesa > maisforte.defesa) {
        maisforte = heroi;
      }
    })
    return maisforte;
  }
  getPiorAtaque():Heroi{
    let maisfraco = this.herois[0]; 
    this.herois.forEach((heroi) => {
      if(heroi.ataque < maisfraco.ataque) {
        maisfraco = heroi;
      }
    })
    return maisfraco;
  }
  getPiorDefesa():Heroi{
    let maisfraco = this.herois[0];
    this.herois.forEach((heroi) => {
      if(heroi.defesa < maisfraco.defesa) {
        maisfraco = heroi;
      }
    })
    return maisfraco;
  }
  getMaiorPoder():Heroi{
    let maisForte = this.herois[0];
    this.herois.forEach((heroi) => {
      if(heroi.poder > maisForte.poder){
        maisForte = heroi;
      }
    })
    return maisForte;
  }
  getMenorPoder():Heroi{
    let maisFraco = this.herois[0];
    this.herois.forEach((heroi) => {
      if(heroi.poder < maisFraco.poder){
        maisFraco = heroi;
      }
    })
    return maisFraco;
  }
}

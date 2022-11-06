import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroiService } from '../heroi.service';
import { Heroi } from '../hero';

@Component({
  selector: 'app-heroi-detalhes',
  templateUrl: './heroi-detalhes.component.html',
  styleUrls: ['./heroi-detalhes.component.css']
})
export class HeroiDetalhesComponent implements OnInit {
  @Input() heroi?:Heroi;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroiService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getHeroi();
  }

  getHeroi():void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroi(id).subscribe(heroi => this.heroi = heroi);
  }

  salvar():void{
    if(this.heroi){
      this.heroService.atualizaHeroi(this.heroi)
        .subscribe(() => this.goBack());
    }
  }
  
  apagar(): void{
    alert("Não será possível recuperar estes dados...")
    
  }

  goBack(): void {
    this.location.back();
  }
}

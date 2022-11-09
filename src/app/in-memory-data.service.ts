import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroi } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const herois = [
      { id: 12, nome: 'Dr. Nice', ataque: 0, defesa: 0, poder: 0 },
      { id: 13, nome: 'Bombasto', ataque: 0, defesa: 0, poder: 0 },
      { id: 14, nome: 'Celeritas', ataque: 0, defesa: 0, poder: 0 },
      { id: 15, nome: 'Magneta', ataque: 0, defesa: 0, poder: 0 },
      { id: 16, nome: 'RubberMan', ataque: 0, defesa: 0, poder: 0 },
      { id: 17, nome: 'Dynama', ataque: 0, defesa: 0, poder: 0 },
      { id: 18, nome: 'Dr. IQ', ataque: 0, defesa: 0, poder: 0 },
      { id: 19, nome: 'Magma', ataque: 0, defesa: 0, poder: 0 },
      { id: 20, nome: 'Tornado', ataque: 0, defesa: 0, poder: 0 }
    ];
    return {herois};
  }
  geraId(herois: Heroi[]): number{
    return herois.length > 0 ? Math.max(...herois.map(heroi => heroi.id))+1 : 11;
  }
  constructor() { }
}

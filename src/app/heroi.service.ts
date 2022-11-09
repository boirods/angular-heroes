import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MensagemService } from './mensagem.service';
import { Heroi } from './hero';
import { HEROIS } from './mock-herois';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {
  
  private heroisUrl = 'api/herois';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService:MensagemService
  ) { }

  private log(mensagem: string){
    this.messageService.addMensagem(`HeroService: ${mensagem}`);
  }
  
  getHerois():Observable<Heroi[]>{
    return this.http.get<Heroi[]>(this.heroisUrl).pipe(
      tap( _ => this.log('recuperado herois')),
      catchError(this.handleError<Heroi[]>('getHerois', []))
    );
  }

  private handleError<T>(operation = 'operation', result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
  
  getHeroi(id:Number):Observable<Heroi>{
    const url = `${this.heroisUrl}/${id}`;
    return this.http.get<Heroi>(url).pipe(
      tap( _ => this.log(`recuperado heroi id=${id}`)),
      catchError(this.handleError<Heroi>(`getHero id=${id}`))
    );
  }

  atualizaHeroi(heroi: Heroi):Observable<any> {
    return this.http.put(this.heroisUrl, heroi, this.httpOptions).pipe(
      tap( _ => this.log(`atualizado heroi id=${heroi.id}`)),
      catchError(this.handleError<any>('atualizaHeroi'))
    );
  }
  
  adicionaHeroi(heroi: Heroi):Observable<Heroi> {
    return this.http.post<Heroi>(this.heroisUrl, heroi, this.httpOptions).pipe(
      tap((novoHeroi:Heroi) => this.log(`adicionado um heroi vazio no id=${novoHeroi.id}`)),
      catchError(this.handleError<Heroi>('adicionaHeroi'))
    );
  }

  apagaHeroi(id:Number):Observable<Heroi>{
    const url = `${this.heroisUrl}/${id}`;

    return this.http.delete<Heroi>(url, this.httpOptions).pipe(
      tap(_ => this.log(`apagado o herói de id ${id}`)),
      catchError(this.handleError<Heroi>('apagaHeroi'))
    )
  }
}

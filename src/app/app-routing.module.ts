import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroiDetalhesComponent } from './heroi-detalhes/heroi-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: 'herois', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalhe/:id', component: HeroiDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

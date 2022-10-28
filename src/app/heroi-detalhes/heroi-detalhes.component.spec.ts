import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiDetalhesComponent } from './heroi-detalhes.component';

describe('HeroiDetalhesComponent', () => {
  let component: HeroiDetalhesComponent;
  let fixture: ComponentFixture<HeroiDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroiDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroiDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

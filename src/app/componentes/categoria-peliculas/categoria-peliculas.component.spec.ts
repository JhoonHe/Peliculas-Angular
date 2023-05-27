import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPeliculasComponent } from './categoria-peliculas.component';

describe('CategoriaPeliculasComponent', () => {
  let component: CategoriaPeliculasComponent;
  let fixture: ComponentFixture<CategoriaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaPeliculasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoriaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

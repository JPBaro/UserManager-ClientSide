import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUsuarioComponent } from './detalles-usuario.component';

describe('DetallesUsuarioComponent', () => {
  let component: DetallesUsuarioComponent;
  let fixture: ComponentFixture<DetallesUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

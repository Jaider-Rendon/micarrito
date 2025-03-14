import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquiladosComponent } from './alquilados.component';

describe('AlquiladosComponent', () => {
  let component: AlquiladosComponent;
  let fixture: ComponentFixture<AlquiladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlquiladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlquiladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

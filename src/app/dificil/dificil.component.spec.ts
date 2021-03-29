import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DificilComponent } from './dificil.component';

describe('DificilComponent', () => {
  let component: DificilComponent;
  let fixture: ComponentFixture<DificilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DificilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DificilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

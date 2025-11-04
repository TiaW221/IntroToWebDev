import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhysExample2 } from './rhys-example2';

describe('RhysExample2', () => {
  let component: RhysExample2;
  let fixture: ComponentFixture<RhysExample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhysExample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhysExample2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

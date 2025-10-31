import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattPage } from './matt-page';

describe('MattPage', () => {
  let component: MattPage;
  let fixture: ComponentFixture<MattPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MattPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

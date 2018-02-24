import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepagePortfolioComponent } from './onepage-portfolio.component';

describe('OnepagePortfolioComponent', () => {
  let component: OnepagePortfolioComponent;
  let fixture: ComponentFixture<OnepagePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepagePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

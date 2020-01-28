import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseDevelopmentComponent } from './showcase-development.component';

describe('ShowcaseDevelopmentComponent', () => {
  let component: ShowcaseDevelopmentComponent;
  let fixture: ComponentFixture<ShowcaseDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

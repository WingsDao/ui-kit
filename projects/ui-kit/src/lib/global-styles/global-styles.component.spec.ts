import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStylesComponent } from './global-styles.component';

describe('GlobalStylesComponent', () => {
  let component: GlobalStylesComponent;
  let fixture: ComponentFixture<GlobalStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

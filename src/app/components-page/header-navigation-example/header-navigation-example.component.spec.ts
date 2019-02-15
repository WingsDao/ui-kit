import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigationExampleComponent } from './header-navigation-example.component';

describe('HeaderNavigationExampleComponent', () => {
  let component: HeaderNavigationExampleComponent;
  let fixture: ComponentFixture<HeaderNavigationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavigationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavigationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

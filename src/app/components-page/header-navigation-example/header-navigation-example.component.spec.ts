import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { HeaderNavigationExampleComponent } from './header-navigation-example.component';
import { DemoComponent } from 'src/app/common/demo/demo.component';

describe('HeaderNavigationExampleComponent', () => {
  let component: HeaderNavigationExampleComponent;
  let fixture: ComponentFixture<HeaderNavigationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavigationExampleComponent, DemoComponent ],
      imports: [UiKitModule]
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

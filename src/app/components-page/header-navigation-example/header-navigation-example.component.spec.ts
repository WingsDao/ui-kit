import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { HeaderNavigationExampleComponent } from './header-navigation-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('HeaderNavigationExampleComponent', () => {
  let component: HeaderNavigationExampleComponent;
  let fixture: ComponentFixture<HeaderNavigationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavigationExampleComponent ],
      imports: [UiKitModule, DemoModule]
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

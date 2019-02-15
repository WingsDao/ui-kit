import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitModule } from 'ui-kit';
import { DemoComponent } from '../../common/demo/demo.component';
import { HelpExampleComponent } from './help-example.component';

describe('HelpExampleComponent', () => {
  let component: HelpExampleComponent;
  let fixture: ComponentFixture<HelpExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpExampleComponent, DemoComponent ],
      imports: [UiKitModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

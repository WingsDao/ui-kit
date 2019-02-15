import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { DemoComponent } from '../../common/demo/demo.component';
import { RadioButtonExampleComponent } from './radio-button-example.component';

describe('RadioButtonExampleComponent', () => {
  let component: RadioButtonExampleComponent;
  let fixture: ComponentFixture<RadioButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonExampleComponent, DemoComponent ],
      imports: [UiKitModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

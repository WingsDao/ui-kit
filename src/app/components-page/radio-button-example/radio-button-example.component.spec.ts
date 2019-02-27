import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';
import { FormsModule } from '@angular/forms';

import { RadioButtonExampleComponent } from './radio-button-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('RadioButtonExampleComponent', () => {
  let component: RadioButtonExampleComponent;
  let fixture: ComponentFixture<RadioButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonExampleComponent ],
      imports: [UiKitModule, DemoModule, FormsModule]
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

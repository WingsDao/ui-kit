import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';
import { FormsModule } from '@angular/forms';

import { RadioExampleComponent } from './radio-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('RadioExampleComponent', () => {
  let component: RadioExampleComponent;
  let fixture: ComponentFixture<RadioExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioExampleComponent ],
      imports: [UiKitModule, DemoModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

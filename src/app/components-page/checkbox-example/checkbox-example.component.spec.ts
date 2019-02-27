import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';
import { FormsModule } from '@angular/forms';

import { CheckboxExampleComponent } from './checkbox-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('CheckboxExampleComponent', () => {
  let component: CheckboxExampleComponent;
  let fixture: ComponentFixture<CheckboxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxExampleComponent ],
      imports: [UiKitModule, DemoModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

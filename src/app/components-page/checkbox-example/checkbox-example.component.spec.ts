import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { CheckboxExampleComponent } from './checkbox-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('CheckboxExampleComponent', () => {
  let component: CheckboxExampleComponent;
  let fixture: ComponentFixture<CheckboxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxExampleComponent ],
      imports: [UiKitModule, DemoModule]
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

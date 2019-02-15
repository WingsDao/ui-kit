import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitModule } from 'ui-kit';
import { DemoComponent } from '../../common/demo/demo.component';
import { CheckboxExampleComponent } from './checkbox-example.component';

describe('CheckboxExampleComponent', () => {
  let component: CheckboxExampleComponent;
  let fixture: ComponentFixture<CheckboxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxExampleComponent, DemoComponent ],
      imports: [UiKitModule]
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

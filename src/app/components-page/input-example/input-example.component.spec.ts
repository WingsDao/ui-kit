import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { InputExampleComponent } from './input-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('InputExampleComponent', () => {
  let component: InputExampleComponent;
  let fixture: ComponentFixture<InputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputExampleComponent ],
      imports: [UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

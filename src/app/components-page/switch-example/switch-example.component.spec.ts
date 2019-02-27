import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';
import { FormsModule } from '@angular/forms';

import { SwitchExampleComponent } from './switch-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('SwitchExampleComponent', () => {
  let component: SwitchExampleComponent;
  let fixture: ComponentFixture<SwitchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchExampleComponent ],
      imports: [UiKitModule, DemoModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

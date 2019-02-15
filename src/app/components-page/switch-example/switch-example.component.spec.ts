import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { DemoComponent } from '../../common/demo/demo.component';
import { SwitchExampleComponent } from './switch-example.component';

describe('SwitchExampleComponent', () => {
  let component: SwitchExampleComponent;
  let fixture: ComponentFixture<SwitchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchExampleComponent, DemoComponent ],
      imports: [UiKitModule]
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

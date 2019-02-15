import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { DemoComponent } from '../../common/demo/demo.component';
import { TabsExampleComponent } from './tabs-example.component';

describe('TabsExampleComponent', () => {
  let component: TabsExampleComponent;
  let fixture: ComponentFixture<TabsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsExampleComponent, DemoComponent ],
      imports: [UiKitModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

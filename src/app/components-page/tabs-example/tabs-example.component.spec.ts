import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { TabsExampleComponent } from './tabs-example.component';
import { DemoModule } from 'src/app/common/demo/demo.module';

describe('TabsExampleComponent', () => {
  let component: TabsExampleComponent;
  let fixture: ComponentFixture<TabsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsExampleComponent ],
      imports: [UiKitModule, DemoModule]
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

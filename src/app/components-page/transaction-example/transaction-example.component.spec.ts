import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiKitModule } from 'ui-kit';

import { TransactionExampleComponent } from './transaction-example.component';
import { DemoModule } from '../../common/demo/demo.module';

describe('TransactionExampleComponent', () => {
  let component: TransactionExampleComponent;
  let fixture: ComponentFixture<TransactionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionExampleComponent ],
      imports: [UiKitModule, DemoModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

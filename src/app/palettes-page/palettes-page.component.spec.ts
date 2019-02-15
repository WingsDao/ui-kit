import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalettesPageComponent } from './palettes-page.component';
import { AppModule } from '../app.module';
import { AppCommonModule } from '../common/common.module';

describe('PalettesPageComponent', () => {
  let component: PalettesPageComponent;
  let fixture: ComponentFixture<PalettesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppCommonModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalettesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

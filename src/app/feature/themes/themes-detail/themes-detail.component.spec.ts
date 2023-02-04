import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesDetailComponent } from './themes-detail.component';

describe('ThemesDetailComponent', () => {
  let component: ThemesDetailComponent;
  let fixture: ComponentFixture<ThemesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

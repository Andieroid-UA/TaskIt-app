import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySplashPageComponent } from './overlay-splash-page.component';

describe('OverlaySplashPageComponent', () => {
  let component: OverlaySplashPageComponent;
  let fixture: ComponentFixture<OverlaySplashPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlaySplashPageComponent]
    });
    fixture = TestBed.createComponent(OverlaySplashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

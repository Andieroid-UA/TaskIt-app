import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTaskComponent } from './overlay-task.component';

describe('OverlayTaskComponent', () => {
  let component: OverlayTaskComponent;
  let fixture: ComponentFixture<OverlayTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayTaskComponent]
    });
    fixture = TestBed.createComponent(OverlayTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

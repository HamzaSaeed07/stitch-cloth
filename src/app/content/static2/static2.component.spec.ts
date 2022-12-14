import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Static2Component } from './static2.component';

describe('Static2Component', () => {
  let component: Static2Component;
  let fixture: ComponentFixture<Static2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Static2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Static2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

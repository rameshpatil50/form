import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcontrolComponent } from './sidebarcontrol.component';

describe('SidebarcontrolComponent', () => {
  let component: SidebarcontrolComponent;
  let fixture: ComponentFixture<SidebarcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

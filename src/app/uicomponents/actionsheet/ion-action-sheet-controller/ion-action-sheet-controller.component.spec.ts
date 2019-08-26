import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonActionSheetControllerComponent } from './ion-action-sheet-controller.component';

describe('IonActionSheetControllerComponent', () => {
  let component: IonActionSheetControllerComponent;
  let fixture: ComponentFixture<IonActionSheetControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonActionSheetControllerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonActionSheetControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

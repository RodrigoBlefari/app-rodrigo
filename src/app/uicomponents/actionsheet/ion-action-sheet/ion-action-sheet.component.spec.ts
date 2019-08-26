import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonActionSheetComponent } from './ion-action-sheet.component';

describe('IonActionSheetComponent', () => {
  let component: IonActionSheetComponent;
  let fixture: ComponentFixture<IonActionSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonActionSheetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

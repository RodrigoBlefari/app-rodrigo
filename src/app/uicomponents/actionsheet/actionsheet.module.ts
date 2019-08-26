import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionsheetPage } from './actionsheet.page';
import { IonActionSheetComponent } from './ion-action-sheet/ion-action-sheet.component';
import { IonActionSheetControllerComponent } from './ion-action-sheet-controller/ion-action-sheet-controller.component';

const routes: Routes = [
  {
    path: '',
    component: ActionsheetPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionsheetPage,IonActionSheetComponent, IonActionSheetControllerComponent]
})
export class ActionsheetPageModule {}

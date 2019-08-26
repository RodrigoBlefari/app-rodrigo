import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-action-sheet',
  templateUrl: './ion-action-sheet.component.html',
  styleUrls: ['./ion-action-sheet.component.scss'],
})
export class IonActionSheetComponent implements OnInit {
  codetype: string;
  constructor() { }

  ngOnInit() {
    this.codetype = "angular";
   }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    console.log('Segment detail', ev.detail.value);
    this.codetype = ev.detail.value;
  }
}



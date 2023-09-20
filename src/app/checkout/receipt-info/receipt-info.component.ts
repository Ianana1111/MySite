import { Component } from '@angular/core';
import { appPath } from 'src/app/app-path.const';
import { SendType } from './send-type';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent {
  path = appPath;

  sendType = SendType;

  selectedType = SendType.EMAIL;

  constructor() { }

  ngOnInit() {}

  switch(type: number): void {
    this.selectedType = type;
  }

  didSelected(type: number): boolean {
    return this.selectedType === type;
  }
}

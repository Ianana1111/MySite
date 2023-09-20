import { Component } from '@angular/core';
import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent {
  path = appPath;
}

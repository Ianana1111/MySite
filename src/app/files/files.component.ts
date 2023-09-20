import { Component } from '@angular/core';
import { appPath } from '../app-path.const';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  path = appPath;
}

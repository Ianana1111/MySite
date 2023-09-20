import { Component } from '@angular/core';
import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-solve-note',
  templateUrl: './solve-note.component.html',
  styleUrls: ['./solve-note.component.css']
})
export class SolveNoteComponent {
  path = appPath;
}

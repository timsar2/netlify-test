import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponent } from '../../../shared/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}

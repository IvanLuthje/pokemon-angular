import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './layout/layout.component.html',
  styleUrl: './layout/layout.component.css'
})
export class AppComponent {
  title = 'pokemon-angular';
}

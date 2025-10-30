import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // ✅ Corrected from styleUrl to styleUrls
})
export class App {
  protected readonly title = signal('My Blog');
}



import { Component, signal } from '@angular/core';
import { Exemplo } from './exemplo/exemplo';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Exemplo],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}
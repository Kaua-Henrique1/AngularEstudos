import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  lolo() {
    let car: number[] = [1,2,3,4]
    for (let i = 0; i < car.length; i++) {
      const element = car[i];
      
    }
  }

  protected readonly title = signal('exerciciosPoo');
}

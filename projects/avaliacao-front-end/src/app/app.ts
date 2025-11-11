import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  gasolina= 5.99;
  adtivada= 6.21;
  etanol= 4.56;
  disel= 5.40;
  litros: number = 0;
  
  calculadoraGasolina() {
    
  }

  protected readonly title = signal('Posto de Gasolina');
}

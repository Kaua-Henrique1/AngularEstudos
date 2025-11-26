import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registroNotas } from '../shared/models/resgistroNotas';
import { diario } from '../shared/models/diario';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  listaNotas: registroNotas[] = [];

  protected readonly title = signal('ClassesAngular');
}

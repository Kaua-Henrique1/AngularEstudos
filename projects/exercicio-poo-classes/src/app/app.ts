import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exemplar } from './exemplar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('exercicioPooClasses');

  acaoAtual = 'nenhuma'
  isbn = 0;
  titulo = '';
  quantidade = 0;
  cdd = '';
  cddProcura = '';
  mensagemCddProcura = '';
  listaLivros: Exemplar[] = []

  constructor() {
    this.listaLivros.push(new Exemplar(1234, "Corridas Radicais", "B1A2", 10))

  }

  

  escolher(acao: string) {
    this.acaoAtual = acao
  }

  adicionarExemplar() {
    let exemplarLivro = new Exemplar(this.isbn,this.titulo,this.cdd,this.quantidade)
    this.listaLivros.push(exemplarLivro)
    this.acaoAtual = 'nenhuma'
  }

  encontrarExemplar() {
    let exemplarEncontrado = this.listaLivros.find(livro => livro.getCdd() === this.cddProcura)
    if (exemplarEncontrado === undefined) {
      this.mensagemCddProcura = ("Livro nao encontrado.")
    } else {
      this.mensagemCddProcura = ("Titulo do livro: "+ exemplarEncontrado.getTitulo() + " ISBN: " + exemplarEncontrado.getIsbn() +" CDD: " + exemplarEncontrado.getCdd() +" Quantidade de Exemplares: "+ exemplarEncontrado.getQuantidadeExemplares())
    } 
  }
}
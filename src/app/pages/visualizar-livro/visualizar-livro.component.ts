import { Component } from '@angular/core';
import { LivrariaService } from '../../core/services/livraria.service';
import {  ActivatedRoute } from '@angular/router';
import { Livro } from '../../core/types/livro';

@Component({
  selector: 'app-visualizar-livro',
  imports: [],
  templateUrl: './visualizar-livro.component.html',
  styleUrl: './visualizar-livro.component.css'
})
export class VisualizarLivroComponent {
  constructor(private livraria: LivrariaService, private router: ActivatedRoute) {}
  idLivro!: number;
livroEscolhido!: Livro;

ngOnInit(): void {
  this.idLivro = Number(this.router.snapshot.paramMap.get('id'));
  this.livraria.visualizarLivro(this.idLivro).subscribe((livro) => {
    this.livroEscolhido = livro;
  });
}
}

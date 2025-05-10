import { Component } from '@angular/core';
import { Livro } from '../../core/types/livro';
import { LivrariaService } from '../../core/services/livraria.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conteudo',
  imports: [RouterModule, CommonModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {
 listaLivro: Livro[] = [];
 
 constructor(private service: LivrariaService) {}
 ngOnInit(): void {
   this.service.listarLivro().subscribe((livros) => {
     this.listaLivro = livros.slice(0,6);
    });
  }
}

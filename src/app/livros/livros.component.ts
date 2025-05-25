import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Livro } from '../core/types/livro';
import { LivrariaService } from '../core/services/livraria.service';

@Component({
  selector: 'app-livros',
  imports: [RouterModule, CommonModule],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})

export class LivrosComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livrariaService: LivrariaService) {}

  ngOnInit(): void {
    this.livrariaService.listarLivro().subscribe({
      next: (dados) => {
        this.livros = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar livros:', erro);
      }
    });
  }
}

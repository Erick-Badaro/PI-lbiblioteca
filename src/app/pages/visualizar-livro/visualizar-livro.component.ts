import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../../core/services/livraria.service';
import {  ActivatedRoute, RouterModule } from '@angular/router';
import { Livro } from '../../core/types/livro';

@Component({
  selector: 'app-visualizar-livro',
  imports: [RouterModule],
  templateUrl: './visualizar-livro.component.html',
  styleUrl: './visualizar-livro.component.css'
})
export class VisualizarLivroComponent implements OnInit {
  constructor(private livraria: LivrariaService, private router: ActivatedRoute) {}
  idLivro!: number;
  livroEscolhido!: Livro;
  usuario = JSON.parse(localStorage.getItem('usuario') || '{}') as { id: string };
  idUsuario: string = this.usuario.id;
  
  
  
  ngOnInit(): void {
  this.idLivro = Number(this.router.snapshot.paramMap.get('id'));
  this.livraria.visualizarLivro(this.idLivro).subscribe((livro) => {
    this.livroEscolhido = livro;
    });
}
}

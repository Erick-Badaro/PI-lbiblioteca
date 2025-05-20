import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../../core/services/livraria.service';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../../core/types/livro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pedido } from '../../core/types/pedido';

@Component({
  selector: 'app-visualizar-livro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './visualizar-livro.component.html',
  styleUrl: './visualizar-livro.component.css'
})
export class VisualizarLivroComponent implements OnInit {
  constructor(private livraria: LivrariaService, private router: ActivatedRoute) { }

  idLivro!: number;
  livroEscolhido!: Livro;
  idUsuario!: string;
  pedido: Pedido = {} as Pedido;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const usuario = localStorage.getItem('usuario');
      if (usuario) {
        const userObj = JSON.parse(usuario) as { id: string };
        this.idUsuario = userObj.id;
      }
    }
    this.idLivro = Number(this.router.snapshot.paramMap.get('id'));
    this.livraria.visualizarLivro(this.idLivro).subscribe((livro) => {
      this.livroEscolhido = livro;
    });
  }

  submeter() { 
    if (!this.idUsuario) {
      alert('precisa de logar no site para adicionar o livro ao carrinho!')
      return;
    }

    if (this.pedido.qtd > this.livroEscolhido.estoque) {
      alert('Quantidade informada maior que o estoque disponível!');
      return;
    }

    this.pedido.livroId = this.livroEscolhido.id;
    this.pedido.usuarioId = this.idUsuario;
    this.pedido.valor = this.pedido.qtd * this.livroEscolhido.valor;

    this.livraria.incluirPedido(this.pedido).subscribe(() => {
      alert('foi pro carrinho!')
    })
  }

}

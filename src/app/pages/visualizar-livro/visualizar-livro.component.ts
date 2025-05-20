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
    const usuario = this.livraria.getUsuarioLogado(); 
    if (usuario) {
      this.idUsuario = String(usuario.id);
    } else {
      this.idUsuario = ''; 
    }
  
    this.idLivro = Number(this.router.snapshot.paramMap.get('id'));
    this.livraria.visualizarLivro(this.idLivro).subscribe((livro) => {
      this.livroEscolhido = livro;
    });
  }
  

  submeter() {
    if (!this.livraria.estaLogado()) {
      alert('Você precisa estar logado para adicionar ao carrinho!');
      return;
    }
  
    if (this.pedido.qtd > this.livroEscolhido.estoque || this.pedido.qtd <= 0  || this.pedido.qtd == null) {
      alert('Quantidade informada maior que o estoque disponível!');
      return;
    }
  
    const usuario = this.livraria.getUsuarioLogado();
    if (!usuario) return; 
  
    this.pedido.livroId = this.livroEscolhido.id;
    this.pedido.usuarioId = String(usuario.id);
    this.pedido.valor = this.pedido.qtd * this.livroEscolhido.valor;
  
    this.livraria.incluirPedido(this.pedido).subscribe(() => {
      alert('Foi pro carrinho!');
    });
  }
  

}

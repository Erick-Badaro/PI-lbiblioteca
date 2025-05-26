import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../../core/services/livraria.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Livro } from '../../core/types/livro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pedido } from '../../core/types/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizar-livro',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './visualizar-livro.component.html',
  styleUrl: './visualizar-livro.component.css'
})
export class VisualizarLivroComponent implements OnInit {
  constructor(private livraria: LivrariaService, private router: ActivatedRoute) { }

  idLivro!: number;
  livroEscolhido!: Livro;
  idUsuario!: string;
  pedido: Pedido = {} as Pedido;
  errLogin: boolean = false
  errQtd: boolean = false
  correctItem: boolean = false

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
      this.errLogin = true
      setTimeout(() => {
        const popup = document.getElementById('err-popupLogin');
        if (popup) {
          popup.style.opacity = '0';
        }
      }, 2000)
      setTimeout(() => {
        this.errLogin = false;
      }, 3000);
      return;
    }

    if (this.pedido.qtd > this.livroEscolhido.estoque || this.pedido.qtd <= 0 || this.pedido.qtd == null) {
      this.errQtd = true;
      setTimeout(() => {
        const popup = document.getElementById('err-popupQtd');
        if (popup) {
          popup.style.opacity = '0';
        }
      }, 2000)
      setTimeout(() => {
        this.errQtd = false
      }, 3000)
      return;
    }

    const usuario = this.livraria.getUsuarioLogado();
    if (!usuario) return;

    this.pedido.livroId = this.livroEscolhido.id;
    this.pedido.usuarioId = String(usuario.id);
    this.pedido.valor = this.pedido.qtd * this.livroEscolhido.valor;

    this.livraria.incluirPedido(this.pedido).subscribe(() => {
      this.correctItem = true
      setTimeout(() => {
        const popup = document.getElementById('correct-popup');
        if (popup) {
          popup.style.opacity = '0';
        }
      }, 2000)
      setTimeout(() => {
        this.correctItem = false
      }, 3000)
    });
  }
}

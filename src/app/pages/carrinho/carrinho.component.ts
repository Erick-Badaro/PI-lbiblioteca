import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../../core/services/livraria.service';
import { Pedido } from '../../core/types/pedido';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { carrinho } from '../../core/types/carrinho';
import { Livro } from '../../core/types/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  constructor(private livraria: LivrariaService, private router: ActivatedRoute) { }
  pedido: Pedido[] = [];
  iduser!: string | null;
  livro: Livro[] = [];
  carrinho: carrinho[] = [];
  tem: boolean = false
  sem: boolean = false;
  total: number = 0;

  ngOnInit(): void {
    this.iduser = this.router.snapshot.paramMap.get('id');

    this.livraria.pedido(this.iduser).subscribe((pedido) => {
      this.pedido = pedido;

      for (let i = 0; i < this.pedido.length; i++) {
        this.livraria.visualizarLivro(this.pedido[i].livroId).subscribe((livro) => {
          this.carrinho.push({
            id: this.pedido[i].id,
            titulo: livro.titulo,
            capa: livro.capa,
            qtd: this.pedido[i].qtd,
            valor: this.pedido[i].valor
          });

          this.total += Number(this.pedido[i].valor);
        });
      }
      if(this.pedido.length > 0) {
        this.tem = true;
        this.sem = false;
      } else {
        this.tem = false;
        this.sem = true;
      }
    });

  }
  excluir(id: string) {
    this.livraria.excluirPedido(id).subscribe(() => {
      window.location.reload();
    })
  }

  exibir() {
    return this.total;
  }

}

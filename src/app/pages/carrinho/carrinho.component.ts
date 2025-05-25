import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../../core/services/livraria.service';
import { Pedido } from '../../core/types/pedido';
import { ActivatedRoute } from '@angular/router';
import { carrinho } from '../../core/types/carrinho';
import { Livro } from '../../core/types/livro';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  constructor(private livraria: LivrariaService, private router: ActivatedRoute) { }
  pedido: Pedido[] = [];
  iduser!: string | null;
  livro: Livro[] = [];
  carrinho: carrinho[] = [];

  ngOnInit(): void {
    this.iduser = this.router.snapshot.paramMap.get('id');

    this.livraria.pedido(this.iduser).subscribe((pedido) => {
      this.teste = pedido;

      for (let i = 0; i < this.pedido.length; i++) {
        this.livraria.visualizarLivro(this.pedido[i].livroId).subscribe((livro) => {
          this.carrinho.push({
            id: this.pedido[i].id,
            titulo: livro.titulo,
            capa: livro.capa,
            qtd: this.pedido[i].qtd,
            valor: this.pedido[i].valor
          });
        });
      }
    }); 
    console.log(this.carrinho)
  }
  excluir(id: string) {
    this.livraria.excluirPedido(id).subscribe(() => {
      window.location.reload();
    })
  }

}

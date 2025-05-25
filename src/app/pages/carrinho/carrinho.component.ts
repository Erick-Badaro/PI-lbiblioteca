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
  teste: Pedido[] = [];
  iduser!: string | null;
  livro: Livro[] = [];
  carrinho: carrinho[] = [];
  pedidoItem!: number | null;

  ngOnInit(): void {
    this.iduser = this.router.snapshot.paramMap.get('id');

    this.iduser = this.router.snapshot.paramMap.get('id');

    this.livraria.pedido(this.iduser).subscribe((pedido) => {
      this.teste = pedido;

      for (let i = 0; i < this.teste.length; i++) {
        

        this.livraria.visualizarLivro(this.teste[i].livroId).subscribe((livro) => {
          this.carrinho[i] = {
            titulo: livro.titulo,
            capa: livro.capa,
            qtd: this.teste[i].qtd,
            valor: this.teste[i].valor
          };
        });
      }
    });

    console.log(this.carrinho)

  }
}

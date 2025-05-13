import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrariaService } from '../../core/services/livraria.service';
import { Usuario } from '../../core/types/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alterar-dados',
  imports: [FormsModule, CommonModule],
  templateUrl: './alterar-dados.component.html',
  styleUrl: './alterar-dados.component.css'
})

export class AlterarDadosComponent implements OnInit {
  usuario!: Usuario;
  mensagem = '';

  constructor(
    private route: ActivatedRoute,
    private service: LivrariaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.buscarPorId(id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  salvarAlteracoes() {
    this.service.atualizar(this.usuario).subscribe(() => {
      this.mensagem = 'Dados atualizados com sucesso!';
      setTimeout(() => this.mensagem = '', 3000);
    }, erro => {
      console.error('Erro ao atualizar dados:', erro);
    });
  }
}
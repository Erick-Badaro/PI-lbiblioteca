import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LivrariaService } from '../../core/services/livraria.service';
import { Usuario } from '../../core/types/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(
    private service: LivrariaService,
    private router: Router
  ) {}

  cadastrar() {
    this.service.incluir(this.usuario).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    }, erro => {
      alert('Erro ao cadastrar usuário.');
      console.error(erro);
    });
  }
}
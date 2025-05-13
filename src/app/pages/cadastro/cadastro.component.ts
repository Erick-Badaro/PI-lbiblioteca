import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LivrariaService } from '../../core/services/livraria.service';
import { Usuario } from '../../core/types/usuario';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
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
  ) { }

  sucessoCadastro: boolean = false;
  erroCadastro: boolean = false;

  cadastrar() {
    this.service.incluir(this.usuario).subscribe(() => {
      this.sucessoCadastro = true;
      this.usuario = { nome: '', email: '', senha: '' }; 

      
      setTimeout(() => {
        this.sucessoCadastro = false;
        this.router.navigate(['/login']);
      }, 3000);
    }, erro => {
      this.erroCadastro = true;

      
      setTimeout(() => {
        this.erroCadastro = false;
      }, 3000);

      console.error(erro);
    });
  }
}

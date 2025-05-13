import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivrariaService } from '../../core/services/livraria.service';
import { Usuario } from '../../core/types/usuario';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = {
    email: '',
    senha: '',
    nome: ''
  };

  constructor(
    private service: LivrariaService,
    private router: Router
  ){}

  erroLogin: boolean = false;

  fazerLogin() {
    this.service.validarLogin(this.usuario.email, this.usuario.senha).subscribe(res => {
      if (res.length > 0) {
        const usuarioLogado = res[0];
        this.service.login(usuarioLogado); 
        this.erroLogin = false;
        this.router.navigate(['/conteudo']);
      } else {
        this.erroLogin = true;
        setTimeout(() => {
          this.erroLogin = false;
        }, 3000);
      }

      
    });

}
}
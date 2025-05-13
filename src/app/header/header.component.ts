import { Component, OnInit } from '@angular/core';
import { LivrariaService } from '../core/services/livraria.service';
import { Usuario } from '../core/types/usuario';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(private service: LivrariaService) {}

  ngOnInit(): void {
    this.service.usuarioLogado$.subscribe(user => {
      this.usuario = user;
    });
  }

  logout() {
    this.service.logout();
  }
}

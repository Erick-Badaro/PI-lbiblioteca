import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../types/livro';
import { Usuario } from '../types/usuario';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  private readonly livro = 'http://localhost:3000/livro';
  private readonly usuario = 'http://localhost:3000/usuario';
  private readonly pedido = 'http://localhost:3000/pedido';

  constructor(private http: HttpClient) { }

  listarLivro(): Observable <Livro[]> {
    return this.http.get<Livro[]>(this.livro);
  }

visualizarLivro(id: number): Observable<Livro> {
  return this.http.get<Livro>(this.livro + `/${id}`);
}

validarLogin(email: string, senha: string):Observable<Usuario[]>{
  return this.http.get<Usuario[]>(`${this.usuario}?email=${email}&senha=${senha}`);
}

}

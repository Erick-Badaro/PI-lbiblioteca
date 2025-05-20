import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Livro } from '../types/livro';
import { Usuario } from '../types/usuario';
import { Pedido } from '../types/pedido';


@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  private readonly livro = 'http://localhost:3000/livro';
  private readonly usuario = 'http://localhost:3000/usuario';
  private readonly pedidoUrl = 'http://localhost:3000/pedido';
  private baseUrl = 'http://localhost:3000';
  private usuarioLogadoSubject = new BehaviorSubject<Usuario | null>(this.getUsuarioLocal());
  public usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

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

login(usuario: Usuario): void{
  localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  this.usuarioLogadoSubject.next(usuario);
}

logout(): void {
  localStorage.removeItem('usuarioLogado');
  this.usuarioLogadoSubject.next(null);
}

getUsuarioLocal(): Usuario | null {
  if (typeof window !== 'undefined' && localStorage.getItem('usuarioLogado')) {
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
  }
  return null;
}


getUsuarioLogado(): Usuario | null {
  return this.usuarioLogadoSubject.value;
}

estaLogado(): boolean{
  return this.getUsuarioLogado() !== null;
}


incluir(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>(this.usuario, usuario)
}

buscarPorId(id: string): Observable<Usuario> {
  return this.http.get<Usuario>(`${this.usuario}/${id}`);
}

atualizar(usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(`${this.usuario}/${usuario.id}`, usuario);
}

incluirPedido(pedido : Pedido): Observable<Pedido> {
  return this.http.post<Pedido>(this.pedidoUrl, pedido);
}


}

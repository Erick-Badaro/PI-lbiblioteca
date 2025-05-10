import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { VisualizarLivroComponent } from './pages/visualizar-livro/visualizar-livro.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {
        path: '',
        component: ConteudoComponent,
    },
    {
        path: 'conteudo',
        component: ConteudoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'visualizar/:id',
        component: VisualizarLivroComponent
    },
    
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    
    
    {
        path: '**',
        redirectTo: 'conteudo',
    },

    

];

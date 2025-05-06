import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

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
        path: '**',
        redirectTo: 'conteudo',
    },
];

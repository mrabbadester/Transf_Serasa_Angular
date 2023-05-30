import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContatoComponent } from "./empresa/contato/contato.component";
import { SobreComponent } from "./empresa/sobre/sobre.component";
import { LoginComponent } from "./navegacao/login/login.component";
import { TesteComponent } from "./navegacao/teste/teste.component";
import { ObservadoraComponent } from "./navegacao/observadora/observadora.component";

export const rotasConfig: Routes = [

    /*sozinho o automatico home*/
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'Sobre', component: SobreComponent },
    { path: 'login', component: LoginComponent },
    { path: 'teste', component: TesteComponent },
    { path: 'observadoras', component: ObservadoraComponent },

 ];

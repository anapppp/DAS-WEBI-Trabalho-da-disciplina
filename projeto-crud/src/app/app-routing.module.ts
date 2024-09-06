import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { InserirAlunoComponent } from './aluno/inserir-aluno/inserir-aluno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alunos/listar',
    pathMatch: 'full'
  },
  {
    path: 'alunos',
    redirectTo: 'alunos/listar'
  },
  {
    path: 'alunos/listar',
    component: ListarAlunoComponent
  },
  {
    path: 'alunos/novo',
    component: InserirAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

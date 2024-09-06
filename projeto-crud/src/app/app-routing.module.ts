import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

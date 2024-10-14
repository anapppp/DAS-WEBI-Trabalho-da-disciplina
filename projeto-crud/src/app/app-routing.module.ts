import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRouter, withDebugTracing } from '@angular/router';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { InserirEditarAlunoComponent } from './aluno/inserir-editar-aluno/inserir-editar-aluno.component';
import { HomeComponent } from './home/home.component';
import { ListarCursoComponent } from './curso/listar-curso/listar-curso.component';
import { InserirEditarCursoComponent } from './curso/inserir-editar-curso/inserir-editar-curso.component';
import { InserirEditarMatriculaComponent } from './matricula/inserir-editar-matricula/inserir-editar-matricula.component';
import { ListarMatriculaComponent } from './matricula/listar-matricula/listar-matricula.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
    component: InserirEditarAlunoComponent
  },
  {
    path: 'alunos/editar/:id',
    component: InserirEditarAlunoComponent
  },
  {
    path: 'cursos',
    redirectTo: 'cursos/listar'
  },
  {
    path: 'cursos/listar',
    component: ListarCursoComponent
  },
  {
    path: 'cursos/novo',
    component: InserirEditarCursoComponent
  },
  {
    path: 'cursos/editar/:id',
    component: InserirEditarCursoComponent
  },
  {
    path: 'matriculas',
    redirectTo: 'matriculas/listar'
  },
  {
    path: 'matriculas/novo',
    component: InserirEditarMatriculaComponent
  },
  {
    path: 'matriculas/editar/:id',
    component: InserirEditarMatriculaComponent
  },
  {
    path: 'matriculas/listar',
    component: ListarMatriculaComponent
  },

];

bootstrapApplication(ListarMatriculaComponent, { providers: [ provideRouter(routes, withDebugTracing())]});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

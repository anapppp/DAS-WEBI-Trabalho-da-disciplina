import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirEditarAlunoComponent } from './inserir-editar-aluno/inserir-editar-aluno.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarAlunoComponent,
    InserirEditarAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientng update @angular/material @angular/router

  ]
})
export class AlunoModule { }

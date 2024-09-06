import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirAlunoComponent } from './inserir-aluno/inserir-aluno.component';



@NgModule({
  declarations: [
    ListarAlunoComponent,
    InserirAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AlunoModule { }

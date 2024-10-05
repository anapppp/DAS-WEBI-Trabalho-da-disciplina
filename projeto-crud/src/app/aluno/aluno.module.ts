import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirAlunoComponent } from './inserir-aluno/inserir-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    ListarAlunoComponent,
    InserirAlunoComponent,
    EditarAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class AlunoModule { }

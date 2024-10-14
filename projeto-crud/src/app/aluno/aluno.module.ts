import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalAlunoComponent } from './modal-aluno/modal-aluno.component';
import { InserirEditarAlunoComponent } from './inserir-editar-aluno/inserir-editar-aluno.component';
import { AlunoService } from './services/aluno.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    ListarAlunoComponent,
    InserirEditarAlunoComponent,
    ModalAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    AlunoService,
    [provideNgxMask()]
  ]
})
export class AlunoModule { }

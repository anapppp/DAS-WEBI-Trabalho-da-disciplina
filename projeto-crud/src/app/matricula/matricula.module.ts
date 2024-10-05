import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InserirEditarMatriculaComponent } from './inserir-editar-matricula/inserir-editar-matricula.component';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { ModalMatriculaComponent } from './modal-matricula/modal-matricula.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AlunoService } from '../aluno/services/aluno.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    InserirEditarMatriculaComponent,
    ListarMatriculaComponent,
    ModalMatriculaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers:[
    provideNgxMask(),
  ]
})
export class MatriculaModule { }

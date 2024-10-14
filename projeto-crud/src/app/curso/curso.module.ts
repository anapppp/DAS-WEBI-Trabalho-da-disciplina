import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CursoService } from './services/curso.service';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { InserirEditarCursoComponent } from './inserir-editar-curso/inserir-editar-curso.component';
import { ModalCursoComponent } from './modal-curso/modal-curso.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    ListarCursoComponent,
    InserirEditarCursoComponent,
    ModalCursoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers:[
    CursoService,
    [provideNgxMask()]
  ]
})
export class CursoModule { }

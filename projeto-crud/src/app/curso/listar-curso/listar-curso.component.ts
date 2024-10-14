import { Component, OnInit } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
import { CursoService } from '../services/curso.service';
import { ModalCursoComponent } from '../modal-curso/modal-curso.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrl: './listar-curso.component.css'
})

export class ListarCursoComponent implements OnInit{
  cursos: Curso[] = [];
  mensagem: string = "";
  mensagem_detalhes: string = "";

  constructor(private cursoService: CursoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): Curso[] {
    this.cursoService.listarTodos().subscribe({
      next:(data: Curso[] | null) => {
        if(data==null){
          this.cursos = [];
        }
        else {
          console.log("Pegou os dados do backend de cursos.")
          this.cursos = data;
        }
      },
      error: (err) => {
        this.mensagem = "Erro buscando a lista de cursos.";
        this.mensagem_detalhes = `[${err.status}] ${err.message}`;
      }
    });
    return this.cursos;
  }

  remover($event: any, curso: Curso): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o curso: ${curso?.nome} ?`)){
      this.cursoService.remover(curso.id!).subscribe({
        complete: () => {this.listarTodos();},
        error: (err) => {
          this.mensagem = `Erro removendo o curso ${curso.nome}`;
          this.mensagem_detalhes = `[${err.status}] ${err.message}`;
        }
      });
    }
  }


  abrirModal(curso: Curso) {
    const modalRef = this.modalService.open(ModalCursoComponent);
    modalRef.componentInstance.curso = curso;
  }
}


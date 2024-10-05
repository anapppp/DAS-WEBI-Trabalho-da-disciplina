import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatriculaService } from '../services/matricula.service';
import { Matricula } from '../../shared/models/matricula.model';
import { ModalMatriculaComponent } from '../modal-matricula/modal-matricula.component';

@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
  styleUrl: './listar-matricula.component.css'
})

export class ListarMatriculaComponent implements OnInit{
  matriculas: Matricula[] = [];
  mensagem: string = "";
  mensagem_detalhes: string = "";

  constructor(private matriculaService: MatriculaService, private modalService: NgbModal) {  }

  ngOnInit(): void {
      this.listarTodos();
  }

  listarTodos(): Matricula[]{
    this.matriculaService.listarTodos().subscribe({
      next:(data: Matricula[] | null) => {
        if(data==null){
          this.matriculas = [];
        }
        else {
          this.matriculas = data;
        }
      },
      error: (err) => {
        this.mensagem = "Erro buscando a lista de matrículas.";
        this.mensagem_detalhes = `[${err.status}] ${err.message}`;
      }
    });
    return this.matriculas;
  }

  remover($event: any, matricula: Matricula): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a matrícula do aluno: ${matricula.aluno?.nome} do curso: ${matricula.curso?.nome} ?`)){
      this.matriculaService.remover(matricula.id!).subscribe({
        complete: () => {this.listarTodos();},
        error: (err) => {
          this.mensagem = `Erro removendo a matrícula ${matricula.id} do aluno: ${matricula.aluno?.nome}`;
          this.mensagem_detalhes = `[${err.status}] ${err.message}`;
        }
      });
    }
  }

  abrirModal(matricula: Matricula) {
    const modalRef = this.modalService.open(ModalMatriculaComponent);
    modalRef.componentInstance.matricula = matricula;
  }
}

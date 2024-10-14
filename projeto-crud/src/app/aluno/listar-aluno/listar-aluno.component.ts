import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../../shared/models/aluno.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlunoComponent } from '../modal-aluno/modal-aluno.component';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.css'
})
export class ListarAlunoComponent implements OnInit{
  alunos: Aluno[] = [];
  public mensagem: string ="";
  public mensagem_detalhes: string ="";
  constructor(private alunoService: AlunoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.alunoService.listarTodos().subscribe({
      next: (data: Aluno[] | null) => {
        if(data == null){
          console.log("entrou no if de listar todos")
        this.alunos = [];
        }
        else {
         this.alunos = data;
        }
      },
      error: (err) =>{
        this.mensagem = "Erro buscando a lista de alunos.";
        this.mensagem_detalhes = `[${err.status}] ${err.message}`;
      }
    });
  }

  remover($event: any, aluno: Aluno): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o cadastro de ${aluno.nome}?`)) {
      this.alunoService.remover(aluno.id!).subscribe({
        complete: () => {this.listarTodos();},
        error: (err) => {
          this.mensagem = `Erro removendo o aluno: ${aluno.nome}`;
          this.mensagem_detalhes = `[${err.status}] ${err.message}`;
        }
      })
    }
  }
  abrirModal(aluno: Aluno){
    const modalRef = this.modalService.open(ModalAlunoComponent)
    modalRef.componentInstance.aluno = aluno;
  }
}

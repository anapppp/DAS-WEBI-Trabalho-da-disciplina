import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { AlunoModule } from '../aluno.module';
import { Aluno } from '../../shared/models/aluno.model';
import { InserirAlunoComponent } from '../inserir-aluno/inserir-aluno.component';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.css'
})
export class ListarAlunoComponent {
  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunos = this.listarTodos();
  }

  listarTodos(): Aluno[] {
    return this.alunoService.listarTodos();

  }

  remover($event: any, aluno: Aluno): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o cadastro de ${aluno.nome}?`)) {
      this.alunoService.remover(aluno.id!);
      this.alunos = this.listarTodos();
    }
  }
}

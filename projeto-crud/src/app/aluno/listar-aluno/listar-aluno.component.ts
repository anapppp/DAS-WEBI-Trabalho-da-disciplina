import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { AlunoModule } from '../aluno.module';
import { Aluno } from '../../shared/models/aluno.model';

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
    // return this.alunoService.listarTodos();
    return [
      new Aluno(1, 'Ana', '123456789', 'ana@ana.com', '01/01/01'),
      new Aluno(2, 'BAna', '789456123', 'bana@ana.com', '01/01/01'),
      new Aluno(3, 'CAna', '456123789', 'cana@ana.com', '01/01/01'),
    ]
  }
}

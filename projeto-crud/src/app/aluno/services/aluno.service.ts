import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';

const LS_CHAVE = "alunos";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor() { }

  listarTodos(): Aluno[] {
    const alunos = localStorage[LS_CHAVE];
    return alunos ? JSON.parse(alunos) : [];

  }

  inserir(aluno: Aluno): void {
    aluno.id = new Date().getTime();
    const alunos = this.listarTodos();
    alunos.push(aluno);
    localStorage[LS_CHAVE] = JSON.stringify(alunos)
  }

  buscarPorId(id: number): Aluno | undefined {
    const alunos = this.listarTodos();
    return alunos.find(al => al.id === id);
  }

  
}

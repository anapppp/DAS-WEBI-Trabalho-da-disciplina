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

  inserir(): void {

  }
}

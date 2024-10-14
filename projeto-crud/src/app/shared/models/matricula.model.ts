import { Aluno } from "./aluno.model";
import { Curso } from "./curso.model";

export class Matricula {
    public id?: number;
    public aluno?: Aluno = new Aluno();
    public curso?: Curso = new Curso();
    public dataMatricula?: string;
    public nota?: number;
}

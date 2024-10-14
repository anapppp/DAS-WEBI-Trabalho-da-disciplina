import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Matricula } from '../../shared/models/matricula.model';
import { MatriculaService } from '../services/matricula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../aluno/services/aluno.service';
import { CursoService } from '../../curso/services/curso.service';
import { Aluno } from '../../shared/models/aluno.model';
import { Curso } from '../../shared/models/curso.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-inserir-editar-matricula',
  templateUrl: './inserir-editar-matricula.component.html',
  styleUrl: './inserir-editar-matricula.component.css'
})
export class InserirEditarMatriculaComponent implements OnInit{
  @ViewChild('formMatricula') formMatricula! : NgForm;
  novaMatricula: boolean = true;
  matricula: Matricula = new Matricula();
  id!: number;
  loading!: boolean;
  mensagem: String = "";

  constructor(
    private matriculaService: MatriculaService, 
    private alunoService: AlunoService, 
    private cursoService: CursoService, 
    private route: ActivatedRoute, 
    private router: Router){}
    alunos: Aluno[] = [];
    cursos: Curso[] = [];

    // public alunos: Observable<Aluno[] | null> = of(null);
    // public cursos: Observable<Curso[] | null> = of(null);


  ngOnInit(): void {
    this.matricula = new Matricula();
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.novaMatricula = !this.id;

    this.alunoService.listarTodos().subscribe(
      alunos => { 
        if(alunos){
          this.alunos = alunos;
        }
        else{
          this.mensagem = "Nenhum aluno encontrado."
        }
      }
    );
    
    this.cursoService.listarTodos().subscribe(
      cursos => { 
        if(cursos){
          this.cursos = cursos;
        }
        else{
          this.mensagem = "Nenhum curso encontrado."
        }
      }
    );

    if(!this.novaMatricula) {
      this.matriculaService.buscarPorId(this.id).subscribe(matricula => {
        if(matricula){
        this.matricula = matricula;
      }
      else{
        this.matricula = new Matricula();
      }
      })
    }
  }


  salvar(): void {
    this.loading = true;
    if(this.formMatricula.form.valid){
      // let curso = this.cursoService.buscarPorId(this.formMatricula.value.curso);
      // let aluno = this.alunoService.buscarPorId(this.formMatricula.value.aluno);

      // curso.subscribe( curso => {
      //   if(curso)
      //   this.matricula.curso = curso;
      // });

      // aluno.subscribe(aluno => {
      //   if(aluno)
      //     this.matricula.aluno = aluno;
      // });

      if(this.novaMatricula){
        this.matriculaService.inserir(this.matricula).subscribe(
          matricula => {
            this.loading = false;
            this.router.navigate(["/matriculas"]);
          });
      }
      else{
        this.matriculaService.alterar(this.matricula).subscribe(
          matricula => {
            this.loading = false;
            this.router.navigate(["/matriculas"]);
      }
    )};
    this.loading = false;
  }
  }

  alunoCompare(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id === obj2.id;  // Replace 'id' with the unique identifier property of your Aluno model
  }

  cursoCompare(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id === obj2.id;  // Replace 'id' with the unique identifier property of your Aluno model
  }
}

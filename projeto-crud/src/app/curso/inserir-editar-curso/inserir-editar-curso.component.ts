import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '../../shared/models/curso.model';
import { CursoService } from '../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-curso',
  templateUrl: './inserir-editar-curso.component.html',
  styleUrl: './inserir-editar-curso.component.css'
})

export class InserirEditarCursoComponent implements OnInit{
  @ViewChild('formCurso') formCurso!: NgForm;
  novoCurso: boolean = true;
  curso: Curso = new Curso();
  id!: number;
  loading!: boolean;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.curso = new Curso();
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.novoCurso = !this.id;
    this.cursoService.buscarPorId(this.id).subscribe(
      curso => { 
        if(curso){
          this.curso = curso;
        }
        else{
          this.curso = new Curso();
        }
      }
    );
  }

  salvar(): void {
    this.loading = true;
    if (this.formCurso.form.valid) {
      if(this.novoCurso){
        this.cursoService.inserir(this.curso).subscribe(
          curso => {
            this.loading = false;
            this.router.navigate(["/cursos"])
          });
      }
      else{
        this.cursoService.atualizar(this.curso).subscribe(
          curso => {
            this.loading = false;
            this.router.navigate(["/cursos"])
        });
      }
      this.loading = false;
    }
  }
}

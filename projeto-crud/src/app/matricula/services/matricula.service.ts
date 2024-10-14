import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Matricula } from '../../shared/models/matricula.model';



//inserção dos métodos de acesso à API REST
@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  BASE_URL = "http://localhost:8080/matriculas"

    httpOptions = {
      observe: "response" as "response",
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    public alunoId: number = 0;
    public cursoId: number = 0;

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Matricula[] | null> {
    return this.httpClient.get<Matricula[]>(this.BASE_URL,this.httpOptions).pipe(
      map((resp: HttpResponse<Matricula[]>) => {
        if(resp.status != 200){
          return null;
        }
        else {
          return resp.body;
        }
      }), catchError((e, c) => {
        if(e.status==404){
          return of(null);
        }
        else{
          return throwError(()=> e);
        }
      })
    );
  }

  buscarPorId(id: number): Observable<Matricula | null>{
    return this.httpClient.get<Matricula>(this.BASE_URL + "/" + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Matricula>) => {
        if(resp.status != 200){
          return null;
        }
        else {
          return resp.body;
        }
      }), catchError((e, c) => {
        if(e.status==404){
          return of(null);
        }
        else{
          return throwError(()=> e);
        }
      })
    );
  }

  inserir(matricula: Matricula): Observable<Matricula | null>{
    console.log(matricula);
    return this.httpClient.post<Matricula>(this.BASE_URL, JSON.stringify(matricula), this.httpOptions).pipe(
      
      map((resp: HttpResponse<Matricula>) => {
        if(resp.status != 201){
          return null;
        }
        else {
          
          return resp.body;
        }
      }), catchError((e, c) => {
          return throwError(()=> e);
      })
    );
  }

  alterar(matricula: Matricula): Observable<Matricula | null>{
    return this.httpClient.put<Matricula>(this.BASE_URL + '/' + matricula.id, JSON.stringify(matricula), this.httpOptions).pipe(
      map((resp: HttpResponse<Matricula>) => {
        if(resp.status != 200){
          return null;
        }
        else {
          return resp.body;
        }
      }), catchError((e, c) => {

          return throwError(()=> e);
      })
    );
  }

  remover(id: number): Observable<Matricula | null>{
    return this.httpClient.delete<Matricula>(this.BASE_URL + '/' + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Matricula>) => {
        if(resp.status != 200){
          return null;
        }
        else {
          return resp.body;
        }
      }), catchError((e, c) => {
          return throwError(()=> e);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, of, Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  BASE_URL = "http://localhost:8080/alunos"
  httpOptions = {
    observe: "response" as "response",
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Aluno[] | null> {
    return this.httpClient.get<Aluno[]>(this.BASE_URL, this.httpOptions).pipe(
      map((resp: HttpResponse<Aluno[]>) =>{
        if(resp.status != 200){
          return null;
        }
        else{
          return resp.body;
        }
      }), catchError((e, c) => {
        if(e.status == 404){
          return of(null);
        }
        else{
          return throwError(()=> e);
        }
      })
    )
  }

  inserir(aluno: Aluno): Observable<Aluno | null> {
    return this.httpClient.post<Aluno>(this.BASE_URL, JSON.stringify(aluno), this.httpOptions).pipe(
      map((resp: HttpResponse<Aluno>) => {
        if(resp.status != 201){
          return null;
        }
        else{
          return resp.body;
        }
      }), catchError((e, c) => {
        return throwError(()=> e)
      })
    )
  }

  buscarPorId(id?: number): Observable<Aluno | null>{
    return this.httpClient.get<Aluno>(this.BASE_URL + "/" + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Aluno>) => {
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

  atualizar(aluno: Aluno): Observable<Aluno | null> {
    return this.httpClient.put<Aluno>(this.BASE_URL + '/' + aluno.id, JSON.stringify(aluno), this.httpOptions).pipe(
      map((resp: HttpResponse<Aluno>) => {
        if(resp.status != 200){
          return null;
        }
        else {
          return resp.body;
        }
      }), catchError((e,c) => {
        return throwError(()=> e)
      })
    )
  }


  remover(id: number): Observable<Aluno | null> {
    return this.httpClient.delete<Aluno>(this.BASE_URL + '/' + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Aluno>) => {
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

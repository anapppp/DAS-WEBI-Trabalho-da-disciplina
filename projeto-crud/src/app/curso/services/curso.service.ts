import { Injectable } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  BASE_URL = "http://localhost:8080/cursos"

    httpOptions = {
      observe: "response" as "response",
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Curso[] | null> {
    return this.httpClient.get<Curso[]>(this.BASE_URL,this.httpOptions).pipe(
      map((resp: HttpResponse<Curso[]>) => {
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


  buscarPorId(id?: number): Observable<Curso | null> {
    return this.httpClient.get<Curso>(this.BASE_URL + "/" + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Curso>) => {
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


  inserir(curso: Curso): Observable<Curso | null> {
    return this.httpClient.post<Curso>(this.BASE_URL, JSON.stringify(curso), this.httpOptions).pipe(
      map((resp: HttpResponse<Curso>) => {
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


  atualizar(curso: Curso): Observable<Curso | null> {
    return this.httpClient.put<Curso>(this.BASE_URL + '/' + curso.id, JSON.stringify(curso), this.httpOptions).pipe(
      map((resp: HttpResponse<Curso>) => {
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


  remover(id: number): Observable<Curso | null> {
    return this.httpClient.delete<Curso>(this.BASE_URL + '/' + id, this.httpOptions).pipe(
      map((resp: HttpResponse<Curso>) => {
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

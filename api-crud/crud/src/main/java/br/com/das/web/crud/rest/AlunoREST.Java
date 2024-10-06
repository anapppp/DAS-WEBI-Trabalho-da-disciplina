package br.com.das.web.crud.rest;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.das.web.crud.model.Aluno;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin
@RestController
public class AlunoREST {
    public static List<Aluno> alunos = new ArrayList<>();

    @GetMapping("/alunos")
    public ResponseEntity<List<Aluno>> obterTodosAlunos() {
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/alunos/{id}")
    public ResponseEntity<Aluno> obterAlunoPorId(@PathVariable("id") int id) {
        Aluno a = alunos.stream().filter(alu -> alu.getId() == id).findAny().orElse(null);
        if (a == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        else
            return ResponseEntity.ok(a);
    }

    @PostMapping("/alunos")
    public ResponseEntity<Aluno> inserirAluno(@RequestBody Aluno aluno) {
        Aluno a = alunos.stream().filter(alu -> alu.getNome().equals(aluno.getNome())).findAny().orElse(null);
        if (a != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        a = alunos.stream().max(Comparator.comparing(Aluno::getId)).orElse(null);
        if (a == null)
            aluno.setId(1);
        else
            aluno.setId(a.getId() + 1);
        alunos.add(aluno);
        return ResponseEntity.status(HttpStatus.CREATED).body(aluno);
    }

    @PutMapping("alunos/{id}")
    public ResponseEntity<Aluno> alterar(@PathVariable("id") int id, @RequestBody Aluno aluno) {
        Aluno a = alunos.stream().filter(alu -> alu.getId() == id).findAny().orElse(null);
        if (a != null) {
            a.setNome(aluno.getNome());
            a.setCpf(aluno.getCpf());
            a.setDataNascimento(aluno.getDataNascimento());
            a.setEmail(aluno.getEmail());
            return ResponseEntity.ok(a);
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("alunos/{id}")
    public ResponseEntity<Aluno> removerAluno(@PathVariable("id") int id) {
        Aluno a = alunos.stream().filter(alu -> alu.getId() == id).findAny().orElse(null);
        if (a != null) {
            alunos.removeIf(alu -> alu.getId() == id);
            return ResponseEntity.ok(a);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}

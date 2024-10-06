package br.com.das.web.crud.rest;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import br.com.das.web.crud.model.Aluno;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    static {
        alunos.add(new Aluno(1, "Maria Silva", "123.456.789-00", "maria.silva@email.com", "2000-05-10"));
        alunos.add(new Aluno(2, "João Santos", "987.654.321-00", "joao.santos@email.com", "1998-11-20"));
        alunos.add(new Aluno(3, "Ana Pereira", "456.789.123-00", "ana.pereira@email.com", "2001-03-15"));
        alunos.add(new Aluno(4, "Lucas Oliveira", "321.654.987-00", "lucas.oliveira@email.com", "1999-08-30"));
        alunos.add(new Aluno(5, "Fernanda Costa", "654.321.987-00", "fernanda.costa@email.com", "2002-12-05"));
    }
}

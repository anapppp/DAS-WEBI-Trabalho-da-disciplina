package br.net.das.crud.crud.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.net.das.crud.crud.model.Aluno;
import br.net.das.crud.crud.repository.AlunoRepository;






@CrossOrigin
@RestController
public class AlunoREST {
    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping("/alunos/test")
    public String test() {
        return "TEST OK";
    }
    

    @GetMapping("/alunos")
    public ResponseEntity<List<Aluno>> obterTodosAlunos() {
        List<Aluno> alunos = alunoRepository.findAll();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("/alunos/{id}")
    public ResponseEntity<Aluno> obterAlunoPorId(@PathVariable int id) {
        Optional<Aluno> alunoOptional = alunoRepository.findById(id);
        return alunoOptional.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping("/alunos")
    public ResponseEntity<Aluno> inserirAluno(@RequestBody Aluno aluno) {
        Aluno novoAluno = alunoRepository.save(aluno);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoAluno);
    }
    
    @PutMapping("/alunos/{id}")
    public ResponseEntity<Aluno> alterar(@PathVariable int id, @RequestBody Aluno aluno) {
        Optional<Aluno> alunoOptional = alunoRepository.findById(id);
        if(alunoOptional.isPresent()){
            Aluno existeAluno = alunoOptional.get();
            existeAluno.setNome(aluno.getNome());
            existeAluno.setCpf(aluno.getCpf());
            existeAluno.setEmail(aluno.getEmail());
            existeAluno.setDataNascimento(aluno.getDataNascimento());
            Aluno salvaAluno = alunoRepository.save(existeAluno);
            return ResponseEntity.ok(salvaAluno);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/alunos/{id}")
    public ResponseEntity<?> removerAluno(@PathVariable int id){
        if(alunoRepository.existsById(id)){
            alunoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    
}

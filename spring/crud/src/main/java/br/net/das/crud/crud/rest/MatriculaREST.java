package br.net.das.crud.crud.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
import br.net.das.crud.crud.model.Curso;
import br.net.das.crud.crud.model.Matricula;
import br.net.das.crud.crud.repository.AlunoRepository;
import br.net.das.crud.crud.repository.CursoRepository;
import br.net.das.crud.crud.repository.MatriculaRepository;





@CrossOrigin
@RestController
public class MatriculaREST {

    @Autowired
    private MatriculaRepository matriculaRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @GetMapping("/matriculas/test")
    public String getString() {
        return "Hello matriculas";
    }
    
    @GetMapping("/matriculas")
    public ResponseEntity<List<Matricula>> obterTodasMatriculas() {
        List<Matricula> matriculas = matriculaRepository.findAll();
        if(matriculas.isEmpty()){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(matriculas);
        }
        else{
            return ResponseEntity.ok(matriculas);
        }
    }

    @PostMapping("/matriculas")
    public ResponseEntity<Matricula> inserirMatricula(@RequestBody Matricula matricula) {

        try {
            
            int alunoId = matricula.getAluno().getId();
            int cursoId = matricula.getCurso().getId();

            Optional<Aluno> alunoOptional = alunoRepository.findById(alunoId);
            Optional<Curso> cursoOptional = cursoRepository.findById(cursoId);

            if(alunoOptional.isPresent() && cursoOptional.isPresent()){
                matricula.setAluno(alunoOptional.get());
                matricula.setCurso(cursoOptional.get());
                Matricula savedMatricula = matriculaRepository.save(matricula);
                return ResponseEntity.status(HttpStatus.CREATED).body(savedMatricula);
            }
            else{
                return ResponseEntity.notFound().build();
            }
        } catch (DataIntegrityViolationException err) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping("/matriculas/{id}")
    public ResponseEntity<Matricula> obterMatriculaPorId(@PathVariable int id) {
        Optional<Matricula> matriculaOptional = matriculaRepository.findById(id);
        return matriculaOptional.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    
    @PutMapping("/matriculas/{id}")
    public ResponseEntity<Matricula> alterarMatricula(@PathVariable int id, @RequestBody Matricula matricula) {
        Optional<Matricula> matriculaOptional = matriculaRepository.findById(id);
        if(matriculaOptional.isPresent()){
            Matricula existingMatricula = matriculaOptional.get();
            existingMatricula.setAluno(matricula.getAluno());
            existingMatricula.setCurso(matricula.getCurso());
            existingMatricula.setDataMatricula(matricula.getDataMatricula());
            existingMatricula.setNota(matricula.getNota());
            Matricula savedMatricula = matriculaRepository.save(existingMatricula);
            return ResponseEntity.ok(savedMatricula);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/matriculas/{id}")
        public ResponseEntity<?> removerMatricula(@PathVariable int id){
            if(matriculaRepository.existsById(id)){
                matriculaRepository.deleteById(id);
                return ResponseEntity.noContent().build();
            }
            else{
                return ResponseEntity.notFound().build();
            }
        }
    
}

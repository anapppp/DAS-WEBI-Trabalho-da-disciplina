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

import br.net.das.crud.crud.model.Curso;
import br.net.das.crud.crud.repository.CursoRepository;

@CrossOrigin
@RestController
public class CursoREST {
    // public static List<Curso> cursos = new ArrayList<>();

    @Autowired
    private CursoRepository cursoRepository;

    @GetMapping("/test")
    public String getString() {
        return "hey";
    }
    

    @GetMapping("/cursos")
    public ResponseEntity<List<Curso>> obterTodosCursos() {
        List<Curso> cursos = cursoRepository.findAll();
        return ResponseEntity.ok(cursos);
    }

    @GetMapping("/cursos/{nome}")
    public ResponseEntity<Curso> obterCursoPorNome(@PathVariable String nome) {
        // Curso a = cursos.stream().filter(cur -> cur.getId() == id).findAny().orElse(null);

        Optional<Curso> cursoOptional = cursoRepository.findByNome(nome);
        return cursoOptional.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());

        // if (a == null)
        //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        // else
        //     return ResponseEntity.ok(a);
    }

    @PostMapping("/cursos")
    public ResponseEntity<Curso> inserirCurso(@RequestBody Curso curso) {

        try{
            Curso savedCurso = cursoRepository.save(curso);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCurso);
        } catch(DataIntegrityViolationException err){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }


        // Curso a = cursos.stream().filter(cur -> cur.getNome().equals(curso.getNome())).findAny().orElse(null);
        // if (a != null) {
        //     return ResponseEntity.status(HttpStatus.CONFLICT).build();
        // }
        // a = cursos.stream().max(Comparator.comparing(Curso::getId)).orElse(null);
        // if (a == null)
        //     curso.setId(1);
        // else
        //     curso.setId(a.getId() + 1);
        // cursos.add(curso);
        // return ResponseEntity.status(HttpStatus.CREATED).body(curso);
    }

    @PutMapping("/cursos/{id}")
    public ResponseEntity<Curso> alterar(@PathVariable int id, @RequestBody Curso curso) {

        Optional<Curso> cursoOptional = cursoRepository.findById(id);
        if(cursoOptional.isPresent()){
            Curso existingCurso = cursoOptional.get();
            existingCurso.setNome(curso.getNome());
            existingCurso.setLink(curso.getLink());
            Curso savedCurso = cursoRepository.save(existingCurso);
            return ResponseEntity.ok(savedCurso);
        }
        else{
            return ResponseEntity.notFound().build();
        }

        // Curso a = cursos.stream().filter(cur -> cur.getId() == id).findAny().orElse(null);
        // if (a != null) {
        //     a.setNome(curso.getNome());
        //     a.setLink(curso.getLink());
        //     return ResponseEntity.ok(a);
        // } else
        //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/cursos/{id}")
    public ResponseEntity<?> removerCurso(@PathVariable int id) {
        if(cursoRepository.existsById(id)){
            cursoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
        

        // Curso a = cursos.stream().filter(cur -> cur.getId() == id).findAny().orElse(null);
        // if (a != null) {
        //     cursos.removeIf(cur -> cur.getId() == id);
        //     return ResponseEntity.ok(a);
        // } else {
        //     return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        // }
    }
}


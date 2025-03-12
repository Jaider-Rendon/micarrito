package com.example.demo.controlador;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.usuario;
import com.example.demo.repositorio.usuarioRepositorio;



@RestController
@RequestMapping("/login/usuario")
@CrossOrigin(origins = "http://localhost:4200/")
public class loginUsuarioControlador {

	
	
	@Autowired 
	private usuarioRepositorio repositorio2;
	
	
	@GetMapping("/login")
	public boolean loginUsuario(@RequestParam Long nIdentificacion1, @RequestParam Long claveUs1) {
	    return this.repositorio2.findAll().stream()
	        .anyMatch(usuario -> usuario.getnIdentificacion().equals(nIdentificacion1) 
	                            && usuario.getClaveUs().equals(claveUs1));
	}

	
	
	
	
	
	
	
	
	

}

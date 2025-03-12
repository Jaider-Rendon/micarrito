package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.repositorio.loginAdmiRepositorio;

@RestController
@RequestMapping("/login/admin")
@CrossOrigin(origins = "http://localhost:4200/")
public class loginAdminControlador {

	@Autowired 
	private loginAdmiRepositorio repositorio2;
	
	
	 @GetMapping("/login")
	    public boolean loginAdmin(@RequestParam String usuario1, @RequestParam Long clavead1) {
	        return this.repositorio2.findAll().stream()
	            .anyMatch(admin -> admin.getUsuario().equals(usuario1) 
	                             && admin.getClavead().equals(clavead1));
	    }
	}
	


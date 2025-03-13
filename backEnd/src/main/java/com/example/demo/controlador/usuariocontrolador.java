package com.example.demo.controlador;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.modelo.usuario;
import com.example.demo.repositorio.usuarioRepositorio;

@RestController
@RequestMapping("/ver/usuarios/")
@CrossOrigin(origins = "http://localhost:4200")

public class usuariocontrolador {
	
	@Autowired
	private usuarioRepositorio repositorio;
	
	@PostMapping("/guardarr")
	public usuario guardarEmpleado(@RequestBody usuario e) { 
	    try {
	        return this.repositorio.save(e);
	    } catch (Exception ex) {
	        return null; 
	    }
	}
	

}

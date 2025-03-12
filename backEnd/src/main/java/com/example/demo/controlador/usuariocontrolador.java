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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.empleado;
import com.example.demo.modelo.usuario;
import com.example.demo.repositorio.usuarioRepositorio;

@RestController
@RequestMapping("/ver/usuarios/")
@CrossOrigin(origins = "http://localhost:4200/")
public class usuariocontrolador {
	
	@Autowired
	private usuarioRepositorio repositorio;
	
	@GetMapping ("/guardar")
	public List<usuario> guardarusu(
			@RequestParam Long nIdentificacion,	
			@RequestParam String nombre1,
			@RequestParam String nombre2,
			@RequestParam String apellido1,
			@RequestParam String apellido2,
			@RequestParam String fechaExlicen,
			@RequestParam Long telefono,
			@RequestParam String vigencialicencia,
			@RequestParam String categoria,
			@RequestParam String correo,
			@RequestParam Long claveUs
			)throws ParseException 
			{
			SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyy");
			Date fechaa=sdf.parse(fechaExlicen);
			
			SimpleDateFormat sdff = new SimpleDateFormat("dd/MM/yyy");
			Date fecha=sdff.parse(vigencialicencia);
			
			usuario u=new usuario(nIdentificacion,nombre1,nombre2,apellido1,apellido2,fechaa,
					telefono,fecha,categoria,correo,claveUs);
			this.repositorio.save(u);
			
			return this.repositorio.findAll();
		
	}
	@PostMapping("/guardarr")
	public usuario guardarEmpleado(@RequestBody usuario e) { 
	    try {
	        return this.repositorio.save(e);
	    } catch (Exception ex) {
	        return null; 
	    }
	}
	

}

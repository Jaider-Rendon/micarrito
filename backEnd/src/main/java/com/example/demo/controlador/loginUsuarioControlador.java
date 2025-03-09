package com.example.demo.controlador;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.usuario;
import com.example.demo.repositorio.usuarioRepositorio;



@RestController
@RequestMapping("/login/usuario")

public class loginUsuarioControlador {

	
	
	@Autowired 
	private usuarioRepositorio repositorio2;
	@GetMapping("/login")
	public List<Object> loginUsuario(@RequestParam Long nIdentificacion1, Long claveUs1 ){
		 List<Object> resultados = new LinkedList<>();
		    List<usuario> usu = this.repositorio2.findAll(); 
		    boolean usuarioEncontrado = false;
		    for(int i=0;i<usu.size();i++) {
		    	Long nIdentificacion= usu.get(i).getnIdentificacion();
		    	Long claveUs= usu.get(i).getClaveUs();
		    	
		    	String apellido1=usu.get(i).getApellido1();
		    	
		    	 if (nIdentificacion.equals(nIdentificacion1)) {
		             usuarioEncontrado = true; 

		           
		             if (claveUs.equals(claveUs1)) {
		                 resultados.add(apellido1 + " Bienvenido a Mi Cacharrito");
		                 return resultados; 
		             } else {
		                 resultados.add("Credenciales incorrectas, intentalo nuevamente");
		                 return resultados; 
		             }
		         }
		     }
		     if (!usuarioEncontrado) {
		         resultados.add("No existe el usuario, por favor registrese");
		     }

		     return resultados;	
	
	}
	
	
	
	
	
	
	
	
	

}

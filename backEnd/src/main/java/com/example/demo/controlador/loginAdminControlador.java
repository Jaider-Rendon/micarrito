package com.example.demo.controlador;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.modelo.loginAdmi;
import com.example.demo.repositorio.loginAdmiRepositorio;

@RestController
@RequestMapping("/login/admin")

public class loginAdminControlador {

	@Autowired 
	private loginAdmiRepositorio repositorio2;
	
	
	@GetMapping("/login")
	public List<Object> loginAdmin(@RequestParam String usuario1,Long clavead1){
		 List<Object> resultados = new LinkedList<>();
		    List<loginAdmi> ad =this.repositorio2.findAll(); 
		    for(int i=0;i<ad.size();i++) {
		    	String usuario= ad.get(i).getUsuario();
		    	Long clavead= ad.get(i).getClavead();
		    	
		    	 if (usuario.equals(usuario1)) {
		             if (clavead.equals(clavead1)) {
		                 resultados.add("Bienvenido administrador");
		                 return resultados; 
		             } else {
		                 resultados.add("Credenciales incorrectas, intentalo nuevamente");
		                 return resultados; 
		             }
		         }
		    	 if (usuario != usuario1 & clavead1!=clavead) {
		    		 resultados.add("no se encuentra este administrador");
		    	 }
		     }
		    
		    
		    
		     return resultados;	
	
	}
	
	
	
	
	
	
}

package com.example.demo.controlador;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.vehiculo;
import com.example.demo.repositorio.vehiculoRepositorio;

@RestController
@RequestMapping("/ver/vehiculo/")
@CrossOrigin(origins = "http://localhost:4200")

public class vehiculocontrolador {
	@Autowired
	private vehiculoRepositorio repositorio;
	

	@GetMapping("/vertipo")
	public List<Object>vertipohehiculo(@RequestParam String Tipo){
		List<Object> tip = new LinkedList <>();
		List<vehiculo> al = this.repositorio.findAll();
		String tipo=Tipo;
		for(int i=0;i<al.size();i++) {
			String tipoad=al.get(i).getTipovehiculo();
			if(tipo.equals(tipoad)) {
				String plata=al.get(i).getPlaca();
				String estado=al.get(i).getEstado();
				String color=al.get(i).getColor();
				Long valor=al.get(i).getValor();
				
				tip.add("placa: "+plata);
				tip.add("estado: "+estado);
				tip.add("color: "+color);
				tip.add("valor: "+valor);
				return tip;
				
			}
			 if (tip.isEmpty()) {
			        tip.add("No se encontró el tipo de auto");
			    }
	}
		return tip;

}
	
	@GetMapping("/verdisponible")
	public List<Object>verdisponible(@RequestParam String disponible){
		List<Object> tip = new LinkedList <>();
		List<vehiculo> al = this.repositorio.findAll();
		String tipo=disponible;
		for(int i=0;i<al.size();i++) {
			String tipoad=al.get(i).getEstado();
			if(tipo.equals(tipoad)) {
				String plata=al.get(i).getPlaca();
				String color=al.get(i).getColor();
				Long valor=al.get(i).getValor();
				
				tip.add("placa: "+plata);
				tip.add("color: "+color);
				tip.add("valor: "+valor);
				tip.add("------");
				
				
			}
			 if (tip.isEmpty()) {
			        tip.add("No hay autos disponibles");
			    }
	}
		return tip;

}
	
	@GetMapping("/buscartipodisponible")
	public List<vehiculo> Disponinble(@RequestParam String tipo){
		return repositorio.findByEstado("disponible", tipo);
	}
	
	
}

package com.example.demo.controlador;


import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.alquiler;
import com.example.demo.modelo.vehiculo;
import com.example.demo.repositorio.alquilerRepositorio;
import com.example.demo.repositorio.usuarioRepositorio;
import com.example.demo.repositorio.vehiculoRepositorio;

@RestController
@RequestMapping("/ver/alquiler/")
@CrossOrigin(origins = "http://localhost:4200")
public class alquilercontrolador {
	
	@Autowired
	private alquilerRepositorio repositorio;
	@Autowired
	private vehiculoRepositorio Repositorio1;
	@Autowired
	private usuarioRepositorio Repositorio2;
	
	
	
	@GetMapping("/buscarNoEntregados")
	public List<Object>buscarNoEntregados(){
		List<Object> vehiculosNo = new LinkedList <>();
		List<alquiler> al = this.repositorio.findAll();
		String estadoAl="no entregado";
		for(int i=0;i<al.size();i++) {
			String EstadoAl=al.get(i).getEstadoalqui();
			if(EstadoAl.equals(estadoAl)) {
				String placa=al.get(i).getVehiculo().getPlaca();
				String rr=al.get(i).getUsuario().getNombre1();
				Long rrr=al.get(i).getUsuario().getnIdentificacion();
				
				vehiculosNo.add("Placa: "+placa);
				vehiculosNo.add("nombre: "+rr);
				vehiculosNo.add("cedula: "+rrr);
				return vehiculosNo;	
			}	
			
		}
		return vehiculosNo;		
	}
	
	@GetMapping("/actualizar")
	public List<Object> Actualizar(@RequestParam String placa) {
	    List<Object> alqA = new LinkedList<>();
	    List<alquiler> Ac = this.repositorio.findAll();

	    for (int i = 0; i < Ac.size(); i++) {
	        String Placa = Ac.get(i).getVehiculo().getPlaca();
	        if (Placa.equals(placa)) {
	            String estadO = Ac.get(i).getEstadoalqui();
	            Ac.get(i).setEstadoalqui("entregado");
	            this.repositorio.save(Ac.get(i));

	            String estado = Ac.get(i).getEstadoalqui();
	            String tipo = Ac.get(i).getVehiculo().getTipovehiculo();
	            alqA.add("Estado original: " + estadO);
	            alqA.add("Placa: " + Placa);
	            alqA.add("Estado: " + estado);
	            alqA.add("tipo: " + tipo);
	            return alqA;
	        } else {
	            alqA.add("No se encontraron vehículos relacionados con la placa: " + placa);
	        }
	    }
	    return alqA;
	}

	
	@GetMapping("/cancelarAlqui")
	public List<Object> cancelar(@RequestParam Long numeroalquiler) {
	    List<Object> alq = new LinkedList<>();
	    Optional<alquiler> alquilerOpt = this.repositorio.findById(numeroalquiler);

	    if (alquilerOpt.isPresent()) {
	        alquiler alquiler = alquilerOpt.get();

	       
	        if (alquiler.getEstadoalqui().equals("Finalizado")) {
	            alq.add("No se puede cancelar un alquiler ya finalizado: " + numeroalquiler);
	            return alq;
	        }

	        alquiler.getVehiculo().setEstado("disponible");

	        this.repositorio.deleteById(numeroalquiler);

	        alq.add("Ha sido cancelado el alquiler: " + numeroalquiler);
	        alq.add("Estado del vehículo actualizado a: Disponible");
	    } else {
	        alq.add("No se ha encontrado el alquiler: " + numeroalquiler);
	    }

	    return alq;
	}
	
	
	@GetMapping("/gestionaralquiler")
	public List<Object> actualizarAlquiler(@RequestParam Long id) {
	    List<Object> alq = new LinkedList<>();
	    Optional<alquiler> alquilerOpt = this.repositorio.findById(id);

	    if (alquilerOpt.isPresent()) {
	        alquiler alquiler = alquilerOpt.get();

	       
	        alquiler.getVehiculo().setEstado("disponible");

	        
	        Date fechaEntrega = new Date(alquiler.getFechaentre().getTime());
	        Date fechaActual = new Date();
	        float valorVehiculo = alquiler.getVehiculo().getValor();

	       
	        long diferenciaDias = ChronoUnit.DAYS.between(
	            fechaEntrega.toInstant(), fechaActual.toInstant()
	        );

	       
	        float montoAdicional = diferenciaDias * 10000;

	       
	        float valorTotal = valorVehiculo + montoAdicional;

	      
	        this.repositorio.save(alquiler);

	        
	        alq.add("Ha sido cambiado el estado del alquiler con ID: " + id);
	        alq.add("Fecha de entrega: " + fechaEntrega);
	        alq.add("Diferencia de días: " + diferenciaDias);
	        alq.add("Monto adicional: " + montoAdicional);
	        alq.add("Valor total a pagar: " + valorTotal);
	    } else {
	        
	        alq.add("No se encontró un alquiler con el ID: " + id);
	    }

	    return alq;
	}
	@GetMapping("/noentregado")
	public List<alquiler> disponible() {
	    return this.repositorio.findByEstado("no entregado");
	}
	

}

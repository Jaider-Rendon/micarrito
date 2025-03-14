package com.example.demo.controlador;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.alquiler;
import com.example.demo.modelo.usuario;
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
    public List<Object> buscarNoEntregados() {
        List<Object> vehiculosNo = new LinkedList<>();
        List<alquiler> al = this.repositorio.findAll();
        String estadoAl = "no entregado";
        for (int i = 0; i < al.size(); i++) {
            String EstadoAl = al.get(i).getEstadoalqui();
            if (EstadoAl.equals(estadoAl)) {
                String placa = al.get(i).getVehiculo().getPlaca();
                String rr = al.get(i).getUsuario().getNombre1();
                Long rrr = al.get(i).getUsuario().getnIdentificacion();
                vehiculosNo.add("Placa: " + placa);
                vehiculosNo.add("nombre: " + rr);
                vehiculosNo.add("cedula: " + rrr);
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
                Ac.get(i).setEstadoalqui("entregado");
                this.repositorio.save(Ac.get(i));
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
        List<alquiler> ac = this.repositorio.findAll();
        for (int i = 0; i < ac.size(); i++) {
            Long id = ac.get(i).getNumeroalquiler();
            if (id.equals(numeroalquiler)) {
                ac.get(i).getVehiculo().setEstado("disponible");
                this.repositorio.save(ac.get(i));
                this.repositorio.deleteById(numeroalquiler);
            }
            if (ac.isEmpty()) {
                alq.add("No se encontró ningún alquiler con esta referencia " + numeroalquiler);
            }
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
            alquiler.setValoralquiler(valorTotal);
            this.repositorio.save(alquiler);
        } else {
            alq.add("No se encontró un alquiler con el ID: " + id);
        }
        return alq;
    }
    
    @GetMapping("/noentregado")
    public List<alquiler> disponible() {
        return this.repositorio.findByEstado("no entregado");
    }
    
    @GetMapping("/todos")
    public List<alquiler> obtenerTodosLosAlquileres() {
        return this.repositorio.findAll();
    }
    
    @GetMapping("/buscaralqui")
    public List<alquiler> buscaralqui(@RequestParam Long cedula) {
        return this.repositorio.findBycedula(cedula);
    }
    
    @PostMapping("/solicitar")
    public ResponseEntity<?> solicitarAlquiler(
            @RequestParam Long nIdentificacion,
            @RequestParam String placa,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fechaInicio,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fechaEntrega) {

        Optional<usuario> usuarioOpt = Repositorio2.findById(nIdentificacion);
        Optional<vehiculo> vehiculoOpt = Repositorio1.findById(placa);

        if (usuarioOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("El usuario no existe.");
        }

        if (vehiculoOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("El vehículo no existe.");
        }

        vehiculo vehiculo = vehiculoOpt.get();
        if (!"disponible".equalsIgnoreCase(vehiculo.getEstado())) {
            return ResponseEntity.badRequest().body("El vehículo no está disponible para alquiler.");
        }

        alquiler nuevoAlquiler = new alquiler();
        nuevoAlquiler.setUsuario(usuarioOpt.get());
        nuevoAlquiler.setVehiculo(vehiculo);
        nuevoAlquiler.setFechaalquiler(new Date());
        nuevoAlquiler.setFechasoli(fechaInicio);
        nuevoAlquiler.setFechaentre(fechaEntrega);
        nuevoAlquiler.setValoralquiler(vehiculo.getValor());
        nuevoAlquiler.setEstadoalqui("pendiente de entrega");

        alquiler alquilerGuardado = repositorio.save(nuevoAlquiler);
        vehiculo.setEstado("no disponible");
        Repositorio1.save(vehiculo);
        return ResponseEntity.ok(alquilerGuardado);
    }
}

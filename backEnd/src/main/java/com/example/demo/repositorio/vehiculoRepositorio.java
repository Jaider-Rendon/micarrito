package com.example.demo.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.modelo.vehiculo;

public interface vehiculoRepositorio extends JpaRepository<vehiculo,String>{
	  @Query(value = "SELECT * FROM vehiculo v WHERE v.estado = :estado AND v.tipovehiculo = :tipo", nativeQuery = true)
	    List<vehiculo> findByEstado(@Param("estado") String estado, @Param("tipo") String tipo);
	    
	    @Query(value = "SELECT * FROM vehiculo v WHERE v.tipovehiculo = :tipo", nativeQuery = true)
	    List<vehiculo> findByEstados(@Param("tipo") String tipo);
	    
	}


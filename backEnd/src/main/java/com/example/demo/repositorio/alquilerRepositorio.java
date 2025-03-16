package com.example.demo.repositorio;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.modelo.alquiler;




public interface alquilerRepositorio extends JpaRepository <alquiler,Long>{
	@Query(value = "SELECT * FROM alquiler v WHERE v.estadoalqui = :estado", nativeQuery = true)
	List<alquiler> findByEstado(@Param("estado") String estado);
	
	@Query(value = "SELECT * FROM alquiler v WHERE v.n_identificacion = :estado", nativeQuery = true)
	List<alquiler> findBycedula(@Param("estado") Long estado);

	List<alquiler> findByVehiculoPlaca(String placa);
	
	
}

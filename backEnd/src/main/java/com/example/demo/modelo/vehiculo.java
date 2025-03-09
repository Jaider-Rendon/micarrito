package com.example.demo.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehiculo")
public class vehiculo {
	@Id
	@Column(name="placa")
	private String placa;
	
	@Column(name="valor")
	private Long valor;
	
	@Column(name="estado")
	private String estado;
	
	@Column(name="color")
	private String color;
	
	@Column(name="tipovehiculo")
	private String tipovehiculo;

	public vehiculo() {

	}

	public vehiculo(String placa, Long valor, String estado, String color, String tipovehiculo) {
		super();
		this.placa = placa;
		this.valor = valor;
		this.estado = estado;
		this.color = color;
		this.tipovehiculo = tipovehiculo;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public Long getValor() {
		return valor;
	}

	public void setValor(Long valor) {
		this.valor = valor;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getTipovehiculo() {
		return tipovehiculo;
	}

	public void setTipovehiculo(String tipovehiculo) {
		this.tipovehiculo = tipovehiculo;
	}
	
	
	
	

}

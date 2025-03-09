package com.example.demo.modelo;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "loginadmi")

public class loginAdmi {
	@Id
	@Column(name="codigoadmi")
	private String usuario;
	
	@Column(name="clavead")
	private Long clavead;

	public loginAdmi() {
		super();
		// TODO Auto-generated constructor stub
	}

	public loginAdmi(String usuario, Long clavead) {
		super();
		this.usuario = usuario;
		this.clavead = clavead;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public Long getClavead() {
		return clavead;
	}

	public void setClavead(Long clavead) {
		this.clavead = clavead;
		
	}

	
	
}

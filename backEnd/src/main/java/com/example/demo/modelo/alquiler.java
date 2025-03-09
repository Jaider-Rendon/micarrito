package com.example.demo.modelo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "alquiler")

public class alquiler {
	@Id
	@Column(name="numeroalquiler")
	private Long numeroalquiler;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="MM/dd/yyy")
	@Column(name="fechasoli",nullable=false)
	private Date fechasoli;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="MM/dd/yyy")
	@Column(name="fechaentre",nullable=false)
	private Date fechaentre;
	
	@Column(name="valoralquiler")
	private Long valoralquiler;
	
	@Column(name="estadoalqui")
	private String estadoalqui;
	
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern="MM/dd/yyy")
	@Column(name="fechaalquiler",nullable=false)
	private Date fechaalquiler;
	
	@ManyToOne()
	@JoinColumn(name = "placa",referencedColumnName="placa")
	private vehiculo vehiculo;
	
	@ManyToOne()
	@JoinColumn(name = "nIdentificacion",referencedColumnName="nIdentificacion")
	private usuario usuario;
	
	@ManyToOne()
	@JoinColumn(name = "codigoadmi",referencedColumnName="codigoadmi")
	private loginAdmi loginAdmi;

	public alquiler() {
	}

	public alquiler(Long numeroalquiler, Date fechasoli, Date fechaentre, Long valoralquiler, String estadoalqui,
			Date fechaalquiler,vehiculo vehiculo,usuario usuario, loginAdmi loginAdmi) {
		super();
		this.numeroalquiler = numeroalquiler;
		this.fechasoli = fechasoli;
		this.fechaentre = fechaentre;
		this.valoralquiler = valoralquiler;
		this.estadoalqui = estadoalqui;
		this.fechaalquiler = fechaalquiler;
		this.vehiculo = vehiculo;
		this.usuario = usuario;
		this.loginAdmi = loginAdmi;
	}

	public Long getNumeroalquiler() {
		return numeroalquiler;
	}

	public void setNumeroalquiler(Long numeroalquiler) {
		this.numeroalquiler = numeroalquiler;
	}

	public Date getFechasoli() {
		return fechasoli;
	}

	public void setFechasoli(Date fechasoli) {
		this.fechasoli = fechasoli;
	}

	public Date getFechaentre() {
		return fechaentre;
	}

	public void setFechaentre(Date fechaentre) {
		this.fechaentre = fechaentre;
	}

	public Long getValoralquiler() {
		return valoralquiler;
	}

	public void setValoralquiler(Long valoralquiler) {
		this.valoralquiler = valoralquiler;
	}

	public String getEstadoalqui() {
		return estadoalqui;
	}

	public void setEstadoalqui(String estadoalqui) {
		this.estadoalqui = estadoalqui;
	}

	public Date getFechaalquiler() {
		return fechaalquiler;
	}

	public void setFechaalquiler(Date fechaalquiler) {
		this.fechaalquiler = fechaalquiler;
	}

	public vehiculo getVehiculo() {
		return vehiculo;
	}

	public void setVehiculo(vehiculo vehiculo) {
		this.vehiculo = vehiculo;
	}

	public usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(usuario usuario) {
		this.usuario = usuario;
	}

	public loginAdmi getAdministrador() {
		return loginAdmi;
	}

	public void setAdministrador(loginAdmi loginAdmi) {
		this.loginAdmi= loginAdmi;
	}
	
	
	
	
	
	
}

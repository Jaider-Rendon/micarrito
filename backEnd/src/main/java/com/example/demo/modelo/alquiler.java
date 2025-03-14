package com.example.demo.modelo;

import java.util.Date;
import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "alquiler")
public class Alquiler {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "numeroalquiler")
    private Long numeroalquiler;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM/dd/yyyy")
    @Column(name = "fechasoli", nullable = false)
    private Date fechasoli;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM/dd/yyyy")
    @Column(name = "fechaentre", nullable = false)
    private Date fechaentre;

    @Column(name = "valoralquiler")
    private Float valoralquiler;

    @Column(name = "estadoalqui")
    private String estadoalqui;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM/dd/yyyy")
    @Column(name = "fechaalquiler", nullable = false)
    private Date fechaalquiler;

    @ManyToOne
    @JoinColumn(name = "placa", referencedColumnName = "placa")
    private Vehiculo vehiculo;

    @ManyToOne
    @JoinColumn(name = "nIdentificacion", referencedColumnName = "nIdentificacion")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "codigoadmi", referencedColumnName = "codigoadmi")
    private LoginAdmi loginAdmi;

    // Constructor vacío
    public Alquiler() {
    }

    // Constructor con parámetros
    public Alquiler(Long numeroalquiler, Date fechasoli, Date fechaentre, Float valoralquiler, String estadoalqui,
                    Date fechaalquiler, Vehiculo vehiculo, Usuario usuario, LoginAdmi loginAdmi) {
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

    // Getters y Setters
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

    public Float getValoralquiler() {
        return valoralquiler;
    }

    public void setValoralquiler(Float valoralquiler) {
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

    public Vehiculo getVehiculo() {
        return vehiculo;
    }

    public void setVehiculo(Vehiculo vehiculo) {
        this.vehiculo = vehiculo;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public LoginAdmi getLoginAdmi() {
        return loginAdmi;
    }

    public void setLoginAdmi(LoginAdmi loginAdmi) {
        this.loginAdmi = loginAdmi;
    }
}

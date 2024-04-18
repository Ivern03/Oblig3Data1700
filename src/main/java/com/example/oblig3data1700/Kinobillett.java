package com.example.oblig3data1700;

public class Kinobillett {

    private int id;
    private String filmNavn;
    private String antall;
    private String fornavn;
    private String etternavn;
    private int telefonnr;
    private String epost;


    // Constructor
    public Kinobillett(int id, String filmNavn, String antall, String fornavn, String etternavn, int telefonnr, String epost) {
        this.id = id;
        this.filmNavn = filmNavn;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    // Empty constructor
    public Kinobillett() {
    }


    // Get and Set methods
    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id = id;
    }

    public String getFilmNavn() {
        return filmNavn;
    }

    public void setFilmNavn(String filmNavn) {
        this.filmNavn = filmNavn;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

}
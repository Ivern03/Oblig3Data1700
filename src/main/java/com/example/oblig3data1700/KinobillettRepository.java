package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinobillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreKinobillett(Kinobillett kinobillett){
        String sql = "INSERT INTO Kinobillett(filmNavn, antall, fornavn, etternavn, telefonnr, epost) VALUES (?, ?, ?, ?, ?, ?);";
        db.update(sql, kinobillett.getFilmNavn(), kinobillett.getAntall(), kinobillett.getFornavn(), kinobillett.getEtternavn(), kinobillett.getTelefonnr(), kinobillett.getEpost());
    }
    public List<Kinobillett> hentAlleKinobilletter() {
        String sql = "SELECT * FROM Kinobillett ORDER BY etternavn";
        return db.query(sql, new BeanPropertyRowMapper(Kinobillett.class));
    }

    public void slettAlleBilletter() {
        String sql = "DELETE FROM Kinobillett";
        db.update(sql);
    }
}

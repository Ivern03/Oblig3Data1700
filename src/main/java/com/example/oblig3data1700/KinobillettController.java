package com.example.oblig3data1700;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinobillettController {

    @Autowired
    KinobillettRepository rep;

    @PostMapping("/lagre")
    public void lagre(Kinobillett kinobillett){
        rep.lagreKinobillett(kinobillett);
    }

    @GetMapping("/hentAlle")
    public List<Kinobillett> hentAlle(){
        return rep.hentAlleKinobilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        rep.slettAlleBilletter();
    }

    @GetMapping("/slettEn")
    public void slettEn(int id){
        rep.slettEn(id);
    }
}

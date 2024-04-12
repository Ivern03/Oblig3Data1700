package com.example.oblig3data1700;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KinoBillettController {

    public final List<Kinobillett> kinoBillettRegister = new ArrayList<>();
    @PostMapping("/lagre")
    public void lagre(Kinobillett kinobillett){
        kinoBillettRegister.add(kinobillett);
    }

    @GetMapping("/hentAlle")
    public List<Kinobillett> hentAlle(){
        return kinoBillettRegister;
    }

    @GetMapping("/slettAlle")
    public void slettAlle() {
        kinoBillettRegister.clear();
    }
}

//const bestillingArray = [];

// Input validation for the selection of different movies

function inputSjekkFilm(film){
    if(film === 'velgFilm'){
        feilmeldingFilm.innerHTML = "Velg en film!";
    }else{
        feilmeldingFilm.innerHTML = '';
        return true;
    }
}

// Input validation for the ticket amount

function inputSjekkAntall(antallSjekk){
    if(isNaN(antallSjekk)){
        feilmeldingAntall.innerHTML = "Skriv inn et gyldig tall!";
    }else if(antallSjekk < 1){
        feilmeldingAntall.innerHTML = "Du må kjøpe minst 1 billett";
    } else if (antallSjekk > 50) {
        feilmeldingAntall.innerHTML = "Du kan ikke kjøpe flere enn 50 billetter";
    }else{
        feilmeldingAntall.innerHTML =  '';
        return true;
    }
}

// Input validation for the first name

function inputSjekkFornavn(fornavn){
    if(fornavn === ''){
        feilmeldingFornavn.innerHTML = "Skriv inn et gyldig fornavn!";
    } else if (fornavn.length < 1 || fornavn.length > 30) {
        feilmeldingFornavn.innerHTML = "Fornavn kan ikke være mindre enn 1 tegn eller større enn 30 tegn";

        // Used and adapted code from: "https://stackoverflow.com/questions/16667329/special-character-validation" for testing certain characters / numbers / special characters etc in fornavn,
        // etternavn, telefonnr and email.

    } else if (!/^[a-zA-ZÆØÅæøå-]+$/.test(fornavn)) {
        feilmeldingFornavn.innerHTML = "Fornavn kan kun inneholde bokstaver, har du flere fornavn, bruk - imellom";
    } else {
        //valgtFornavn = innFornavn;
        feilmeldingFornavn.innerHTML = '';
        return true;
    }
}

// Input validation for the last name

function inputSjekkEtternavn(etternavn){
    if(etternavn === ''){
        feilmeldingEtternavn.innerHTML = "Skriv inn et gyldig etternavn!";
    } else if (etternavn.length < 1 || etternavn.length > 30) {
        feilmeldingEtternavn.innerHTML = "Etternavn kan ikke være mindre enn 1 tegn eller større enn 30 tegn";
    } else if (!/^[a-zA-ZÆØÅæøå-]+$/.test(etternavn)) {
        feilmeldingEtternavn.innerHTML = "Etternavn kan kun inneholde bokstaver, har du flere etternavn, bruk - imellom";
    } else {
        feilmeldingEtternavn.innerHTML = '';
        return true;
    }
}

// Input validation for the phone number

function inputSjekkTelefonnr(tlfnr){
    if(tlfnr === ''){
        feilmeldingTlf.innerHTML = "Skriv inn et gyldig telefonnr!";
    } else if(!/^[94]\d{7}$/.test(tlfnr)){
        feilmeldingTlf.innerHTML = "Du har skrevet inn et ugyldig telefonnr (Bare norske tlf nr er akseptable, altså 8 siffre som starter på enten 4 eller 9)";
    } else{
        feilmeldingTlf.innerHTML = '';
        return true;
    }
}

// Input validation for the Email
function inputSjekkEmail(email){
    if(email === ''){
        feilmeldingEpost.innerHTML = "Skriv inn en gyldig Epost!";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        feilmeldingEpost.innerHTML = "Du har skrevet inn en ugyldig email";
    }else{
        feilmeldingEpost.innerHTML = '';
        return true;
    }
}

function kjopBillett(){
    let innFilm = document.getElementById("filmvalg").value;
    let innAntall = parseInt(document.getElementById("antall").value);
    let innFornavn = document.getElementById("fornavn").value.trim();
    let innEtternavn = document.getElementById("etternavn").value.trim();
    let innTlf = document.getElementById("telefonnr").value;
    let innEpost = document.getElementById("epost").value.trim();

    let valgtFilm;
    let valgtAntall;
    let valgtFornavn;
    let valgtEtternavn;
    let valgtTlf;
    let valgtEpost;

    // Input validation for the different inputs

    if(inputSjekkFilm(innFilm)){
        valgtFilm = innFilm;
        feilmeldingFilm.innerHTML = '';
    }

    if(inputSjekkAntall(innAntall)){
        valgtAntall = innAntall;
        feilmeldingAntall.innerHTML =  '';
    }

    if(inputSjekkFornavn(innFornavn)){
        valgtFornavn = innFornavn;
        feilmeldingFornavn.innerHTML = '';
    }

    if(inputSjekkEtternavn(innEtternavn)){
        valgtEtternavn = innEtternavn;
        feilmeldingEtternavn.innerHTML = '';
    }

    if(inputSjekkTelefonnr(innTlf)){
        valgtTlf = innTlf;
        feilmeldingTlf.innerHTML = '';
    }

    if(inputSjekkEmail(innEpost)){
        valgtEpost = innEpost;
        feilmeldingEpost.innerHTML = '';
    }

    // Checking if all inputs are valid, then pushing the inputs into the bestillingArray, which then gets printed out into the table "utBilletter"

    if(inputSjekkAntall(innAntall) && inputSjekkEtternavn(innEtternavn) && inputSjekkFilm(innFilm) && inputSjekkFornavn(innFornavn) && inputSjekkTelefonnr(innTlf) && inputSjekkEmail(innEpost)){
        //bestillingArray.push({filmNavn:valgtFilm, antall: valgtAntall, fornavn: valgtFornavn, etternavn: valgtEtternavn, telefonnr: valgtTlf, epost: valgtEpost});

        const bestillingArray = {filmNavn:valgtFilm, antall: valgtAntall, fornavn: valgtFornavn, etternavn: valgtEtternavn, telefonnr: valgtTlf, epost: valgtEpost};
        $.post("/lagre",bestillingArray, function (){
            hentAlle();
        })
    }

    // Resets/empties the insert fields

    filmvalg.value = "velgFilm";
    antall.value = "";
    fornavn.value = "";
    etternavn.value = "";
    telefonnr.value = "";
    epost.value = "";
}

function hentAlle(){
    $.get("/hentAlle",function (billetter){
        formaterBillett(billetter);
    })
}

// Formatting the table for the print out.
function formaterBillett(billetter) {
    let ut = "<table class='table table-striped'><thead><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></thead>";

    for (const billett of billetter) {
        ut += "<tr><td>" +billett.filmNavn + "</td><td>" +billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn
            + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#billettene").html(ut);
}

// Empties the array

function slettBilletter(){
    $.get("/slettAlle", function (){
        hentAlle();
    })
}
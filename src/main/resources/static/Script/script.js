
// Input validation for the selection of different movies

function inputSjekkFilm(film){
    if(film === 'velgFilm'){
        feilmeldingFilm.innerHTML = "Velg en film!";
        $(".checkmarkGreenFilm").css("visibility", "hidden");
    }else{
        feilmeldingFilm.innerHTML = '';
        $(".checkmarkGreenFilm").css("visibility", "visible");
        return true;
    }
}

// Input validation for the ticket amount

function inputSjekkAntall(antallSjekk){
    if(isNaN(antallSjekk)){
        feilmeldingAntall.innerHTML = "Skriv inn et gyldig tall!";
        $(".checkmarkGreenAntall").css("visibility", "hidden");
    }else if(antallSjekk < 1){
        feilmeldingAntall.innerHTML = "Du må kjøpe minst 1 billett";
        $(".checkmarkGreenAntall").css("visibility", "hidden");
    } else if (antallSjekk > 50) {
        feilmeldingAntall.innerHTML = "Du kan ikke kjøpe flere enn 50 billetter";
        $(".checkmarkGreenAntall").css("visibility", "hidden");
    }else{
        feilmeldingAntall.innerHTML =  '';
        $(".checkmarkGreenAntall").css("visibility", "visible");
        return true;
    }
}

// Input validation for the first name

function inputSjekkFornavn(fornavn){
    if(fornavn === ''){
        feilmeldingFornavn.innerHTML = "Skriv inn et gyldig fornavn!";
        $(".checkmarkGreenFornavn").css("visibility", "hidden");
    } else if (fornavn.length < 1 || fornavn.length > 30) {
        feilmeldingFornavn.innerHTML = "Fornavn kan ikke være mindre enn 1 tegn eller større enn 30 tegn";
        $(".checkmarkGreenFornavn").css("visibility", "hidden");

        // Used and adapted code from: "https://stackoverflow.com/questions/16667329/special-character-validation" for testing certain characters / numbers / special characters etc in fornavn,
        // etternavn, telefonnr and email.

    } else if (!/^[a-zA-ZÆØÅæøå-]+$/.test(fornavn)) {
        feilmeldingFornavn.innerHTML = "Fornavn kan kun inneholde bokstaver, har du flere fornavn, bruk - imellom";
        $(".checkmarkGreenFornavn").css("visibility", "hidden");
    } else {
        //valgtFornavn = innFornavn;
        feilmeldingFornavn.innerHTML = '';
        $(".checkmarkGreenFornavn").css("visibility", "visible");
        return true;
    }
}

// Input validation for the last name

function inputSjekkEtternavn(etternavn){
    if(etternavn === ''){
        feilmeldingEtternavn.innerHTML = "Skriv inn et gyldig etternavn!";
        $(".checkmarkGreenEtternavn").css("visibility", "hidden");
    } else if (etternavn.length < 1 || etternavn.length > 30) {
        feilmeldingEtternavn.innerHTML = "Etternavn kan ikke være mindre enn 1 tegn eller større enn 30 tegn";
        $(".checkmarkGreenEtternavn").css("visibility", "hidden");
    } else if (!/^[a-zA-ZÆØÅæøå-]+$/.test(etternavn)) {
        feilmeldingEtternavn.innerHTML = "Etternavn kan kun inneholde bokstaver, har du flere etternavn, bruk - imellom";
        $(".checkmarkGreenEtternavn").css("visibility", "hidden");
    } else {
        feilmeldingEtternavn.innerHTML = '';
        $(".checkmarkGreenEtternavn").css("visibility", "visible");
        return true;
    }
}

// Input validation for the phone number

function inputSjekkTelefonnr(tlfnr){
    if(tlfnr === ''){
        feilmeldingTlf.innerHTML = "Skriv inn et gyldig telefonnr!";
        $(".checkmarkGreenTelefonnr").css("visibility", "hidden");
    } else if(!/^[94]\d{7}$/.test(tlfnr)){
        feilmeldingTlf.innerHTML = "Du har skrevet inn et ugyldig telefonnr (Bare norske tlf nr er akseptable, altså 8 siffre som starter på enten 4 eller 9)";
        $(".checkmarkGreenTelefonnr").css("visibility", "hidden");
    } else{
        feilmeldingTlf.innerHTML = '';
        $(".checkmarkGreenTelefonnr").css("visibility", "visible");
        return true;
    }
}

// Input validation for the Email
function inputSjekkEmail(email){
    if(email === ''){
        feilmeldingEpost.innerHTML = "Skriv inn en gyldig Epost!";
        $(".checkmarkGreenEpost").css("visibility", "hidden");
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        feilmeldingEpost.innerHTML = "Du har skrevet inn en ugyldig email";
        $(".checkmarkGreenEpost").css("visibility", "hidden");
    }else{
        feilmeldingEpost.innerHTML = '';
        $(".checkmarkGreenEpost").css("visibility", "visible");
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

    if(inputSjekkFilm(innFilm)) {
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
        $(".checkmarkGreen").css("visibility", "hidden");
        const bestillingArray = {filmNavn:valgtFilm, antall: valgtAntall, fornavn: valgtFornavn, etternavn: valgtEtternavn, telefonnr: valgtTlf, epost: valgtEpost};
        $.post("/lagre",bestillingArray, function (){
            hentAlle();
        })
    }

    // Resets/empties the insert fields and hides checkmarks

    filmvalg.value = "velgFilm";
    antall.value = "";
    fornavn.value = "";
    etternavn.value = "";
    telefonnr.value = "";
    epost.value = "";
    $(".checkmarkGreenFilm").css("visibility", "hidden");
    $(".checkmarkGreenAntall").css("visibility", "hidden");
    $(".checkmarkGreenFornavn").css("visibility", "hidden");
    $(".checkmarkGreenEtternavn").css("visibility", "hidden");
    $(".checkmarkGreenTelefonnr").css("visibility", "hidden");
    $(".checkmarkGreenEpost").css("visibility", "hidden");
}

function hentAlle(){
    $.get("/hentAlle",function (billetter){
        formaterBillett(billetter);
    })
}

// Formatting the table for the print out.
function formaterBillett(billetter) {
    let ut = "<table class='table table-striped'><thead class='thead-dark'><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></thead>";

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
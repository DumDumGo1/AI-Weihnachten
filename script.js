
/* =====================================
   MAGISCHE WEIHNACHTSWELT
   INTERAKTIVES JAVASCRIPT
===================================== */


/* POPUP */

const popup = document.getElementById("popup");

function zeigePopup(symbol, titel, text) {
    document.getElementById("popupSymbol").textContent = symbol;
    document.getElementById("popupTitel").textContent = titel;
    document.getElementById("popupText").textContent = text;
    popup.classList.add("aktiv");
}

function popupSchliessen() {
    popup.classList.remove("aktiv");
}

document.getElementById("popupSchliessen").addEventListener("click", popupSchliessen);
document.getElementById("popupOkay").addEventListener("click", popupSchliessen);

popup.addEventListener("click", (e) => {
    if (e.target === popup) popupSchliessen();
});


/* SCHNEE */

const schnee = document.getElementById("schnee");

function schneeflockeErstellen() {
    const flocke = document.createElement("span");
    flocke.className = "snowflake";
    flocke.textContent = ["❄", "✧", "·", "❅"][Math.floor(Math.random() * 4)];

    flocke.style.left = Math.random() * 100 + "%";
    flocke.style.fontSize = (8 + Math.random() * 15) + "px";
    flocke.style.animationDuration = (5 + Math.random() * 8) + "s";

    schnee.appendChild(flocke);

    setTimeout(() => flocke.remove(), 14000);
}

setInterval(schneeflockeErstellen, 180);


/* KLEINE FUNKEN BEI KLICKS */

document.addEventListener("click", (e) => {
    for (let i = 0; i < 5; i++) {
        const funke = document.createElement("span");
        funke.className = "spark";
        funke.textContent = ["✦", "✧", "⋆"][Math.floor(Math.random() * 3)];

        funke.style.left = (e.clientX + Math.random() * 35 - 17) + "px";
        funke.style.top = (e.clientY + Math.random() * 35 - 17) + "px";

        document.body.appendChild(funke);

        setTimeout(() => funke.remove(), 900);
    }
});


/* GESCHENKE */

let geschenke = Number(localStorage.getItem("weihnachtsGeschenke")) || 0;

function aktualisiereGeschenke() {
    document.getElementById("geschenke").textContent = geschenke;
    localStorage.setItem("weihnachtsGeschenke", geschenke);
}

function geschenkSammeln(anzahl = 1) {
    geschenke += anzahl;
    aktualisiereGeschenke();
}

aktualisiereGeschenke();


/* WEIHNACHTSDORF */

const hausInfos = {
    bäckerei: {
        symbol: "🍪",
        titel: "Die Plätzchenbäckerei",
        text: "Hier werden Zimtsterne, Vanillekipferl und Lebkuchen gebacken. Der Duft ist sogar bis zum Marktplatz zu riechen. Geheimtipp: Die Wichtel verstecken manchmal ein Extra-Plätzchen!"
    },

    post: {
        symbol: "💌",
        titel: "Die Weihnachtspost",
        text: "Tausende Wunschzettel kommen hier an. Die Briefe werden sortiert, gestempelt und an die richtigen Orte gebracht. Ein Brief ist allerdings seit 100 Jahren unterwegs ..."
    },

    spielzeug: {
        symbol: "🧸",
        titel: "Der Spielzeugladen",
        text: "In diesem Laden gibt es Holzpferde, Puppen, Eisenbahnen und geheimnisvolle Spielzeuge. Angeblich bewegt sich ein Teddybär jede Nacht von selbst!"
    },

    glocke: {
        symbol: "🔔",
        titel: "Der Glockenturm",
        text: "Die grosse Glocke läutet jeden Abend um Mitternacht. Ihr Klang soll Wünsche erfüllen. Niemand weiss genau, wer sie ursprünglich aufgehängt hat."
    }
};

document.querySelectorAll(".haus").forEach(haus => {
    haus.addEventListener("click", () => {
        const info = hausInfos[haus.dataset.house];

        document.getElementById("hausInfo").innerHTML =
            `<strong>${info.symbol} ${info.titel}</strong><br>${info.text}`;

        if (!haus.classList.contains("besucht")) {
            haus.classList.add("besucht");
            geschenkSammeln();
        }
    });
});


/* WICHTEL */

const wichtelSprueche = [
    "Pssst! Wir verpacken gerade ein Geschenk für jemanden ganz Besonderen. 🎁",
    "Ein Wichtel hat gerade 47 Schleifen auf einmal gebunden. Neuer Rekord! 🎀",
    "Hilfe! Wo ist die Liste mit den Wunschzetteln geblieben? 📝",
    "Wir haben gerade einen sprechenden Schneemann gebaut. Er erzählt Witze! ⛄",
    "Ein Rentier hat sich in unserer Werkstatt versteckt. Schon entdeckt? 🦌"
];

document.getElementById("wichtelButton").addEventListener("click", () => {
    const spruch = wichtelSprueche[Math.floor(Math.random() * wichtelSprueche.length)];

    document.getElementById("wichtelAntwort").textContent = "🧝 " + spruch;
    geschenkSammeln();
});


/* ADVENTSKALENDER */

const kalenderGrid = document.getElementById("kalenderGrid");

const adventsUeberraschungen = [
    "Heute ist ein guter Tag für eine Tasse heisse Schokolade. ☕",
    "Ein kleiner Stern schickt dir einen Weihnachtsgruss! ⭐",
    "Zeit für ein paar leckere Weihnachtsplätzchen! 🍪",
    "Heute darfst du jemandem eine Freude machen. 💌",
    "Ein Rentier hat dir einen geheimen Gruss geschickt! 🦌",
    "Vergiss nicht, heute etwas Schönes zu entdecken. ✨",
    "Ein bisschen Weihnachtsmusik macht den Tag schöner. 🎶",
    "Heute ist perfekt für einen gemütlichen Filmabend. 🎬",
    "Ein Wichtel hat ein Geschenk für dich versteckt. 🎁",
    "Zeit für eine kleine Winterwanderung! ❄️",
    "Du bist ein wichtiger Teil deiner eigenen Weihnachtsgeschichte. ❤️",
    "Heute gibt es eine extra Portion Zauber! 🪄",
    "Ein Stern leuchtet heute besonders hell für dich. 🌟",
    "Vielleicht ist heute ein guter Tag zum Basteln. ✂️",
    "Jemand freut sich bestimmt über ein nettes Wort von dir. 💛",
    "Ein unsichtbarer Wichtel winkt dir zu. 🧝",
    "Heute darfst du einfach gemütlich sein. 🧣",
    "Die Weihnachtsbäckerei ist geöffnet! 🍰",
    "Ein kleines Wunder wartet oft an unerwarteten Orten. ✨",
    "Noch ein paar Tage bis zum grossen Fest! 🎄",
    "Heute ist Zeit für einen Wunsch. 🌠",
    "Der Weihnachtszauber wird immer stärker. 🔔",
    "Morgen ist ein ganz besonderer Tag! 🎁",
    "Frohe Weihnachten! Du hast alle 24 Türchen entdeckt! 🎄"
];

for (let i = 1; i <= 24; i++) {
    const tuer = document.createElement("button");
    tuer.className = "tuerchen";
    tuer.textContent = i;

    tuer.addEventListener("click", () => {
        if (tuer.classList.contains("offen")) {
            zeigePopup("🎄", "Dieses Türchen ist schon offen!", "Du hast diese Überraschung bereits entdeckt. Schau dich weiter um!");
            return;
        }

        tuer.classList.add("offen");
        tuer.textContent = ["⭐", "🎁", "❄", "🍪", "🔔"][i % 5];

        zeigePopup("🎄", `Türchen ${i}`, adventsUeberraschungen[i - 1]);
        geschenkSammeln();
    });

    kalenderGrid.appendChild(tuer);
}


/* RENTIER-QUIZ */

const quizFragen = [
    {
        frage: "Welches Tier zieht traditionell den Weihnachtsschlitten?",
        antworten: ["Pferde", "Rentiere", "Pinguine", "Polarfüchse"],
        richtig: 1
    },
    {
        frage: "Welche Pflanze wird oft zu Weihnachten geschmückt?",
        antworten: ["Kaktus", "Sonnenblume", "Tannenbaum", "Palme"],
        richtig: 2
    },
    {
        frage: "Wie heisst die berühmte rote Nase eines Rentiers?",
        antworten: ["Rudolph", "Robert", "Rudi", "Robin"],
        richtig: 0
    },
    {
        frage: "Welche Farbe hat der Mantel des Weihnachtsmannes meistens?",
        antworten: ["Blau", "Grün", "Rot", "Violett"],
        richtig: 2
    },
    {
        frage: "Was findet man oft unter einem Weihnachtsbaum?",
        antworten: ["Muscheln", "Geschenke", "Regenschirme", "Schneebälle"],
        richtig: 1
    }
];

let quizIndex = 0;
let quizPunkte = 0;
let quizBeantwortet = false;

const quizFrage = document.getElementById("quizFrage");
const quizAntworten = document.getElementById("quizAntworten");
const quizRueckmeldung = document.getElementById("quizRueckmeldung");
const quizWeiter = document.getElementById("quizWeiter");

function quizLaden() {
    quizBeantwortet = false;

    const frage = quizFragen[quizIndex];

    document.getElementById("quizFortschritt").textContent =
        `FRAGE ${quizIndex + 1} VON ${quizFragen.length}`;

    quizFrage.textContent = frage.frage;
    quizAntworten.innerHTML = "";
    quizRueckmeldung.textContent = "";
    quizWeiter.hidden = true;

    frage.antworten.forEach((antwort, index) => {
        const button = document.createElement("button");
        button.textContent = antwort;

        button.addEventListener("click", () => {
            if (quizBeantwortet) return;

            quizBeantwortet = true;

            const alleButtons = quizAntworten.querySelectorAll("button");

            alleButtons.forEach((b, i) => {
                b.disabled = true;

                if (i === frage.richtig) b.classList.add("richtig");
                else if (i === index) b.classList.add("falsch");
            });

            if (index === frage.richtig) {
                quizPunkte++;
                quizRueckmeldung.textContent = "Richtig! Du bist ein Weihnachtsprofi! ✨";
            } else {
                quizRueckmeldung.textContent =
                    "Fast! Die richtige Antwort ist: " + frage.antworten[frage.richtig] + ".";
            }

            quizWeiter.hidden = false;
        });

        quizAntworten.appendChild(button);
    });
}

quizWeiter.addEventListener("click", () => {
    quizIndex++;

    if (quizIndex < quizFragen.length) {
        quizLaden();
    } else {
        quizFrage.textContent = `Du hast ${quizPunkte} von 5 Punkten erreicht!`;
        quizAntworten.innerHTML = "";
        quizRueckmeldung.textContent =
            quizPunkte === 5
                ? "Unglaublich! Du bist eine echte Weihnachtslegende! 🏆"
                : "Toll gemacht! Die Rentier-Akademie gratuliert dir! 🎄";

        quizWeiter.hidden = true;

        if (quizPunkte >= 3) geschenkSammeln(2);
        quizIndex = -1;

        setTimeout(() => {
            quizIndex = 0;
            quizPunkte = 0;
            quizLaden();
        }, 4500);
    }
});

quizLaden();


/* SCHNEEFLOCKEN-SPIEL */

let schneePunkte = 0;
let schneeZeit = 20;
let schneeAktiv = false;
let schneeIntervall;
let schneeUhr;

const schneeFeld = document.getElementById("schneeSpielFeld");
const schneeZiel = document.getElementById("schneeZiel");

document.getElementById("schneeSpiel").addEventListener("click", () => {
    if (schneeAktiv) return;

    schneeAktiv = true;
    schneePunkte = 0;
    schneeZeit = 20;

    schneeFeld.style.display = "block";
    schneeZiel.innerHTML = "";

    document.getElementById("schneePunkte").textContent = "Punkte: 0";
    document.getElementById("schneeZeit").textContent = "Zeit: 20";

    schneeIntervall = setInterval(() => {
        const ziel = document.createElement("button");
        ziel.className = "fang-schnee";
        ziel.textContent = ["❄", "❅", "❆"][Math.floor(Math.random() * 3)];
        ziel.style.left = Math.random() * 85 + "%";
        ziel.style.animationDuration = "2.5s";

        ziel.addEventListener("click", () => {
            if (!schneeAktiv) return;

            schneePunkte++;
            document.getElementById("schneePunkte").textContent =
                "Punkte: " + schneePunkte;

            ziel.remove();
        });

        schneeZiel.appendChild(ziel);
        setTimeout(() => ziel.remove(), 2500);
    }, 650);

    schneeUhr = setInterval(() => {
        schneeZeit--;

        document.getElementById("schneeZeit").textContent =
            "Zeit: " + schneeZeit;

        if (schneeZeit <= 0) {
            clearInterval(schneeIntervall);
            clearInterval(schneeUhr);

            schneeAktiv = false;
            schneeZiel.innerHTML = "";

            document.getElementById("schneeZiel").textContent =
                `Spiel beendet! Du hast ${schneePunkte} Schneeflocken gesammelt.`;

            if (schneePunkte >= 10) geschenkSammeln(3);
        }
    }, 1000);
});


/* GESCHENK-RÄTSEL */

document.getElementById("geschenkSpiel").addEventListener("click", () => {
    const feld = document.getElementById("geschenkRaetsel");

    feld.innerHTML = `
        <p>Welches Geschenk enthält einen goldenen Stern?</p>
        <div>
            <button class="raetsel-geschenk" data-gift="false">🎁</button>
            <button class="raetsel-geschenk" data-gift="true">🎁</button>
            <button class="raetsel-geschenk" data-gift="false">🎁</button>
        </div>
        <p id="raetselAntwort"></p>
    `;

    feld.querySelectorAll(".raetsel-geschenk").forEach(button => {
        button.addEventListener("click", () => {
            const antwort = document.getElementById("raetselAntwort");

            if (button.dataset.gift === "true") {
                antwort.textContent = "Richtig! Du hast den goldenen Stern gefunden! ⭐";
                geschenkSammeln(2);
            } else {
                antwort.textContent = "Leider nicht! Versuch es noch einmal. ✧";
            }
        });
    });
});


/* GEHEIMNISWALD */

let waldEntdeckt = false;

document.getElementById("waldGeheimnis").addEventListener("click", () => {
    const antwort = document.getElementById("waldAntwort");

    if (!waldEntdeckt) {
        waldEntdeckt = true;

        antwort.innerHTML =
            "🔔 Du hast die alte Waldglocke gefunden! Sie wurde vor langer Zeit von den Wichteln versteckt. Du erhältst 5 Geschenke!";

        geschenkSammeln(5);
    } else {
        antwort.textContent =
            "Die Waldglocke läutet noch immer. Sie hat dir ihr Geheimnis bereits verraten. ✨";
    }
});


/* WEIHNACHTSWUNSCH */

document.getElementById("wunschButton").addEventListener("click", () => {
    const input = document.getElementById("wunschInput");
    const antwort = document.getElementById("wunschAntwort");
    const wunsch = input.value.trim();

    if (!wunsch) {
        antwort.textContent = "Schreibe zuerst deinen Wunsch auf. ⭐";
        return;
    }

    antwort.textContent =
        `✨ Dein Wunsch "${wunsch}" wurde an den Weihnachtsstern geschickt. Möge ein bisschen Weihnachtszauber zu dir kommen!`;

    input.value = "";
});


/* GEHEIME EASTER EGGS */

let baumKlicks = 0;

document.querySelector(".hero-baum").addEventListener("click", () => {
    baumKlicks++;

    if (baumKlicks === 5) {
        zeigePopup(
            "🎄",
            "Der geheime Weihnachtsbaum!",
            "Du hast den Zauber des Weihnachtsbaums entdeckt! In seinen Zweigen versteckt sich ein winziger Wichtel. Er schenkt dir 3 Geschenke."
        );

        geschenkSammeln(3);
        baumKlicks = 0;
    }
});

let logoKlicks = 0;

document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    logoKlicks++;

    if (logoKlicks === 7) {
        zeigePopup(
            "🧝",
            "Der geheime Eingang!",
            "Du hast das geheime Zeichen gefunden. Die Wichtel kennen dich jetzt!"
        );

        geschenkSammeln(2);
        logoKlicks = 0;
    }
});


/* KONAMI-ÄHNLICHER GEHEIMCODE */

let geheimCode = [];
const richtigerCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"];

document.addEventListener("keydown", (e) => {
    geheimCode.push(e.key);
    geheimCode = geheimCode.slice(-6);

    if (JSON.stringify(geheimCode) === JSON.stringify(richtigerCode)) {
        zeigePopup(
            "🎅",
            "Geheimer Weihnachtscode!",
            "Ho ho ho! Du hast den geheimen Tastencode entdeckt. Der Weihnachtsmann hat eine Überraschung für dich!"
        );

        geschenkSammeln(5);
        geheimCode = [];
    }
});


/* GEHEIME WEIHNACHTSBOTSCHAFT */

let besuche = 0;

document.addEventListener("click", () => {
    besuche++;

    if (besuche === 30) {
        zeigePopup(
            "💌",
            "Eine kleine Nachricht",
            "Du hast diese Weihnachtswelt schon oft besucht. Danke, dass du so viel Weihnachtszauber mitbringst!"
        );
    }
});

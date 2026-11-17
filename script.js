
const recipes = [
    {
        id: "mailaenderli",
        name: "Mailänderli",
        emoji: "⭐",
        category: "klassiker",
        categoryName: "Schweizer Klassiker",
        description: "Goldgelbe Butterguetzli mit einem feinen Hauch Zitrone.",
        time: "30 Min. + Kühlzeit",
        temperature: "200 °C",
        baking: "9–11 Min.",
        amount: "ca. 40–50 Stück",
        ingredients: [
            "250 g weiche Butter",
            "250 g Zucker",
            "1 Prise Salz",
            "1 Bio-Zitrone (abgeriebene Schale)",
            "2 Eier",
            "500 g Mehl",
            "1 Eigelb zum Bestreichen"
        ],
        steps: [
            "Butter in einer Schüssel cremig rühren.",
            "Zucker, Salz, Zitronenschale und Eier dazugeben und weiterrühren, bis die Masse heller wird.",
            "Mehl beigeben und alles kurz zu einem Teig zusammenfügen. Nicht lange kneten.",
            "Teig zugedeckt mindestens 1 Stunde im Kühlschrank kühl stellen.",
            "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
            "Teig auf wenig Mehl etwa 7–10 mm dick auswallen und Formen ausstechen.",
            "Guetzli auf ein mit Backpapier belegtes Blech legen und mit Eigelb bestreichen.",
            "In der Ofenmitte 9–11 Minuten backen, bis die Ränder leicht goldgelb sind."
        ],
        note: "Der Teig lässt sich leichter auswallen, wenn er gut gekühlt ist. Die Mailänderli sollten nicht zu dunkel werden."
    },
    {
        id: "spitzbuben",
        name: "Spitzbuben",
        emoji: "❤️",
        category: "klassiker",
        categoryName: "Schweizer Klassiker",
        description: "Zarte Butterguetzli mit fruchtiger Konfitüre dazwischen.",
        time: "45 Min. + Kühlzeit",
        temperature: "200 °C",
        baking: "6–8 Min.",
        amount: "ca. 25–30 Stück",
        ingredients: [
            "250 g weiche Butter",
            "125 g Puderzucker",
            "2 TL Vanillezucker",
            "1 Prise Salz",
            "1 Eiweiss",
            "350 g Mehl",
            "ca. 150 g Johannisbeergelee oder Himbeerkonfitüre",
            "Etwas Puderzucker zum Bestäuben"
        ],
        steps: [
            "Butter cremig rühren.",
            "Puderzucker, Vanillezucker, Salz und Eiweiss dazugeben und rühren, bis die Masse heller wird.",
            "Mehl beigeben und kurz zu einem Teig zusammenfügen.",
            "Teig in Folie wickeln und 1 Stunde kühl stellen.",
            "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
            "Teig auf wenig Mehl etwa 2–3 mm dick auswallen.",
            "Gleich viele Böden und Deckel ausstechen. In die Deckel ein kleines Loch stechen.",
            "Guetzli auf Backpapier legen und nochmals etwa 15 Minuten kühl stellen.",
            "In der Ofenmitte 6–8 Minuten backen. Sie sollen hell bleiben.",
            "Abkühlen lassen. Gelee leicht erwärmen, auf die Böden streichen und Deckel daraufsetzen.",
            "Mit Puderzucker bestäuben."
        ],
        note: "Die Spitzbuben erst zusammensetzen, wenn sie vollständig ausgekühlt sind. So zerbrechen sie weniger leicht."
    },
    {
        id: "zimtsterne",
        name: "Zimtsterne",
        emoji: "🌟",
        category: "nuss",
        categoryName: "Nuss & Gewürze",
        description: "Weihnachtliche Sterne aus Mandeln mit weisser Glasur.",
        time: "45 Min. + Trocknungszeit",
        temperature: "150 °C",
        baking: "ca. 5 Min.",
        amount: "ca. 35–45 Stück",
        ingredients: [
            "3 Eiweiss",
            "1 Prise Salz",
            "250 g Puderzucker",
            "1½ EL Zimt",
            "350 g gemahlene Mandeln",
            "½ EL Zitronensaft"
        ],
        steps: [
            "Eiweiss mit Salz steif schlagen.",
            "Puderzucker nach und nach dazugeben und weiterschlagen, bis eine glänzende Masse entsteht.",
            "Etwa 1 dl der Masse für die Glasur beiseitestellen.",
            "Zimt, Mandeln und Zitronensaft zur restlichen Masse geben und zu einem Teig zusammenfügen.",
            "Teig auf wenig Zucker etwa 7–10 mm dick auswallen.",
            "Sterne ausstechen und auf Backpapier legen.",
            "Die Sterne mit der beiseitegestellten Eiweissmasse bestreichen.",
            "Mehrere Stunden oder über Nacht bei Raumtemperatur trocknen lassen.",
            "Im vorgeheizten Ofen bei 150 °C Ober-/Unterhitze etwa 5 Minuten backen. Die Glasur soll hell bleiben."
        ],
        note: "Zimtsterne brauchen Zeit zum Trocknen. Plane diesen Schritt unbedingt ein. Die Backzeit ist kurz: Lieber früh kontrollieren!"
    },
    {
        id: "brunsli",
        name: "Basler Brunsli",
        emoji: "🍫",
        category: "schokolade",
        categoryName: "Schokolade",
        description: "Schokoladige Mandelguetzli mit einer leicht knusprigen Oberfläche.",
        time: "30 Min. + Kühlzeit",
        temperature: "200 °C",
        baking: "5–7 Min.",
        amount: "ca. 35 Stück",
        ingredients: [
            "250 g gemahlene Mandeln",
            "200 g Zucker",
            "2 EL Kakaopulver",
            "100 g dunkle Schokolade, fein gerieben",
            "2 Eiweiss",
            "1 Prise Salz",
            "1 TL Zimt",
            "1–2 EL Kirsch (optional)",
            "Etwas Zucker zum Auswallen"
        ],
        steps: [
            "Mandeln, Zucker, Kakao, geriebene Schokolade und Zimt mischen.",
            "Eiweiss mit Salz leicht schaumig schlagen, nicht vollständig steif.",
            "Eiweiss und nach Wunsch Kirsch zur Mandelmischung geben.",
            "Alles zu einem zusammenhängenden Teig vermengen.",
            "Teig zugedeckt etwa 30 Minuten kühl stellen.",
            "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
            "Teig auf Zucker etwa 1 cm dick auswallen und Formen ausstechen.",
            "Auf Backpapier legen und in der Ofenmitte etwa 5–7 Minuten backen.",
            "Auf dem Blech auskühlen lassen. Brunsli werden beim Abkühlen fester."
        ],
        note: "Brunsli sollen innen noch etwas weich sein. Nicht zu lange backen! Der Kirsch ist optional und kann weggelassen werden."
    },
    {
        id: "vanillekipferl",
        name: "Vanillekipferl",
        emoji: "🌙",
        category: "nuss",
        categoryName: "Nuss & Gewürze",
        description: "Zarte Halbmonde mit feinem Vanilleduft.",
        time: "40 Min. + Kühlzeit",
        temperature: "175 °C",
        baking: "10–12 Min.",
        amount: "ca. 35–40 Stück",
        ingredients: [
            "250 g kalte Butter",
            "100 g Zucker",
            "350 g Mehl",
            "100 g gemahlene Mandeln",
            "1 Päckchen Vanillezucker",
            "1 Prise Salz",
            "50 g Puderzucker zum Wenden",
            "1 Päckchen Vanillezucker zum Wenden"
        ],
        steps: [
            "Mehl, Zucker, gemahlene Mandeln, Vanillezucker und Salz mischen.",
            "Kalte Butter in kleinen Stücken dazugeben.",
            "Alles rasch zu einem glatten Teig zusammenfügen.",
            "Teig in Folie wickeln und mindestens 1 Stunde kühl stellen.",
            "Backofen auf 175 °C Ober-/Unterhitze vorheizen.",
            "Aus dem Teig kleine Rollen formen, Stücke abschneiden und zu Kipferln biegen.",
            "Auf ein Backblech mit Backpapier legen.",
            "In der Ofenmitte 10–12 Minuten backen. Die Spitzen dürfen leicht Farbe bekommen.",
            "Puderzucker und Vanillezucker mischen. Die noch warmen Kipferl vorsichtig darin wenden."
        ],
        note: "Die Kipferl sind direkt nach dem Backen sehr zerbrechlich. Lass sie kurz auf dem Blech liegen, bevor du sie bewegst."
    },
    {
        id: "schoggi",
        name: "Schoggi-Cookies",
        emoji: "🍪",
        category: "schokolade",
        categoryName: "Schokolade",
        description: "Aussen leicht knusprig, innen weich mit Schokoladenstückchen.",
        time: "20 Min.",
        temperature: "180 °C",
        baking: "10–12 Min.",
        amount: "ca. 18 Stück",
        ingredients: [
            "125 g weiche Butter",
            "100 g brauner Zucker",
            "50 g weisser Zucker",
            "1 Ei",
            "1 TL Vanillezucker",
            "180 g Mehl",
            "½ TL Backpulver",
            "1 Prise Salz",
            "120 g Schokoladenwürfel oder Schokodrops"
        ],
        steps: [
            "Backofen auf 180 °C Ober-/Unterhitze vorheizen.",
            "Butter mit braunem und weissem Zucker cremig rühren.",
            "Ei und Vanillezucker unterrühren.",
            "Mehl, Backpulver und Salz mischen und kurz unterheben.",
            "Schokoladenstücke unter den Teig mischen.",
            "Mit zwei Löffeln etwa walnussgrosse Teighäufchen auf ein Backpapier setzen. Viel Abstand lassen.",
            "Die Häufchen nicht platt drücken. Sie verlaufen beim Backen.",
            "In der Ofenmitte 10–12 Minuten backen.",
            "Auf dem Blech etwa 10 Minuten abkühlen lassen."
        ],
        note: "Die Cookies sehen in der Mitte direkt nach dem Backen noch weich aus. Beim Abkühlen werden sie fester."
    },
    {
        id: "hafer",
        name: "Haferflocken-Guetzli",
        emoji: "🌾",
        category: "nuss",
        categoryName: "Nuss & Co.",
        description: "Knusprige kleine Guetzli mit Haferflocken.",
        time: "20 Min.",
        temperature: "180 °C",
        baking: "12–15 Min.",
        amount: "ca. 25 Stück",
        ingredients: [
            "125 g weiche Butter",
            "100 g Zucker",
            "1 Ei",
            "1 TL Vanillezucker",
            "100 g zarte Haferflocken",
            "100 g Mehl",
            "½ TL Backpulver",
            "1 Prise Salz"
        ],
        steps: [
            "Backofen auf 180 °C Ober-/Unterhitze vorheizen.",
            "Butter und Zucker cremig rühren.",
            "Ei und Vanillezucker dazugeben und gut verrühren.",
            "Haferflocken, Mehl, Backpulver und Salz mischen.",
            "Die trockenen Zutaten zur Buttermasse geben und zu einem Teig verrühren.",
            "Mit zwei Teelöffeln kleine Häufchen auf ein Backblech setzen.",
            "Etwas Abstand zwischen den Häufchen lassen.",
            "In der Ofenmitte 12–15 Minuten backen, bis die Ränder goldbraun sind.",
            "Auf einem Gitter vollständig auskühlen lassen."
        ],
        note: "Für eine Variante kannst du eine kleine Handvoll Rosinen oder Schokoladenstückchen in den Teig geben."
    },
    {
        id: "kokos",
        name: "Kokosmakronen",
        emoji: "🥥",
        category: "nuss",
        categoryName: "Nuss & Co.",
        description: "Luftige Kokos-Häufchen mit einer leicht goldenen Spitze.",
        time: "20 Min.",
        temperature: "160 °C",
        baking: "12–15 Min.",
        amount: "ca. 20 Stück",
        ingredients: [
            "2 Eiweiss",
            "100 g Zucker",
            "150 g Kokosraspel",
            "1 Prise Salz",
            "1 TL Zitronensaft",
            "Optional: 50 g dunkle Schokolade zum Verzieren"
        ],
        steps: [
            "Backofen auf 160 °C Ober-/Unterhitze vorheizen.",
            "Eiweiss mit Salz steif schlagen.",
            "Zucker langsam einrieseln lassen und weiterschlagen.",
            "Kokosraspel und Zitronensaft vorsichtig unterheben.",
            "Mit zwei Teelöffeln kleine Häufchen auf ein Backblech mit Backpapier setzen.",
            "In der Ofenmitte 12–15 Minuten backen, bis die Spitzen leicht goldgelb sind.",
            "Auf dem Blech abkühlen lassen.",
            "Nach Wunsch geschmolzene Schokolade darüberträufeln."
        ],
        note: "Die Masse sollte nicht flüssig sein. Hebe die Kokosraspel vorsichtig unter, damit die Makronen schön luftig bleiben."
    }
];

let activeFilter = "alle";
let favorites = [];

const recipeGrid = document.getElementById("recipe-grid");
const favoriteGrid = document.getElementById("favorite-grid");
const searchInput = document.getElementById("recipe-search");
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("modal-content");


// REZEPTKARTEN ERSTELLEN

function createRecipeCard(recipe) {
    const isFavorite = favorites.includes(recipe.id);

    return `
        <article class="recipe-card">
            <div class="recipe-image">${recipe.emoji}</div>

            <div class="recipe-card-content">
                <span class="recipe-category">${recipe.categoryName}</span>

                <h3>${recipe.name}</h3>

                <p>${recipe.description}</p>

                <div class="recipe-meta">
                    <span>⏱ ${recipe.time}</span>
                    <span>🍪 ${recipe.amount}</span>
                </div>

                <div class="card-actions">
                    <button class="open-recipe" data-open="${recipe.id}">
                        Rezept ansehen →
                    </button>

                    <button
                        class="favorite-button ${isFavorite ? "saved" : ""}"
                        data-favorite="${recipe.id}"
                        aria-label="Favorit speichern"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        </article>
    `;
}


// REZEPTE ANZEIGEN

function renderRecipes() {
    const search = searchInput.value.toLowerCase().trim();

    const filtered = recipes.filter(recipe => {
        const matchesFilter =
            activeFilter === "alle" ||
            recipe.category === activeFilter;

        const matchesSearch =
            recipe.name.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search) ||
            recipe.ingredients.join(" ").toLowerCase().includes(search);

        return matchesFilter && matchesSearch;
    });

    recipeGrid.innerHTML = filtered.map(createRecipeCard).join("");

    document.getElementById("no-results").hidden = filtered.length !== 0;

    addCardEvents();
}


// FAVORITEN ANZEIGEN

function renderFavorites() {
    const favoriteRecipes = recipes.filter(recipe =>
        favorites.includes(recipe.id)
    );

    favoriteGrid.innerHTML = favoriteRecipes
        .map(createRecipeCard)
        .join("");

    document.getElementById("empty-favorites").hidden =
        favoriteRecipes.length !== 0;

    document.getElementById("favorite-count").textContent =
        favorites.length;

    addCardEvents();
}


// KLICK-EVENTS FÜR DIE KARTEN

function addCardEvents() {
    document.querySelectorAll("[data-open]").forEach(button => {
        button.addEventListener("click", () => {
            openRecipe(button.dataset.open);
        });
    });

    document.querySelectorAll("[data-favorite]").forEach(button => {
        button.addEventListener("click", () => {
            toggleFavorite(button.dataset.favorite);
        });
    });
}


// FAVORITEN UMSCHALTEN

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    renderRecipes();
    renderFavorites();
}


// REZEPT-FENSTER ÖFFNEN

function openRecipe(id) {
    const recipe = recipes.find(item => item.id === id);

    if (!recipe) return;

    modalContent.innerHTML = `
        <div class="modal-emoji">${recipe.emoji}</div>

        <span class="recipe-category">${recipe.categoryName}</span>

        <h2>${recipe.name}</h2>

        <p class="modal-description">${recipe.description}</p>

        <div class="modal-facts">
            <span>⏱ ${recipe.time}</span>
            <span>🔥 ${recipe.temperature}</span>
            <span>🍪 ${recipe.amount}</span>
        </div>

        <h3>🧺 Zutaten</h3>

        <ul class="ingredients">
            ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>👩‍🍳 So geht's</h3>

        <ol class="steps">
            ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>

        <div class="recipe-note">
            💡 <strong>Backstuben-Tipp:</strong> ${recipe.note}
            <br><br>
            <strong>Wichtig:</strong> Die Backzeiten sind Richtwerte.
            Behalte die Guetzli gegen Ende der Backzeit im Auge.
        </div>
    `;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}


// REZEPT-FENSTER SCHLIESSEN

function closeRecipe() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.getElementById("modal-close").addEventListener("click", closeRecipe);
document.getElementById("modal-backdrop").addEventListener("click", closeRecipe);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeRecipe();
    }
});


// FILTER

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        activeFilter = button.dataset.filter;

        renderRecipes();
    });
});


// SUCHE

searchInput.addEventListener("input", renderRecipes);


// START

renderRecipes();
renderFavorites();

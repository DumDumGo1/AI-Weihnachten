
// CHRISTMAS COUNTDOWN

function updateCountdown() {
    const now = new Date();
    let christmas = new Date(now.getFullYear(), 11, 24);

    if (now > christmas) {
        christmas = new Date(now.getFullYear() + 1, 11, 24);
    }

    const difference = christmas - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("timer").innerHTML =
        `${days} DAYS · ${hours} H · ${minutes} MIN · ${seconds} SEC`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// SECRET EASTER EGG

const secretButton = document.getElementById("secretButton");
const secretText = document.getElementById("secretText");

secretButton.addEventListener("click", function() {
    secretText.innerHTML =
        "🎄 ✨ Du hast das geheime Weihnachtsportal entdeckt! ✨ 🎄";

    document.body.style.backgroundColor = "#123b2b";

    secretButton.innerHTML = "SECRET UNLOCKED ✧";
});


// LOGO SECRET

let logoClicks = 0;

document.querySelector(".logo").addEventListener("click", function() {
    logoClicks++;

    if (logoClicks === 5) {
        alert("🎅 HO HO HO! Du hast AJVAs Weihnachtsgeheimnis gefunden!");
        logoClicks = 0;
    }
});

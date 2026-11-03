const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const fullscreenButton = document.querySelector("#fullscreenButton");
const fullscreenStatus = document.querySelector("#fullscreenStatus");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Merci ! Le formulaire est prêt, mais aucun message n’est encore transmis.";
});

fullscreenButton.addEventListener("click", async () => {
    fullscreenStatus.textContent = "";

    if (!document.fullscreenEnabled) {
        fullscreenStatus.textContent = "Le plein écran n’est pas disponible dans ce navigateur. Essayez la touche F11.";
        return;
    }

    try {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
        } else {
            await document.documentElement.requestFullscreen();
        }
    } catch (error) {
        console.error("Impossible de modifier l’affichage plein écran.", error);
        fullscreenStatus.textContent = "Le plein écran a été refusé par le navigateur. Essayez la touche F11.";
    }
});

document.addEventListener("fullscreenchange", () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    fullscreenButton.textContent = isFullscreen ? "Quitter le plein écran" : "Plein écran";
    fullscreenButton.setAttribute("aria-pressed", String(isFullscreen));
});

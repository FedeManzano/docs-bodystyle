(() => {
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .catch(error => console.error("No se pudo registrar la aplicación offline:", error));
    });
})();

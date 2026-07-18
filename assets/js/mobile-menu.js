// Menú hamburguesa para pantallas pequeñas (<=736px), donde Hyperspace
// oculta por completo el sidebar sin dar ninguna alternativa de navegación.
document.addEventListener("DOMContentLoaded", function () {
	var toggle = document.getElementById("menu-toggle");
	var sidebar = document.getElementById("sidebar");
	if (!toggle || !sidebar) return;

	toggle.addEventListener("click", function () {
		sidebar.classList.toggle("mobile-open");
		toggle.classList.toggle("is-active");
	});

	// Cierra el menú al tocar un link (para que sí navegue a la sección)
	sidebar.querySelectorAll("a").forEach(function (link) {
		link.addEventListener("click", function () {
			sidebar.classList.remove("mobile-open");
			toggle.classList.remove("is-active");
		});
	});
});

// ==============================
// MENÚ HAMBURGUESA
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Cerrar menú al seleccionar una opción

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ==============================
// BARRAS DE HABILIDADES
// ==============================

const progressBars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const progress = entry.target.dataset.progress;

                entry.target.style.width = progress;

            }

        });

    },
    {
        threshold: 0.5
    }
);


progressBars.forEach(bar => {
    skillsObserver.observe(bar);
});


// ==============================
// FORMULARIO
// ==============================

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formMessage = document.getElementById("form-message");


// Validar nombre

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "El nombre es obligatorio.";
        nameInput.classList.add("input-error");
        nameInput.classList.remove("input-success");

        return false;

    }

    if (name.length < 3) {

        nameError.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        nameInput.classList.add("input-error");
        nameInput.classList.remove("input-success");

        return false;

    }

    nameError.textContent = "";
    nameInput.classList.remove("input-error");
    nameInput.classList.add("input-success");

    return true;
}


// Validar correo

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "El correo electrónico es obligatorio.";

        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");

        return false;
    }

    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Escribe un correo electrónico válido.";

        emailInput.classList.add("input-error");
        emailInput.classList.remove("input-success");

        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("input-error");
    emailInput.classList.add("input-success");

    return true;
}


// Validar mensaje

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {

        messageError.textContent =
            "El mensaje es obligatorio.";

        messageInput.classList.add("input-error");
        messageInput.classList.remove("input-success");

        return false;
    }

    if (message.length < 10) {

        messageError.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        messageInput.classList.add("input-error");
        messageInput.classList.remove("input-success");

        return false;
    }

    messageError.textContent = "";
    messageInput.classList.remove("input-error");
    messageInput.classList.add("input-success");

    return true;
}


// ==============================
// VALIDACIÓN EN TIEMPO REAL
// ==============================

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

messageInput.addEventListener("input", validateMessage);


// ==============================
// EVENTO SUBMIT
// ==============================

form.addEventListener("submit", event => {

    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validMessage = validateMessage();

    if (validName && validEmail && validMessage) {

        formMessage.textContent =
            "¡Mensaje enviado correctamente!";

        formMessage.style.color = "#16a34a";

        form.reset();

        nameInput.classList.remove("input-success");
        emailInput.classList.remove("input-success");
        messageInput.classList.remove("input-success");

    } else {

        formMessage.textContent =
            "Por favor, corrige los campos indicados.";

        formMessage.style.color = "#dc2626";

    }

});
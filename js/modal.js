export function setupModal() {
    const refs = {
        openModalBtns: document.querySelectorAll(".modal-open"),
        closeModalBtn: document.querySelector(".modal-close"),
        backdrop: document.querySelector(".backdrop"),
        modal: document.querySelector(".modal"),
        body: document.querySelector("body"),
        form: document.querySelector(".modal-form"),
        inputs: document.querySelectorAll(".modal-input, .modal-text"),
    };

    if (!refs.modal || !refs.backdrop || !refs.form) return;

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        refs.body.classList.toggle("modal-on");
    }

    refs.openModalBtns.forEach(el => el.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
    refs.backdrop.addEventListener("click", ev => {
        if (ev.target.classList.contains("backdrop")) {
            toggleModal();
        }
    });

    refs.form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            name: refs.form.elements[0].value,
            phone: refs.form.elements[1].value,
            message: refs.form.elements[2].value,
        };

        try {
            await emailjs.send("service_4xvwzen", "template_4ksigxf", formData);
            alert("Повідомлення успішно відправлено!");
            refs.form.reset();
            toggleModal();
        } catch (error) {
            console.error("Помилка при відправці:", error);
            alert("Сталася помилка. Спробуйте ще раз.");
        }
    });
}

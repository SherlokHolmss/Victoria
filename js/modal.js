export function setupModal() {
    const refs = {
        openModalBtns: document.querySelectorAll(".modal-open"),
        closeModalBtn: document.querySelector(".modal-close"),
        backdrop: document.querySelector(".backdrop"),
        modal: document.querySelector(".modal"),
        body: document.querySelector("body"),
    };

    if (!refs.modal || !refs.backdrop) return;

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
}

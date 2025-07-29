(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-three-open]"),
    closeModalBtn: document.querySelector("[data-modal-three-close]"),
    modal: document.querySelector("[data-modal-three]"),
  };

  // Навесить на все кнопки открытия
  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  // Закрытие по кнопке
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закрытие по клику на бэкдроп
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }
})();
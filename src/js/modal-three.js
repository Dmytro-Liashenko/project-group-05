(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-three-open]"),
      closeModalBtn: document.querySelector("[data-modal-three-close]"),
      modal: document.querySelector("[data-modal-three]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  

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
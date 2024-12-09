document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const btn = document.querySelector("button[type='submit']");
    const span = document.querySelector(".modal .close");
    const closeButton = document.getElementById("close-button");

    // Показать модальное окно при клике на кнопку "Задать вопрос"
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // Отключаем отправку формы
        modal.style.display = "block";
    });

    // Закрыть модальное окно при клике на "x"
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрыть модальное окно при клике на кнопку "Закрыть"
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрыть модальное окно при клике вне окна
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains("active");
  
    // Сбрасываем активное состояние для всех других аккордеонов
    document.querySelectorAll(".accordion-header").forEach((item) => {
      item.classList.remove("active");
      item.nextElementSibling.style.display = "none";
    });
  
    // Переключаем текущий
    if (!isActive) {
      header.classList.add("active");
      content.style.display = "block";
    }
  }
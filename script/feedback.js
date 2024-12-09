
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    const form = document.getElementById('feedback-form');
        const modal = document.getElementById('thank-you-modal');
        const closeModalButton = document.getElementById('close-modal');

        // Обработчик отправки формы
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Отмена стандартной отправки формы

            // Показываем модальное окно
            modal.style.display = 'flex';

            // Сбрасываем форму
            form.reset();
        });

        // Закрытие модального окна
        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // Закрытие окна при клике вне его
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

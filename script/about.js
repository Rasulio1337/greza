// Получаем элементы
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Открытие модального окна при клике на изображение
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'block';
        modalImg.src = event.target.src; // Устанавливаем изображение в модальное окно
    }
});

// Закрытие модального окна при клике на крестик
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне изображения
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Получаем элементы
const monthSelect = document.getElementById('month'); // Селектор выбора месяца
const posters = document.querySelectorAll('.card'); // Все карточки

// Обработчик изменения месяца
monthSelect.addEventListener('change', () => {
    const selectedMonth = monthSelect.value.trim().toLowerCase(); // Выбранный месяц в нижнем регистре

    if (selectedMonth === 'все') {
        // Если выбран "Сброс", показываем все карточки
        posters.forEach((card) => card.classList.remove('hidden'));
    } else {
        // Иначе фильтруем карточки
        posters.forEach((card) => {
            const cardMonths = card.getAttribute('data-month'); // Получаем значение атрибута data-month
            if (cardMonths.toLowerCase().includes(selectedMonth)) {
                card.classList.remove('hidden'); // Показываем карточку
            } else {
                card.classList.add('hidden'); // Скрываем карточку
            }
        });
    }
});

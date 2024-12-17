// Переключение текста и класса
function toggleText(element) {
    element.classList.toggle("active");
}

// Рассчёт ИМТ
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; // конвертируем в метры

    if (weight && height) {
        const bmi = weight / (height * height);
        document.getElementById("result").innerText = "Ваш ИМТ: " + bmi.toFixed(2);
    } else {
        document.getElementById("result").innerText = "Пожалуйста, введите вес и рост";
    }
}

// Слайдшоу
let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = (slideIndex % slides.length) + 1; // Цикличность
    slides[slideIndex - 1].style.display = "block";

    clearTimeout(slideTimer);
    slideTimer = setTimeout(showSlides, 5000); // Менять слайд каждые 5 секунд
}

// Управление слайдами вручную
function plusSlides(n) {
    clearTimeout(slideTimer); // Сбрасываем автоматический таймер
    slideIndex += n;
    showSlidesManual();
}

function showSlidesManual() {
    const slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (!themeToggleButton) return; // Проверка на существование кнопки

    const body = document.body;
    const nav = document.querySelector('nav'); // Получаем элемент навигации

    // Устанавливаем тему из localStorage
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    body.classList.add(savedTheme);
    if (nav) {
        nav.classList.add(savedTheme); // Добавляем класс на навигацию
    }
    themeToggleButton.textContent = savedTheme === 'light-theme' ? 'Тёмный режим' : 'Светлый режим';

    // Переключение темы
    themeToggleButton.addEventListener('click', () => {
        const isLight = body.classList.contains('light-theme');
        
        // Переключаем классы для body и nav
        body.classList.remove(isLight ? 'light-theme' : 'dark-theme');
        body.classList.add(isLight ? 'dark-theme' : 'light-theme');
        
        if (nav) {
            nav.classList.remove(isLight ? 'light-theme' : 'dark-theme');
            nav.classList.add(isLight ? 'dark-theme' : 'light-theme');
        }

        // Обновляем текст на кнопке
        themeToggleButton.textContent = isLight ? 'Светлый режим' : 'Тёмный режим';
        
        // Сохраняем текущую тему в localStorage
        localStorage.setItem('theme', isLight ? 'dark-theme' : 'light-theme');
    });
});



    



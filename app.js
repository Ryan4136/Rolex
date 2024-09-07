let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function goNext() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goPrev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const aboutText = document.querySelector('#about .about-text p').textContent.toLowerCase();
    const historyText = document.querySelector('#history .history-text p').textContent.toLowerCase();

    // Clear previous highlights
    resetHighlights('#about .about-text p');
    resetHighlights('#history .history-text p');

    // Search in About section
    if (aboutText.includes(query)) {
        highlightText('#about .about-text p', query);
    }

    // Search in History section
    if (historyText.includes(query)) {
        highlightText('#history .history-text p', query);
    }
});

function highlightText(selector, query) {
    const element = document.querySelector(selector);
    const text = element.textContent;
    const regex = new RegExp(`(${query})`, 'gi');
    const newText = text.replace(regex, `<span class="highlight">$1</span>`);
    element.innerHTML = newText;
}

function resetHighlights(selector) {
    const element = document.querySelector(selector);
    const text = element.textContent;
    element.innerHTML = text;
}
document.querySelector('.dropdown').addEventListener('click', function() {
    const dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});


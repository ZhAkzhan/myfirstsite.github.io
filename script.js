let currentChapter = 1;
const totalChapters = 3;

// Переход к главе
function goToChapter(num) {
    if (num >= 1 && num <= totalChapters) {
        currentChapter = num;
        updateChapters();
    }
}

// Следующая глава
function nextChapter() {
    if (currentChapter < totalChapters) {
        currentChapter++;
        updateChapters();
    }
}

// Предыдущая глава
function prevChapter() {
    if (currentChapter > 1) {
        currentChapter--;
        updateChapters();
    }
}

// Обновление глав
function updateChapters() {
    document.querySelectorAll(".chapter").forEach((chapter, index) => {
        chapter.classList.remove("active");
        if (index + 1 === currentChapter) {
            chapter.classList.add("active");
        }
    });
}

// Запуск при загрузке
document.addEventListener("DOMContentLoaded", () => {
    updateChapters();
});

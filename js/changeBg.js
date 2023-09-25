// Находим элемент с классом "subject" и "hover-target"
const subjectNavElement = document.querySelector(".subject.hover-target");
const designtNavElement = document.querySelector(".other.hover-target");
const heroSection = document.querySelector(".hero-section");

// Добавляем обработчик события при наведении на <span>
subjectNavElement.addEventListener("mouseover", () => {
  // Добавляем класс "subject" к .hero-section
  heroSection.classList.add("subject");
});

// Добавляем обработчик события при уходе с <span>
subjectNavElement.addEventListener("mouseout", () => {
  // Убираем класс "subject" из .hero-section
  heroSection.classList.remove("subject");
});

// Добавляем обработчик события при наведении на <span>
designtNavElement.addEventListener("mouseover", () => {
  // Добавляем класс "subject" к .hero-section
  heroSection.classList.add("design");
});

// Добавляем обработчик события при уходе с <span>
designtNavElement.addEventListener("mouseout", () => {
  // Убираем класс "subject" из .hero-section
  heroSection.classList.remove("design");
});

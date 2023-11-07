//переброс на контакты по url
const urlVk = document
  .getElementById("vk")
  .addEventListener("click", function () {
    window.open("https://vk.com/lilbrokenheart21");
  });

const urlGitHub = document
  .getElementById("gh")
  .addEventListener("click", function () {
    window.open("https://github.com/MaxRattle");
  });

const urlMail = document
  .getElementById("mail")
  .addEventListener("click", function () {
    alert("Моя почта max_123_99@mail.ru");
  });

//
//
//
//неудачно. либо я устал, либо просто не понимаю, при теге button работает (но только один раз) при первом запуске,
//далее кнопка не работает, и больше нет селекта
// const aboutBtn = document.getElementById("about-btn");
// const aboutSelect = document.getElementById("about-select");
// aboutBtn.addEventListener("click", () => {
//   const range = document.createRange();
//   range.selectNode(aboutSelect);
//   window.getSelection().addRange(range);
// });

//кнопка readme. относительно долго искал ответ, как подключить текстовый файл
const readMeButton = document
  .getElementById("readme-btn")
  .addEventListener("click", () => {
    fetch("text.txt")
      .then((response) => response.text())
      .then((text) => {
        alert(text);
      });
  });

let main_line = document.querySelector('.line1')
let input = document.querySelector('input')
let text = main_line.textContent
main_line.textContent = ""
let i = 0

let rect = document.querySelectorAll('.rect')
let open = document.querySelector(".open")

function typeWriter() {
  if (i < text.length) {
    main_line.textContent += text.charAt(i)
    i++
    setTimeout(typeWriter, 130);
  }

}
typeWriter()

rect.forEach(div => {
  div.addEventListener('click', () => {
    div.classList.toggle('open');

  });
});


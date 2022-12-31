const circles = document.querySelectorAll('.circle');

let top = "dot1"
const num = circles.length()

circles.forEach(circle => {
  circle.addEventListener('click', function() {
    top = circle.id
  });
});

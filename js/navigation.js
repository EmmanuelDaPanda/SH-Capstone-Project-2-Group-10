const hamburger = document.getElementById('hamburger')
const navGroup = document.getElementById('nav-group')
const navTriangle = document.getElementById('nav-triangle')

hamburger.addEventListener('click', () => {
  console.log('clicked')
  hamburger.classList.toggle('myactive')
  navGroup.classList.toggle('active')
  navTriangle.classList.toggle('active')
})

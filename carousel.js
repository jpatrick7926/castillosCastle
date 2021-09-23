const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const leftArrow = document.querySelector('.carousel-button-left')
const rightArrow = document.querySelector('.carousel-button-right')
const rightArrowStyles = document.querySelector('.right-arrow')
const leftArrowStyles = document.querySelector('.left-arrow')

const slideWidth = slides[0].getBoundingClientRect().width

// Positioning slides helper function
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

rightArrow.addEventListener('click', e => {
  let currentSlide = document.querySelector('.current-slide')
  let nextSlide = currentSlide.nextElementSibling
  const amountToMove = nextSlide.style.left

  track.style.transform = 'translateX(-' + amountToMove + ')'
  currentSlide.classList.remove('current-slide')
  nextSlide.classList.add('current-slide')

})

leftArrow.addEventListener('click', e => {
  let currentSlide = document.querySelector('.current-slide')
  let prevSlide = currentSlide.previousElementSibling
  const amountToMove = prevSlide.style.left

  track.style.transform = 'translateX(-' + amountToMove + ')'
  currentSlide.classList.remove('current-slide')
  prevSlide.classList.add('current-slide')

})

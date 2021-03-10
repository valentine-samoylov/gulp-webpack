var scrollToTopBtn = document.querySelector(".js-scroll-btn")
var rootElement = document.documentElement

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.80) {
    scrollToTopBtn.classList.add("is-shown")
  } else {
    scrollToTopBtn.classList.remove("is-shown")
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

export {
  handleScroll,
  scrollToTop
};

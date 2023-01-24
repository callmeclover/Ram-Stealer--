function crasher() {
  setTimeout(() => {
  window.open("opener.html")
  window.open("opener.html")
  // a really bad idea
  crasher()
}, 2500)
}

function crasherWINDOW() {
  setTimeout(() => {
  window.open("openerWINDOW.html", "_blank", "popup=yes")
  window.open("openerWINDOW.html", "_blank", "popup=yes")
  // a really bad idea
  crasherWINDOW()
}, 2500)
}

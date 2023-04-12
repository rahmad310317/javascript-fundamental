function setTime() {
  const time = document.getElementById('time')
  time.innerHTML = new Date().toString()


}

setInterval(setTime, 1000)
function updateClock() {
  var now = new Date()
  var hr = now.getHours(),mn=now.getMinutes(),sc=now.getSeconds()
  var mer = "AM"
  if(hr>=12){
    hr=(hr-1)%12+1
    mer="PM"
  }
  var time=hr+" : "+mn+" : "+sc+" &nbsp; "+mer
  document.getElementById('time').innerHTML = time
}
setInterval(updateClock, 1000);

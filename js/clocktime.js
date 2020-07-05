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

var i=0;
var k=1000;
function go(){
  i+=1
  if(i==k) window.location.href = "rough.html"

}

setInterval(updateClock, 1000);

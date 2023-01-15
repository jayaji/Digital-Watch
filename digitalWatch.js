let show=document.getElementById('display')
let start_btn=document.getElementById('start')
let set_btn=document.getElementById('set')
let stop_btn=document.getElementById('stop')
let hour=0,min=0,sec=0;
let wantToSet=false;

start_btn.addEventListener('click', count);
function count() {
  wantToSet=confirm("Do you want to set time, otherwise it will start from 00hr:00min:00sec");
  if (wantToSet) {
    setTime();
  }
let intervalFunction=setInterval(function() {
  sec++;
  if (sec==60) {
    sec=0;
    min++;
    if (min==60) {
      min=0;
      hour++;
      if (hour==24) {
        hour=0;
        count();
      }
    }
  }
show.textContent=`${hour}h:${min}m:${sec}s`;

}, 1000);


// IDEA: set time by user input
set_btn.addEventListener('click', setTime)
  function setTime() {
    let hr=prompt("Enter hour:")
    let minute=prompt("Enter minute:")
    let second=prompt("Enter second:")
    hour=hr;
    min=minute;
    sec=second;
  }
  stop_btn.addEventListener('click', function(e) {
    clearInterval(intervalFunction);
    hour=0;min=0;sec=0;
    show.textContent=`${hour}h:${min}m:${sec}s`;
  });

}

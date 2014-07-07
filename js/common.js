function showPage(num) {
  data = data.entries;
  var wrapper = document.querySelector('.wrapper');
  var str = '';
  if(num < 0) num = 0;
  if(num > 26) num = 26;
  for(var i = 100 * num; i < 100 * (num + 1) && i < data.length; i++) {
    str += '<div class="outer"><div class="first">' + data[i].body + '</div><div class="second">' + data[i].title + '</div></div>';
  }
  wrapper.innerHTML = str;
}
window.load = function() {
  showPage(0);
}
function showPage(num) {
  var array = data.entries;
  var wrapper = document.querySelector('.wrapper');
  var str = '';
  if(num < 0) num = 0;
  if(num > 26) num = 26;
  for(var i = 100 * num; i < 100 * (num + 1) && i < array.length; i++) {
    str += '<div class="list-group-item outer"><div class="first"><a href="' + 'http://commandlinefu.cn' + array[i].url + '" target="_blank">' + (i + 1) + '. ' + array[i].title + '</a></div><div class="second bg-danger text-danger">' + array[i].body + '</div></div>';
  }
  wrapper.innerHTML = str;
}
function makeList() {
  var array = data.entries;
  var list = document.querySelector('.pagination');
  var len = parseInt(((array.length - 1 )/ 100) + 1);
  var str = '';
  for(var i = 0; i < len; i++) {
    str += '<li><a id="' + i + '" href="javascript:void(0)">' + (i + 1) + '</a></li>';
  }
  list.innerHTML = str;
  var lis = document.querySelectorAll('.pagination li');
  var anchors = document.querySelectorAll('.pagination a');
  lis[0].classList.add('active');
  for(var i = 0, len = anchors.length; i < len; i++) {
    anchors[i].onclick = function() {
      for(var i = 0, len = lis.length; i < len; i++) {
        lis[i].classList.remove('active');
      }
      this.parentNode.classList.add('active');
      var id = parseInt(this.getAttribute('id'));
      showPage(id);
    }
  }
}
window.onload = function() {
  makeList();
  showPage(0);
}
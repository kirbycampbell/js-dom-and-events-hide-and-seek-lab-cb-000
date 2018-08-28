function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; l = list.length; i < l; i++) {
    let children = list[i].children;
    for (var j = 0; k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

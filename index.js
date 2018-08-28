function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n;
  }
}

function deepestChild(){
  const list = document.querySelectorAll('#grand-node')
  for (var i = 0; i < list.length; i++) {
    return list[i]
  }
}

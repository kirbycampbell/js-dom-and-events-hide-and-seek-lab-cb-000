function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i] = parseInt(list[i]) + n;
    return list[i];
  }
}

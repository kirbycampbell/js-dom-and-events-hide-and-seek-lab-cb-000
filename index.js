function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('ranked-list')
  for (let i = 0; i < list.length; i++) {
    let something = parseInt(list[i]) + 1;
    list[i] = something;
    //return num
  }
}

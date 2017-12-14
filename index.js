function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function deepestChild(){
  const div = document.getElementById('grand-node');
  return div.querySelectorAll('div')[div.querySelectorAll('div').length -1]
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');
  for(const li of lis){
    li.innerHTML = String(parseInt(li.innerHTML) +n)
  }
}

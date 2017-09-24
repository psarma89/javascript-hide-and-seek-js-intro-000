function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML)+n).toString()
  }
}

function deepestChild(){
  var deepestNode = document.querySelector('#grand-node')
  while (deepestNode.childNodes) {
    deepestNode = deepestNode.childNodes[0]
  }
  return deepestNode
}

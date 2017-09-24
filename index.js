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
  var node = document.querySelectorAll('#grand-node')

  while (node.children) {
    node = node.children
  }
  return node
}

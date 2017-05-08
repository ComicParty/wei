function sum(a, b) {
  return a + b;
}

function onClickAdd() {
  let ivalue1 = parseInt(input[0].value);
  let ivalue2 = parseInt(input[1].value);

  let resultValue = sum(ivalue1, ivalue2);

  result[0].innerHTML = resultValue;
}

let input = document.getElementsByTagName('input');


var result = document.getElementsByTagName('span');

let button1 = document.getElementsByTagName('button');
button1[0].addEventListener('click', onClickAdd, false);
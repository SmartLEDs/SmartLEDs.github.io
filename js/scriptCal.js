let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');
let div1 = document.querySelector('.out1');
let div2 = document.querySelector('.out2');
let div3 = document.querySelector('.out3');

function roundToMultiple(num, multiple) {
	return Math.round(num/multiple) * multiple;
}

button.onclick = function () {
	let b = +inputIn.value;
	div.innerHTML = "Количество метров: " + Math.round(b*(5/300)*100)/100 + " метра(ов)";
	div1.innerHTML = "Подсветка + гирлянда: " + roundToMultiple((b * (1000/300) + 1250),10); //Math.ceil()
	div2.innerHTML = "Цветомузыка + гирлянда: " + roundToMultiple((b * (1000/300) + 1250 * 1.53),10);
	div3.innerHTML = "Гирлянда на елку: " + roundToMultiple((b * (1000/300) + 999),10);
	inputIn.value = '';
}

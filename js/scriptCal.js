let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');
let div1 = document.querySelector('.out1');
let div2 = document.querySelector('.out2');
let div3 = document.querySelector('.out3');

button.onclick = function () {
	let b = +inputIn.value;
	div.innerHTML = "Количество метров: " + Math.round(b*(5/300)*100)/100 + " метра(ов)";
	div1.innerHTML = "Подсветка + гирлянда: " + Math.ceil(b * (1000/300) + 1491);
	div2.innerHTML = "Цветомузыка + гирлянда: " + Math.ceil(b * (1000/300) + 1491 * 1.53);
	div3.innerHTML = "Гирлянда на елку: " + Math.ceil(b * (1000/300) + 1285);
	inputIn.value = '';
}

var a = prompt('Podaj pierwszą wartość'),
	b = prompt('Podaj drugą wartość'),
	value = (a*a) + (2 * a * b) - (b * b);

console.log(value);
document.write('Podałeś pierwszą wartość: ' + a);
document.write('<br >');
document.write('Podałeś drugą wartość: ' + b);
document.write('<br >');

if (value > 0) {
	console.log('Wartość value jest większa od 0');
	document.write('Wynik działania (a*a) + (2 * a * b) - (b * b) jest większy od zera i wynosi: ' + value);
} else {
	console.log('Wartość value jest mniejsza od 0');
	document.write('Wynik działania (a*a) + (2 * a * b) - (b * b) jest mniejszy od zera i wynosi: ' + value);
}

var a = prompt('Podaj podstawę trójkąta'),
    h, triangleArea;

if (a > 0) {
	h = prompt('Podaj wysokość trójkąta');
	
	if (h > 0) { 
		triangleArea = a*h/2;

		document.write('Podałeś podstwę trójkąta: ' + a);
		document.write('<br >');
		document.write('Podałeś wysokość trójkąta: ' + h);
		document.write('<br >');
		document.write('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
	
		console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
	} else {
		document.write('Podałeś podstwę trójkąta: ' + a);
		document.write('<br >');
		document.write('Wysokość musi być liczbą dodatnią');
		console.log('Podałeś: ' + h +'Podana liczba musi być dodatnia!!');
	}
} else {
	document.write('podaj liczbę dodatnią podstawy');
	console.log('Podałeś: ' + a +'Podana liczba musi być dodatnia!!');
}

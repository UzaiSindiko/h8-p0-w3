function groupAnimals(animals) {
	// mencari nilai charCodeAt TERBESAR dari array yang diberikan
	var max = 0;
	for (var i = 0; i < animals.length; i++) {
		if (animals[i].charCodeAt() > max) {
			max = animals[i].charCodeAt();
		}
	}
	// mencari nilai charCodeAt TERKECIL dari array yang diberikan
	var min = max;
	for (var j = 0; j < animals.length; j++) {
		if (animals[j].charCodeAt() < min) {
			min = animals[j].charCodeAt();
		}
	}
	var temp = [];
	var result = [];
	for (var k = min; k <= max; k++) {
		temp = [];
		for (var l = 0; l < animals.length; l++) {
			if (animals[l].charCodeAt() === k) {
				temp.push(animals[l]);
			}
		}
		if (temp.length !== 0) {
			result.push(temp);
		}
	}
	console.log(result);
}

// TEST CASES
console.log(groupAnimals([ 'cacing', 'ayam', 'kuda', 'anoa', 'kancil' ]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals([ 'cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

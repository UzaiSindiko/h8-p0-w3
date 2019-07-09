//  exercise 1 splice

var bio = [
	'0001',
	'Roman Alamsyah',
	'Bandar Lampung',
	'21/05/1989',
	'Membaca'
];

function dataHandling2(bio) {
	bio.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
	bio.splice(4, 2, 'Pria', 'SMA Internasional Metro');
}

dataHandling2(bio);
console.log(bio);

//  exercise 2 split

var splitResult = bio[3].split('/');
var month = Number(splitResult[1]);

switch (month) {
	case 1:
		month = 'Januari';
		break;
	case 2:
		month = 'Februari';
		break;
	case 3:
		month = 'Maret';
		break;
	case 4:
		month = 'April';
		break;
	case 5:
		month = 'Mei';
		break;
	case 6:
		month = 'Juni';
		break;
	case 7:
		month = 'Juli';
		break;
	case 8:
		month = 'Agustus';
		break;
	case 9:
		month = 'September';
		break;
	case 10:
		month = 'Oktober';
		break;
	case 11:
		month = 'November';
		break;
	case 12:
		month = 'Desember';
		break;
}

console.log(month);

//  exercise 3 sort

var arrySorting = splitResult.sort(function(a, b) {
	return b - a;
});
console.log(arrySorting);

//  exercise 4 join
splitResult = bio[3].split('/');
var joinResult = splitResult.join('-');
console.log(joinResult);

//  exercise 5 slice

var name = bio[1];
var sliceResult = name.slice(0, 15);
console.log(sliceResult);

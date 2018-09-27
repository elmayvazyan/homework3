const first = function (a, b, c) {
	return (a*b+c);
};
const runFirst = first (4, 5, 8);

console.log (runFirst);






const second = function () {
	return (5);
};
const runSecond = second;

console.log (runSecond());






const third = function (cityName, countryName) {
console.log (cityName + ' ' + countryName)
};






const fourth = function (firstName, middleName, lastName) {
	if (firstName.lenght > middleName.lenght && firstName.lenght > lastName.lenght){
			return firstName;
		} else if (middleName.lenght > lastName.lenght) {
			return middleName;
		} else {return lastName}
};

const runFourth = fourth ('Elmira', 'Andranik', 'Ayvazyan');

console.log (runFourth);





const fifth = function (numberOne, numberTwo) {
	if (numberOne === numberTwo) {
		return ('0');
	} else if (numberOne > numberTwo) {
		return ('1');
	} else if (numberOne < numberTwo){
		return ('-1');
	};
}
const runFifth = fifth (987, 98752)
console.log (runFifth)







const sixth = function (x, y) {
	return (x*y)
};

const runSixth = sixth (5, 2);
console.log (runSixth);







const seventh = function (barev, hajox) {
	return barev/hajox
};

const runSeventh = seventh (20, 10);
console.log (runSeventh);







const triangleArea = function (base, height) {
	const a = sixth(base,height)
	const b = seventh(a,2)
	return b;
};

const runTriangleArea = triangleArea(5, 8);
console.log (runTriangleArea);




const numLength = function (number) {
	return (number.length)
};

const runNumLenght = numLength ('8463568')
console.log (runNumLenght)





const tenth = function (string1, string2, number1) {
	if ((string1 + string2).length > number1.length) {
		return ('1')
	} else {
		return ('-1')
	};
};

const runTenth = tenth ('hi', 'there', '25987')
console.log (runTenth)




const eleventh = function (stringA, stringB, numberA) {
	if ((stringA + stringB).length < numberA.length) {
		return ('1')
	} else {
		return ('-1')
	};
};

const runEleventh = eleventh ('abrakadabra','dabrakaabra', '123456789987456123000')
console.log (runEleventh)



const runStuff= function (base, height, oneString){
	if (oneString === 'rectangle') {
		return (base*height)
	} else if (oneString === 'triangle') {
		return (triangleArea(base,height))
	} else {
		return ('-1')
	}
};

const runRunStuff = runStuff (5, 2, 'triangle')
console.log (runRunStuff)


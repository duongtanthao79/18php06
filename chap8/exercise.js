
function higherOrder() {
	var array = [] 
	var number = "135749477999"
	var numberLength = number.length
	for (var i = 0; i < numberLength; i++) {
		array.push(parseInt(number)%10)
		number = number.slice(0, number.length - 1)
	}

	//so tang dan
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				var temp = array[i]
				array[i] = array[j]
				array[j] = temp
			}
		}
	}
	console.log(array)

	// so giam dan
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] < array[j]) {
				var temp = array[i]
				array[i] = array[j]
				array[j] = temp
			}
		}
	}
	console.log(array)

	//ki tu nao lap lai nhieu nhat trong chuoi
	var count = 0
	var highestDuplicateIndex = 0
	for (var i = 0; i < array.length - 1; i++) {
		var tempCount = 1
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] == array[j]) {
				tempCount += 1
			} 
		}
		if (tempCount > count) {
			count = tempCount
			highestDuplicateIndex = i
		}
	}
	console.log(array[highestDuplicateIndex] + " lap lai " + count + " lan")	
}

function higherTextOrder() {
	var array = [] 
	var number = "abgtcwaswalrkjnadwkcnajksw"
	var numberLength = number.length
	for (var i = 0; i < numberLength; i++) {
		array.push(number.charAt(i))
	}

	//tang dan theo ki tu alphabet
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				var temp = array[i]
				array[i] = array[j]
				array[j] = temp
			}
		}
	}
	console.log(array)
	

	//gian dan theo ki tu alphabet
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] < array[j]) {
				var temp = array[i]
				array[i] = array[j]
				array[j] = temp
			}
		}
	}
	console.log(array)

	var count = 0
	var highestDuplicateIndex = 0
	for (var i = 0; i < array.length - 1; i++) {
		var tempCount = 1
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] == array[j]) {
				tempCount += 1
			} 
		}
		if (tempCount > count) {
			count = tempCount
			highestDuplicateIndex = i
		}
	}
	console.log(array[highestDuplicateIndex] + " lap lai " + count + " lan")	
}
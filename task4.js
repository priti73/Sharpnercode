    /*const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
	const { key1, key3}  = {...obj1};
	console.log(key1, key3) //1 1000*/

//we can destract value using other name in array because it uses index for desructing array
    const arr1 = ['value1', 'value2']
	let [ val1,val2,val3] = arr1
    val1='kll';
	//console.log(val3)  //undefined
	//console.log(val2) //value2
    console.log(val1); //kll
    console.log(arr1);// ['value1', 'value2']


    const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
	let { key1, key3}  = obj1
	key1 = 20;
	key3 = 123
	console.log(key1, key3)  // 20 23 these value are storing in key1 and key3 varibles and extracting from obj1
    console.log(obj1.key1, obj1.key3) // 1  1000  
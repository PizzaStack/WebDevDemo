// var x = [5];

// function insertIntoArray(arr){
//     y = 6;
//     let newArr = arr.slice();
//     newArr.push(y);
//     return newArr;
// }
// console.log(insertIntoArray(x));

// console.log(x);

let arr = ['item1', 'item2', 'item3']
let arrMap = arr.map((element, index) => element = 'x' + (index+1));
function replaceWithX(array) {
    for(x = 0; x < array.length; x++) {
        array[x] = 'x' + (x+1);
    }
    return array;
}

let arr2 = [1, 2, 3, 4, 5]
console.log(arr2.filter(x => (x > 4) || (x == 1)));

console.log(arr2.reduce((x, y) => x += y));
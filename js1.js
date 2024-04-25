/*zad1
const tab = [1,2,3,4];
console.log(tab);
console.log(tab[0]);
console.log(tab[2]);
*/

/*zad2
const tab = [1,2];
tab.push(3);
console.log(tab);
tab.shift();
console.log(tab);
tab.pop();
console.log(tab);
tab.unshift(1);
console.log(tab);
*/

/*zad3
let brokenArray = [1, 2, 5, 8];
brokenArray.unshift(0);
brokenArray.splice(3, 0, 3);
brokenArray.splice(4, 0, 4);
brokenArray.splice(6, 0, 6);
brokenArray.splice(7, 0, 7);
brokenArray.push(9);
brokenArray.reverse();
console.log(brokenArray.join('-'));
*/

/*zad4
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3);
const left = arr3.slice(0,4);
console.log(left);
const right = arr3.slice(4);
console.log(right);
*/

/*zad5
const student = {
  name: '',
  surname: '',
  age: null,
  male: true,
  female: true,
};

student.name = 'Witold';
student.surname = 'Cynk';
student.age = 17;
delete student.female;
const student2 = Object.assign({}, student);
student2.age = 18;
console.log(student, student2);
*/

/*za6
const oldArray = [1, 2, 3, 4, 5];
const newArray = Object.assign([], oldArray);
newArray.shift();
newArray.push(6);
console.log(newArray);
console.log(oldArray);
*/

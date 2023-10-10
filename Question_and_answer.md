1. Write the ``` correct answer ``` from the following options and give an explanation (2-5 lines).
```
let greeting;
greetign = {};
console.log(greetign);
```
- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

**Answer: A-{}**
**Explanation:** we assigned a empty object{} to variable named greetign without declaring any value. That's why js declared var automaticly.

2. Write the ``` correct answer ``` from the following options and give an explanation (2-5 lines).
```
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

**Answer: C-12**
**Explanation:** In javascript, if we try to sum a number and a string it will sit side by side. that's why sum of a + b is string "12".

3. Write the ``` correct answer ``` from the following options and give an explanation (2-5 lines).
```
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```
- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

**Answer: A-['🍕', '🍫', '🥑', '🍔']**
**Explanation:** Tirst we create a food array with 4 emoji string. Then we create an info object with a property named favouriteFood and set first item of food array. then set the object property value to an another emoji. Then console food array and get the array of 4 emoji. because info object not affected food array.

4. Write the ``` correct answer ``` from the following options and give an explanation (2-5 lines).
```
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```
- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

**Answer: B-Hi there, undefined**
**Explanation:** we created a function with name parameter and return `Hi there, ${name}`. Then call the functino inside console.log. but not provide argument when call the function. that's why output of name is undefined.

5. Write the ``` correct answer ``` from the following options and give an explanation (2-5 lines).
```
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```
- A: `1`
- B: `2`
- C: `3`
- D: `4`

**Answer: C-3**
**Explanation:** first of all we set the value of count = 0. then we loop through the nums array which contains 4 number. and inside loop we check the truthy value of nums array and add 1 to the count value. because nums array has 4 number, loop has run 4 time but truthy condition mathes 3 time because of fisrt array element is 0 and 0 is a falsy value. that's why answer is 3.
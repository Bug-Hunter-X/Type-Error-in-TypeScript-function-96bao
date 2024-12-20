function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Error: Arguments must be numbers");
    return 0; // or throw an error
  }
}

let result1 = add(5, 3); // Correct: 8
let result2 = addSafe(5, "hello"); //Safe: Error message, result is 0
let result3 = addSafe(5,3); //Safe: result is 8
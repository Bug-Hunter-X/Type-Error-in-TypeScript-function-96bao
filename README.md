# Type Error in TypeScript Function
This example demonstrates a common type error in TypeScript that occurs when a function is called with arguments of the wrong type.  The TypeScript compiler helps catch this error before runtime.

## Bug
The function `add` is defined to take two number arguments and return a number. However, it's called with a string and a number, leading to a type error. 

## Solution
The solution involves ensuring that the arguments passed to the function are of the correct type. This can be done through type checking or by using type guards.
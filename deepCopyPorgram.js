//here DeepCopy is the cloning of original object and cloned object will only copy the original object values but not 
//their memory reference

//to avoid shallow copy we can use following methods
// 1. using spreadOperator
// 2. using JSON.parse and JSON.stringify
// 3. using Object.assign 
let original={
    "a":10,
    "b":20
}
let duplicate=JSON.parse(JSON.stringify(original));
duplicate.a=30;
console.log(original);
console.log(duplicate);

// before deepcopy
// { a: 10, b: 20 }
// { a: 10, b: 20 }

// after deepcopy
// { a: 10, b: 20 }
// { a: 30, b: 20 }

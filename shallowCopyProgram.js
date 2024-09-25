//shallow copy is the copying of original object into the cloned object and cloned and original share the same memory referece and properties.
// in shallowCopy the cloned object will copy the values and memory reference of the original object
let org={
    "a":10,
    "b":20
}
let dup=org;
dup.a=20;
console.log(org);
console.log(dup);

//before updating the dup object
//output:
//{ a: 10, b: 20 }
//{ a: 10, b: 20 }

// after updating the dup Object
// output:
// { a: 20, b: 20 }
// { a: 20, b: 20 }


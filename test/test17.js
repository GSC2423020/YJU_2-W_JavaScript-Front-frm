print = console.log;

let myList1 = [100]; // Dense array
let myList2 = [10];  // Dense array

myList1[7] = 400;    // Sparse array

for ( let i = 0; i < myList2.length; i++) {
    print(myList2[i]);
}

for ( let i = 0; i < myList1.length; i++) {
    print(myList1[i]);
}

print(myList1.length === Object.keys(myList1).length);
print(myList2.length === Object.keys(myList2).length);

print(`myList1: ${myList1}, length: ${myList1.length}`);
print(`myList2: ${myList2}, length: ${myList2.length}`);

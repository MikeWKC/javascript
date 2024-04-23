// Using var
var a = 5;
console.log("Value of a (var):", a); // Output: 5
{
    var a = 10; // var variables can be re-declared and updated within the same scope
    console.log("Updated value of a (var):", a); // Output: 10
}
console.log("Value of a outside block (var):", a); // Output: 10

// Using let
let b = 15;
console.log("Value of b (let):", b); // Output: 15
{
    let b = 20; // let variables are block-scoped
    console.log("Value of b inside block (let):", b); // Output: 20
}
console.log("Value of b outside block (let):", b); // Output: 15

// Using const
const c = 25;
console.log("Value of c (const):", c); // Output: 25
{
    // c = 30; // This will cause an error since const variables cannot be reassigned
    const c = 30; // This is allowed since it's a new variable with the same name in a different scope
    console.log("Value of c inside block (const):", c); // Output: 30
}
console.log("Value of c outside block (const):", c); // Output: 25

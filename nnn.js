function myFunction(){
    document.getElementById("demo1").innerHTML
    = "Hello Dolly!";
    document.getElementById("demo2")
    .innerHTML = "How are you?!";
}
//You cannot redeclare with let.  But this is possible with var. Let and const allows
// a block scope. Variables declared inside a {} block cannot be accessed from outside the block.
//You can't use let inside a curly bracket. But var is commonly used.
//redeclaring a variable inside a box will not redeclare it outside the box/
/* let x=10; Here x is 10
{
    let x = 2;
    Here x is 2
}
// Here x is 10

Difference between var, let and const. var scopes, redeclares, reassigns, hoisted and binds
let scopes, doesn't redeclare, reassigns, it doesn't hoist, it doesn't binds.
const scopes, it doesn't redecalre, it doesn't reassign, it doesn't hoiset, and it doesn't bind.
*/



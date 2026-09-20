const reverseString = function(str) {

let reverse="";
for(let i=str.length-1;i>=0;i--)
{
    let ch=str.charAt(i);
    reverse+=ch;
}
return reverse;

};

// Do not edit below this line
module.exports = reverseString;

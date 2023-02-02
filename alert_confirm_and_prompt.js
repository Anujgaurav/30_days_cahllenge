//  alert show the msg 
// prompt show the msg input text , it returns the tex on o or ,if cancel button or esc is clicked ,null .
// confirm show the msg with ok and cancel .
alert("welcom");

let age=prompt(`enter your age here`,20);
if(age!=null){
    document.write(`age is ${age}` );
}
else{
    document.write(`age is not field`);
}

let response=confirm(`are you sure, your age is 18+`);
if(response){
    document.write(`Deleted`);
}
else{
    document.write('NOt deleted');
}
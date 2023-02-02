//for,dowhile,while;
// while


let counter = 0;
while(counter<=10){
    console.log("anuj gaurav");
    counter++;
}
console.log('do while yha se start hai ');
// do while 
let z=1;
do{
    console.log('anujgaurav');
    z++;
}
while(z<=10);

// for loop 

let m=10;
for(let i=0; i<=m;i++){
    console.log('good moring ');
}

for(let i=1;i<=10;i++){
    document.write(i);
    document.write('<br>');

}
//break and continue 
for(let i=1;i<=10;i++){
if(i==5){
    break;
}


    document.write(i);
    document.write('<br>');

}
//continue loop ye bs wo chord dega jo eleent aap lena nahi chahate 
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    
    
        document.write(i);
        document.write('<br>');
    
    }
    // nested loop 
    for(let i=1;i<=10;i++){
      document.write(i);
      document.write('<br>');
      for(let m=0;m<3;m++){
        document.write('anu');
        document.write('<br>');
      }
        }
        
        
            document.write(i);
            document.write('<br>');
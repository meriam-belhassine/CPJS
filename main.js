/* console.log("it's just the begining")


var mystring="HELLO";
var secondstring="world";
// alert(mystring.toLowerCase());
// alert(secondstring.toUpperCase());

console.log("test")

function sum (a,b){
    if( ((a+b)%2) ==0) {  
         for(var i = 0 ; i <3;i++){
             console.log(i)
         }  }
    else if( ((a+b) % 2 ) ==  1)   {console.log('a+b rest 1 ')}
    else {console.log('a+b odd')}
}
sum(2,3)
sum(2,2)
// function myFUNCTION (p1,p2){
//     return p1* p2;
// }
// myFUNCTION(3600, 2)

function nextEdge(côté1,côté2){
    return ((côté1+côté2)-1)
}
nextEdge(8, 10)



function findSmallestNum(arr){
var arr[a,b,c,d]

} */


function Bold(){

  
    if ( document.getElementById("texto").style.fontWeight  == "bold") {
          document.getElementById("texto").style.fontWeight  = 'normal'
    }
    else {
        document.getElementById("texto").style.fontWeight  = "bold" ;
    }
}

function italics(){

  
    if ( document.getElementById("texto").style.fontStyle  == "italic") {
          document.getElementById("texto").style.fontStyle  = 'normal'
    }
    else {
        document.getElementById("texto").style.fontStyle  = "italic" ;
    }
}


function underline(){

  
    if ( document.getElementById("texto").style.textDecoration  == "underline") {
          document.getElementById("texto").style.textDecoration  = 'none'
    }
    else {
        document.getElementById("texto").style.textDecoration  = "underline" ;
    }
}

function sizetext()   {
    if(document.getElementById("fontSizeDD").value == "20px")
    {
        document.getElementById("texto").style.fontSize  = '20px';

    }
    else if(document.getElementById("fontSizeDD").value == "30px")
    {
        document.getElementById("texto").style.fontSize  = '30px';

    }
    else if(document.getElementById("fontSizeDD").value == "40px")
    {
        document.getElementById("texto").style.fontSize  = '40px';

    }
}

function sizetype()   {
    if(document.getElementById("fonttype").value == "Arial")
    {
        document.getElementById("texto").style.fontFamily  = 'Arial';

    }
    else if(document.getElementById("fonttype").value == "Geneva")
    {
        document.getElementById("texto").style.fontFamily  = 'Geneva';

    }
    else if(document.getElementById("fonttype").value == "Verdena")
    {
        document.getElementById("texto").style.fontFamily  = 'Verdena';

    }
}




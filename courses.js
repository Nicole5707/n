function changeWeight(){
    var getText=document.getElementById("Text-place");
    if(getText.style.fontWeight=="normal"){
        getText.style.fontWeight="bold";

    } 
    else{

        getText.style.fontWeight="normal";  
          
    }
}
function changeita(){
    var getText=document.getElementById("Text-place");
    if(getText.style.fontStyle=="normal"){
        getText.style.fontStyle="italic";

    } 
    else{

        getText.style.fontStyle="normal";  
          
    }
}
function underline(){
    var getText=document.getElementById("Text-place")
    if(getText.style.textDecoration=="none"){
        getText.style.textDecoration="underline";
    }
    else{
        getText.style.textDecoration="none";
    }
}
function changeSize(size){
    var getText=document.getElementById("Text-place");
    if(size=="a"){
        getText.style.fontSize="20px";

    } 
    else if(size=="b"){
        getText.style.fontSize="40px";
    }
    else if(size=="c"){
        getText.style.fontSize="72px";
    }
    else{

        getText.style.fontSize="";  
          
    }
}
function changefamily(family){
    var getText=document.getElementById("Text-place");
    if(family=="d"){
        getText.style.fontFamily="arial";
    }
    else if(family=="e"){
        getText.style.fontFamily="Lucida Sans";

    }
    else if(family=="f"){
        getText.style.fontFamily="Verdana"
    }
    else{
        getText.style.fontFamily=""
    }
}

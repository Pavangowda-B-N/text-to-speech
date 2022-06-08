function s(){
    
    x=document.querySelector("textarea").value
    if(x!=""){
        let utternance=new SpeechSynthesisUtterance(x);
        speechSynthesis.speak(utternance);
       
        
    }
    else{
        alert("please Enter text")
    }
    
}


function s(){
    
    x=document.querySelector("textarea").value
    if(x!=""){
        let utternance=new SpeechSynthesisUtterance(x);
        speechSynthesis.speak(utternance);
        btn=document.querySelector("button");
        btn.innerHTML="speaking........";
        
    }
    else{
        alert("please Enter text")
    }
    
}


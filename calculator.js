flag=true
function calculate(key)
{
    let text;
    const synth = window.speechSynthesis;
    if(key!='AC' && key!='=' && key!='bracket'){
        text=new SpeechSynthesisUtterance(key);
        document.getElementById('result').value += key
    }
    else if(key=='='){
        document.getElementById('result').value=eval(document.getElementById('result').value)
        text = new SpeechSynthesisUtterance(document.getElementById('result').value);
    }
    else if(key=='bracket'){
        if(flag)
        {
        document.getElementById('result').value+="("
         flag=false
        }
        else{
            document.getElementById('result').value+=")"
            flag=true
        }
    }
        else{
            document.getElementById('result').value=""
        }
        synth.speak(text)
    }

let display = document.getElementById("kijelzo")

function clicked(element, key){
    key = key || element.innerText;
    if (key.toUpperCase() === "C"){
        display.value = "0";
        return;
    }
    if (key === "←"){
        let value = display.value.slice(0, -1);
        if(!value.length) value = "0";
        display.value = value;
        return;
    }
    if (key === "Enter"){
        try{
            let value = Function(`'use strict';return (${display.value})`)();
            display.value = value;
        } catch(e){
            console.log("Hiba")
        }

        return;
    }

    let isNumber = "0123456789".includes(key);

    if (display.value === "0" && isNumber){
        display.value = key;
        return;
    }
    
    display.value += key;
}

// Keyboard event
document.addEventListener("keyup", event => {

    if(event.keyCode === 8 ||
        event.keyCode === 13 ||
        "0123456789Cc/*-+.".includes(event.key)){
        if(event.keyCode === 8)
            clicked(null, "←")
        else if(event.keyCode === 13)
            clicked(null, "Enter")
        else clicked(null, event.key)
    }
});
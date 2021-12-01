function shout(string){
/*ERROR: Expected undefined to equal [something] that means the test is looking for a return value */
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());   
}

function logWhisper(string) {
    console.log(string.toLowerCase());
    
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!"
    }
    else if  (string.toUpperCase() === string) {
        return "YES INDEED!"
    }
    if (string === string) {
        return "I love you, too."
    }
}
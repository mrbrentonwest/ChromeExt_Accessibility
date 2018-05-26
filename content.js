console.log("Chrome Extension Go!");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    // console.log(message.txt);
    if (message.txt === "Hello Mr. Tab") {
        let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs) {
            elt.style['background-color'] = '#FF00FF';
        } 
    }
}
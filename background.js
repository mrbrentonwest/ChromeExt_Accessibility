console.log('Background JS is Running');

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked (tab) {
    // console.log(" <- Button Clicks") //This would show how many times the button is hit in the console
    // console.log(tab) //Display all the information of the current tab
    let msg = {
        txt: "Hello Mr. Tab"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

const form  = document.querySelector('form')


const enableFields = () => {

    let elements = document.querySelectorAll("[class*='osui-dropdown-search pop-comp-ele vscomp-ele'][disabled]")

    for(let el of elements) {
    el.removeAttribute("disabled")
    }

}



form.addEventListener('submit', async(event) => {
    event.preventDefault()

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    chrome.scripting.executeScript({

        target: {tabId: tab.id},
        function: enableFields

    });



})
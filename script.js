const form  = document.querySelector('form')


const enableFields = () => {

    let elements = document.querySelectorAll("[class*='osui-dropdown-search pop-comp-ele vscomp-ele'][disabled]")
    let adressDestiny = document.querySelector("#b22-b11-b8-DropdownSearch")

    adressDestiny.removeAttribute("disabled");
    adressDestiny.style.pointerEvents="none";
    adressDestiny.style.cursor="default";

    for(let el of elements) {
    el.removeAttribute("disabled");
    el.style.pointerEvents="none";
    el.style.cursor="default";

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
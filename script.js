const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");

const enableFields = () => {
  let elements = document.querySelectorAll(
    "[class*='osui-dropdown-search pop-comp-ele vscomp-ele'][disabled]"
  );

  for (let el of elements) {
    el.removeAttribute("disabled");
    el.style.pointerEvents = "none";
    el.style.cursor = "default";
  }
};

const copyToClipboard = () => {
    let nf = document.querySelector('[for=b24-b15-b8-Input_ElectronicInvoiceKey]').parentNode.querySelector('span > input').getAttribute('value')

    // Cria um elemento de texto temporário para copiar os dados
    const tempElement = document.createElement('textarea');
    tempElement.value = 'test value copy';

    // Adiciona o elemento temporário à página
    document.body.appendChild(tempElement);

    // Seleciona e copia o conteúdo do elemento temporário
    tempElement.focus();
    tempElement.select();
    document.execCommand('copy');

    // Remove o elemento temporário da página
    document.body.removeChild(tempElement);
};

form1.addEventListener("submit", async (event) => {
  event.preventDefault();

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: enableFields,
  });
});

form2.addEventListener("submit", async (event) => {
  event.preventDefault();

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyToClipboard,
  });
});

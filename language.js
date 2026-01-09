
// language array 
const langs = {
    "TR": {
        "header": "HAKAN KARABALTA",
        "paragraph": "Bu Websitesi şuan yapım aşamasındadır.",
        "btn": "EN",
        "signature": "Designed & Coded Hakan Karabalta"
    },
    "EN": {
        "header": "HAKAN KARABALTA",
        "paragraph": "This website is currently under construction.",
        "btn": "TR",
        "signature": "Designed & Coded Hakan Karabalta"
    }
}


let currentLang = "TR"

const langBtn = document.querySelector('.btn');
// switch button function
langBtn.addEventListener('click', () => {
    currentLang = (currentLang === "TR") ? "EN" : "TR";
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
       const key = el.getAttribute('data-i18n');
       el.innerText = langs[currentLang][key];
    });
});
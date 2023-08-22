let toggleDay = document.querySelector('#toggle');
let toggleRain = document.querySelector('#rain');
let inputDay = toggleDay.querySelector('input');
let inputRain = toggleRain.querySelector('input');


toggleDay.addEventListener('click', toogleB);
toggleRain.addEventListener('click', toogleB);

function toogleB() {
    if (inputDay.checked && (!inputRain.checked)) {
        document.querySelector('html').style.backgroundImage = 'url("./imagens/fotonoite.png")'
    } else if (!inputDay.checked && (!inputRain.checked)) {
        document.querySelector('html').style.backgroundImage = 'url("./imagens/fotodia.png")'
    } else if (inputDay.checked && (inputRain.checked)) {
        document.querySelector('html').style.backgroundImage = 'url("./imagens/melhor-noite.gif")'
    } else if (!inputDay.checked && (inputRain.checked)) {
        document.querySelector('html').style.backgroundImage = 'url("./imagens/melhor.gif")'
    }
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:playlist:37i9dQZF1DWWQRwui0ExPn'
    };
    const callback = (EmbedController) => { };
    IFrameAPI.createController(element, options, callback);
};

// simulamos una BBDD
const emisoras = [
    {
        id: 0,
        nombre: 'Selecciona una emisora',
        url: '',
        param: 'selected'
    },
    {
        id: 1,
        nombre: 'La X',
        url: 'http://stream.eleden.com:8230/lax.aac',
        param: ''
    },
    {
        id: 2,
        nombre: 'La voz de Colombia',
        url: 'https://15723.live.streamtheworld.com/BESAME_MEDELLIN_SC',
        param: ''
    },
    {
        id: 3,
        nombre: 'Olimpica (La Dorada)',
        url: 'https://server2.ejeserver.com:8244/stream',
        param: ''
    },
    {
        id: 4,
        nombre: 'Radioacktiva',
        url: 'https://26503.live.streamtheworld.com/RADIOACKTIVA_MED_SC',
        param: ''
    },
];

const selectEmisoras = document.getElementById('select-emisoras');
const reproductor = document.getElementById('reproductor');
const signal = document.getElementById('signal');
const btnPause = document.getElementById('pause');
const btnPlay = document.getElementById('play');
const ctrlVolume = document.getElementById('volume');

let playing;
let currentVolume;

function llenarEmisoras(){
    let info = ''
    for(const emisora of emisoras){
        info += `
        <option ${emisora.param} value="${emisora.id}">${emisora.nombre}</option>
        `
    }
    selectEmisoras.innerHTML = info;
}

function changeEmisora(evt){
    //console.log(evt.value)
    if(evt.value == 0){
        btnPause.disabled = true;
        btnPlay.disabled = true;
        ctrlVolume.disabled = true;
        playing = false
    }else{
        btnPause.disabled = false;
        btnPlay.disabled = false;
        ctrlVolume.disabled = false;
        playing = true
    }
    reproductor.src = emisoras[evt.value].url;
    reproductor.volume = currentVolume/100;
    changeSignal()
}

function changeSignal(){
    const color = playing ? 'green': 'red';
    signal.style.color = color
}

function play(){
    playing = true;
    reproductor.play();
    reproductor.volume = currentVolume/100;
    changeSignal()
}

function pause(){
    playing = false;
    reproductor.pause();
    changeSignal()
}

function changeVolume(evt){
//console.log(evt.value)
   currentVolume = evt.value;
   reproductor.volume = currentVolume/100;
   changeSignal()
}

function init(){
    currentVolume = 20;
    btnPause.disabled = true;
    btnPlay.disabled = true;
    ctrlVolume.disabled = true;
    playing = false;
    ctrlVolume.value = currentVolume;
    reproductor.volume = currentVolume/100;
    llenarEmisoras();
    changeSignal()
}

(function(){
    init();
})();

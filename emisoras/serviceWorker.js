const iudStereo = "iud-stereo";// nombre del caché
// vector de lo que va a ir en caché
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/script.js",
    "/img/adorno.png"
];

// instalación: agrega el caché
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(iudStereo).then(cache => {
            console.log('open caché...')
            cache.addAll(assets)
        })
    )
});

self.addEventListener('activate', activateEvent => {
    console.log('Activate...')
    activateEvent.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if(key != iudStereo){
                    console.log('borrando caché viejo', key)
                    return caches.delete(key)
                }
            }))
        })
    )
    return self.clients.claim();
})

// fecth: recuperar los datos
self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            console.log('fetch...')
            return res || fetch(fetchEvent.request)
        })
    )
})

if('serviceWorker' in navigator){
   window.addEventListener('load', () => {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log('Registrado...'))
        .catch(e => console.log('No registro el SW', e))
   })
}
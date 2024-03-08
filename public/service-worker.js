
const installEvent = () => {
  self.addEventListener('install', () => {
    console.log('service worker installed');
  });
};
installEvent();

const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('service worker activated');
  });
};
activateEvent();


const cacheName = 'growskills-v1';

const cacheClone = async (e) => {
const res = await fetch(e.request);
const resClone = res.clone();

const cache = await caches.open(cacheName);
await cache.put(e.request, resClone);

return res;
};

const fetchEvent = () => {
try {
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => {
          caches.open(cacheName).then(cache => {
  
            cache.keys().then(keys => {
              if (keys.length > 0) {
                console.log('pages cached done');
              }
            });
          });
          return res;
        })
    );
  });
} catch (error) {
  alert(error.message);
}

};

fetchEvent();




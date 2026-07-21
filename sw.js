// Service worker mínimo — necessário para o navegador permitir
// "Adicionar ao ecrã principal". Não faz cache agressivo de propósito,
// porque preços e stock têm de estar sempre atualizados, nunca desatualizados.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (evento) => {
  evento.respondWith(fetch(evento.request));
});

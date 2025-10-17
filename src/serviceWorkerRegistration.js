// src/serviceWorkerRegistration.js
// Adapted from CRA PWA template - registers service worker in production builds.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d?\d)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    // On localhost, check if service worker exists and is valid.
    if (isLocalhost) {
      fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
        .then(response => {
          const contentType = response.headers.get('content-type');
          if (
            response.status === 404 ||
            (contentType && !contentType.includes('javascript'))
          ) {
            // No service worker found. Unregister old service workers.
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister();
            });
          } else {
            // Service worker found, proceed to register.
            _registerValidSW(swUrl, config);
          }
        })
        .catch(() => {
          // Offline or unreachable - app will still work offline if cached previously.
          console.log('No internet connection found. App is running in offline mode.');
        });
    } else {
      // Non-localhost: just register
      _registerValidSW(swUrl, config);
    }
  }
}

function _registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content is available; show a toast, or trigger update flow
              console.log('New content is available; please refresh.');
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Content cached for offline use.
              console.log('Content is cached for offline use.');
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

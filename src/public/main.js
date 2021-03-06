const publicKey = 'BPQmK0ltGEud13Pv-kyolPM4LNjO5a5Ld-BlJvpeV1AEk9CQw_XG3znyfVEQqwfaL-7vrnfooc0Py0AuRYDIuQc';

const urlBase64ToUint8Array = (base64String) => {

  // eslint-disable-next-line no-mixed-operators
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const subscription = async () => {

  // Service Worker
  const register = await navigator.serviceWorker.register('/serviceWorker.js', {
    scope: '/',
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey),
  });

  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

subscription();

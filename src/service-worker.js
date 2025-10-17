/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

clientsClaim();

// ⬇This line is critical. It tells Workbox to inject the pre-cache manifest.
precacheAndRoute(self.__WB_MANIFEST);
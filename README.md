# ng2-pokedex
NG2 Implementation of pokedex.org by @nolanlawson

WORK IN PROGRESS!

### What?

Using Angular2 to build [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps?hl=en) using the [App Sheel Architecture](https://developers.google.com/web/updates/2015/11/app-shell?hl=en)

### How?

- Prerenders the app shell and minimal content at build time (the entire UI is an angular application, no static content)
- Optionally (see src/server.ts) can dynamically render on the server
- Serve prerendered / server-rendered content / inlined critical CSS to browser for instant page load
- Boots Angular app in a *web worker* for max performance awesomesauce and hooks into rendered content
- Caches all application content using a *Service Worker* (where available) to enable offline usage

See demo at https://pokedex.innit.io

# 2048-PWA
Original game by Gabriele Cirulli. A small clone of [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024), based on [Saming's 2048](http://saming.fr/p/2048/) (also a clone).

I have converted into a progressive webapp.  [Play it here!](PWA link)

## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)

## Scope 

- run local server in root directory 
`python -m SimpleHTTPServer`

**Step 1 : Adding Manifest**
add link in HTML head
`<link rel="manifest" herf="manifest.json">`
**Step 1 : Adding Service Worker**
- register sw.js with serviceWorker 
- register event handler for install, active and fetch event. 
- cashed app to be available without any network. 

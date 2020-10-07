# 2048-PWA
Original game by Gabriele Cirulli. A small clone of [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024), based on [Saming's 2048](http://saming.fr/p/2048/) (also a clone).

I have converted into a progressive webapp.  [Play it here!](https://qasimtalkin.github.io/PWA-Game-2048/)

## License
2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)

## Scope 

- run local server in root directory 
python 2
`python -m SimpleHTTPServer 1111`
python 3
`python -m http.server 1111`
**Step 1 : Adding Manifest**
- to describe the application to the platform on how to add to their home screen. 
add link in HTML head
`<link rel="manifest" herf="manifest.json">`

**Step 1 : Adding Service Worker**
- register sw.js with serviceWorker 
- register event handler for install, active and fetch event. 
- cashed app to be available without any network. 

**Pwa on iso**
- Triggering web experience on apple ios devices. 

**Git pages 404**
```git
git commit --allow-empty -m "Trigger rebuild"
git push
```

- `npm i`
- Download chromedriver and cp it to your `usr/local`
- running the wiki test: `node wiki.js`
- running the google search test : `node googleSearch.js`


## Running Docker seleinum hub and chrome

- Hub: `docker run -d -p 4444:4444 --name selenium-hub selenium/hub:2.48.2`
- Chrome Instance: `docker run -d --link selenium-hub:hub --name chrome1 selenium/node-chrome:2.48.2`
- Browser: `docker run -d --name firefox1 --link selenium-hub:hub selenium/node-firefox:2.48.2`

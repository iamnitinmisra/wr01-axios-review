For this to work properly, you will need to add a .env file

contents of the file should include

```js
SERVER_PORT = 4600
CONNECTION_STRING = 'your connection string goes here' //do not include '?ssl=true'
SESSION_SECRET = 'your session secret goes here'
```

Front end hits the pokemon API without the need for a server

Change the url in App.js to hit our own API to use connect server.

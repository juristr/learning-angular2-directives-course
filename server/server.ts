import * as path from 'path';
import * as express from 'express';

// Angular 2
import {ng2engine, REQUEST_URL, NODE_LOCATION_PROVIDERS} from 'angular2-universal-preview';
import {provide, enableProdMode} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {App} from '../src/app.component';

console.log('Running server from dir ' + __dirname);

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

// Serve static files
app.use(express.static(root));

// Express View
app.engine('.html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'html');

// enableProdMode();

function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  console.log('>' + url);

  res.render('index', {
    App,
    providers: [
      provide(APP_BASE_HREF, {useValue: baseUrl}),
      provide(REQUEST_URL, {useValue: url}),
      ROUTER_PROVIDERS,
      NODE_LOCATION_PROVIDERS,
    ],
    preboot: true
  });
}

// Routes
app.use('/', ngApp);
// app.use('/', (req, res) => {
//     res.send(200, 'hi');
// //   res.render('index', { App });
// });
app.use('/configure', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});

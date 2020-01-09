const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require("path")
const pool = require('./database.js')

//CITATION: https://stackoverflow.com/questions/40876599/express-js-force-https-ssl-redirect-error-too-many-redirects
//HTTPS redirect middleware
function ensureSecure(req, res, next) {
  //Heroku stores the origin protocol in a header variable. The app itself is isolated within the dyno and all request objects have an HTTP protocol.
  if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
    //Serve Vue App by passing control to the next middleware
    next();
  } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
    //Redirect if not HTTP with original request URL
    res.redirect('https://' + req.hostname + req.url);
  }
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.all('*', ensureSecure)
app.use(serveStatic(path.join(__dirname, '..', '/dist')));
// Inserted this so that client-side routing works
app.use(history({
    verbose: true
}));
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')));

// function for errors on database connections
function dbConnError(res, err) {
  console.error('Error acquiring client', err, err.message, err.stack);
  res.status(400);
  res.send(err);
}

// function for query errors
function queryError(res, err) {
  console.log('Query error', err, err.message, err.stack);
  res.status(400);
  res.send(err);
}

app.get('/getArtists', (req, res) => {
  pool.connect(function (err, client) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query('SELECT * FROM artists', //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        console.log(resp.rows)
        // Successful get request
        let response = {
          artists: resp.rows
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.get('/getTranslatorInfo/:id', (req, res) => {
  let response = {
    currentTranslator: {
      firstName: 'Mathew',
      lastName: 'Bfenkamp',
      languages: ['English', 'Armenian', 'Norwegian']
    }
  }
  res.status(200)
  res.json(response)
})

app.get('/getSongs', (req, res) => {
  pool.connect(function (err, client) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query('SELECT * FROM songs', //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        console.log(resp.rows)
        // Successful get request
        let response = {
          songs: resp.rows
        }
        res.status(200)
        res.json(response)
      });
      client.release()
  })
})

app.get('/getSongInfo', (req, res) => {
  let id = req.query['id']
  pool.connect(function (err, client) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(`SELECT * FROM songs WHERE id=${id};`, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err)
          return;
        }
        console.log(resp.rows[0])
        let response1 = resp.rows[0]
        client.query(`SELECT * FROM song_lyrics WHERE id=${id};`, //do the query
          (err, resp) => {
            if (err) {
              queryError(res, err)
              return;
            }
            console.log(resp.rows)
            let langObj = {}
            langObj[resp.rows[0].language] = resp.rows[0]
            langObj[resp.rows[1].language] = resp.rows[1]
            console.log(langObj)
            let response = {
              songInfo: {
                title: response1.title,
                artist: response1.artist,
                originalLanguage: response1.original_language,
                translations: response1.translations,
                langObj: langObj
              }
            }
            console.log(response)
            res.status(200)
            res.json(response)
          });
      });
      client.release()
  })
})

app.post('/postLyrics', async (req, res) => {
  console.log(req.body)
  let title = req.body.title
  let artist = req.body.artist
  let originalLanguage = req.body.originalLanguage
  let translations = req.body.translations
  let originalLyrics = req.body.originalLyrics
  let currentLyrics = req.body.currentLyrics

  let insertOriginal = '{'
  let i = 0
  for(i; i < originalLyrics.length-1; i++) {
    insertOriginal += '"' + originalLyrics[i] + '", '
  }
  insertOriginal += '"' + originalLyrics[i] + '"}'

  let insertCurrent = '{'
  i = 0
  for(i; i < currentLyrics.length-1; i++) {
    insertCurrent += '"' + currentLyrics[i] + '", '
  }
  insertCurrent += '"' + currentLyrics[i] + '"}'

  let insertTranslations = '{'
  i = 0
  for(i; i < translations.length-1; i++) {
    insertTranslations += '"' + translations[i] + '", '
  }
  insertTranslations += '"' + translations[i] + '"}'

  let query = `INSERT INTO songs(title, artist, original_language, translations) VALUES ('${title}', '${artist}', '${originalLanguage}', '${insertTranslations}') RETURNING id;`
  console.log(query)

  //connect to the db
  pool.connect(function (err, client) {
    if (err) {
      dbConnError(res, err);
      return;
    }
    client.query(query, //do the query
      (err, resp) => {
        if (err) {
          queryError(res, err);
          return;
        }
        let id = resp.rows[0].id
        query = `INSERT INTO song_lyrics(id, language, lyrics) VALUES ('${id}', '${originalLanguage}', '${insertOriginal}')`
        console.log(query)
        client.query(query, //do the query
          (err, resp) => {
            if (err) {
              queryError(res, err);
              return;
            }
          });
        query = `INSERT INTO song_lyrics(id, language, lyrics) VALUES ('${id}', '${translations[0]}', '${insertCurrent}')`
        console.log(query)
        client.query(query, //do the query
          (err, resp) => {
            if (err) {
              queryError(res, err);
              return;
            }
            res.status(200)
            res.json(id)
          });
      });
    client.release()
  });
});

let port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Node js at port', port);
});

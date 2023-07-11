const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const store = new session.MemoryStore();
const adminList = ["admin1", "admin2"];

// Express session is not the same as session storage in web browser.
// express session is stored in the server and the session id will be stored in the browser's cookie
// by default session is stored in memory and is not designed for production
// https://expressjs.com/en/resources/middleware/session.html#:~:text=Note%20Session%20data%20is%20not%20saved%20in%20the%20cookie%20itself%2C%20just%20the%20session%20ID.%20Session%20data%20is%20stored%20server%2Dside.
// https://expressjs.com/en/resources/middleware/session.html#:~:text=Warning%20The%20default%20server%2Dside%20session%20storage%2C%20MemoryStore%2C%20is%20purposely%20not%20designed%20for%20a%20production%20environment.%20It%20will%20leak%20memory%20under%20most%20conditions%2C%20does%20not%20scale%20past%20a%20single%20process%2C%20and%20is%20meant%20for%20debugging%20and%20developing.

app.use(express.urlencoded({extended: false}));

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.get('/', (req, res) => {
  if (req.session.isLoggedIn) {
    res.render('authenticated.ejs', {session: JSON.stringify(store)});
  } else {
    res.redirect('/login');
  }
})

app.get('/login', (req, res) => {
  res.render('login.ejs', {message: ""});
})

app.post('/login', (req, res) => {
  const user = req.body.user;
  if (adminList.includes(user)) {
    req.session.isLoggedIn = true;
    req.session.username = user;
    res.redirect('/');
  } else {
    req.session.isLoggedIn = false;
    res.render('login.ejs', {message: "Username salah"});
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    res.redirect('/login');
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
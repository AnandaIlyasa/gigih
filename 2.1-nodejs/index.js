const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const store = new session.MemoryStore();
const adminList = ["admin1", "admin2"];

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
    res.locals.data = "data dummy " + user;
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
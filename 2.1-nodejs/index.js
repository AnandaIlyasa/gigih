const express = require('express')
const app = express()
const port = 3000
const session = require('express-session');

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.render('main.ejs');
})

app.get('/tes', (req, res) => {
  res.send('ini tes');
})

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    console.log('Anda tidak login');
  } else {
    console.log('Anda telah login');
  }
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
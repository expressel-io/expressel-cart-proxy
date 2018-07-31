const express = require('express')
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const redirectedPort = 3003;

app.use(morgan('dev'));
app.use(cors());

app.use('/item/:id', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//TODO: Redirect 4000 to 3003
const handleRedirect = function(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});



const express = require('express');
const browserSync = require('browser-sync');
const compression = require('compression');

const port = process.env.PORT || 3000;

const app = express();

app.use(compression());

app.use(express.static('dist'));

app.listen(3000, listening);

function listening() {
  browserSync({
    proxy: `localhost:${port}`,
    files: ['dist/**/*.{js,css,html}'],
    open: false,
  });
}

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el currículum
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'curriculum.html'));
});

// Ruta para el currículum
app.get('/es', (req, res) => {
  res.redirect("http://localhost:3000?lang=es");
});

app.get('/en', (req, res) => {
  res.redirect("http://localhost:${port}?lang=en");
});

// Arranca el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
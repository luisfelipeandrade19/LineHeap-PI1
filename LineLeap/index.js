const { json } = require('express');
const express = require('express');
const FilaRep = require('./repository/filasRepository/FilaRep');
const ProcessoRep = require('./repository/filasRepository/ProcessoRep');

const Fila = FilaRep;
const Processo = ProcessoRep;
const selecionarFila = require('./public/scripts/seleciona');

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/sobre-nos', (req, res) => {
  res.render('quem-somos');
});

app.get('/sobre-lineleap', (req, res) => {
  res.render('line-leap');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
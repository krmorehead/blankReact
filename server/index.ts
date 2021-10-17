import express from 'express';
import path from 'path';

const app = express();
const port = process.env.port || 8080;


app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});
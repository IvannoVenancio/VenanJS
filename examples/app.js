
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Venan } from '../lib/venan.js';

//import path from 'path';

const app = new Venan();

// Serve arquivos estáticos da pasta 'public'
app.serveStatic(path.join(__dirname, '../public'));

app.post('/users', async (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const user = JSON.parse(body);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'User created', user }));
  });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

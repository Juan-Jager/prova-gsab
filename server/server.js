import express from 'express';
import  {fileURLToPath}  from 'url';
import  {dirname}  from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 3000;

// Servi i file statici dalla cartella build del tuo progetto React
app.use(express.static(path.join(__dirname, '../gsap/dist')));

app.get('/', (req, res) => {
    // Ritorna il file HTML principale del tuo progetto React
    res.sendFile(path.join(__dirname, '../gsap/dist', 'index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

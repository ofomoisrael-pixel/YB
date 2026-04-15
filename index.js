const express = require('express');

const app = express();
const PORT = 3003;

// Servir les fichiers du dossier public
app.use(express.static('public'));

// Route API
app.get('/api/personnages', (req, res) => {
  const personnages = [
    {
      nom: "Yuji Itadori",
      image: "https://cdn.myanimelist.net/images/characters/2/477567.jpg"
    },
    {
      nom: "Satoru Gojo",
      image: "https://cdn.myanimelist.net/images/characters/7/422946.jpg"
    },
    {
      nom: "Megumi Fushiguro",
      image: "https://cdn.myanimelist.net/images/characters/3/395882.jpg"
    },
    {
      nom: "Nobara Kugisaki",
      image: "https://cdn.myanimelist.net/images/characters/11/396548.jpg"
    }
  ];

  res.json(personnages);
});

// Lancer serveur
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
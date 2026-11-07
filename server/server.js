const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Leer productos desde data/productos.json
const dataPath = path.join(__dirname, '../data/productos.json');
let productos = [];

try {
  const rawData = fs.readFileSync(dataPath, 'utf8');
  productos = JSON.parse(rawData);
} catch (error) {
  console.error('Error al leer productos.json:', error.message);
}

// Endpoint: Obtener todos los productos
app.get('/api/productos', (req, res) => {
  setTimeout(() => {
    res.json(productos);
  }, 400);
});

// Endpoint: Obtener un producto por ID
app.get('/api/productos/:id', (req, res) => {
  setTimeout(() => {
    const id = parseInt(req.params.id, 10);
    const producto = productos.find((p) => p.id === id);

    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  }, 400);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Mock de TechVibe corriendo en http://localhost:${PORT}`);
  console.log(`📡 Endpoints disponibles:`);
  console.log(`   - GET http://localhost:${PORT}/api/productos`);
  console.log(`   - GET http://localhost:${PORT}/api/productos/:id`);
});

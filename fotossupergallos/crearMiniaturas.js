const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = "./equipomayor/";       // Carpeta donde están tus PNG originales
const output = "./equipomayor/thumbs/"; // Carpeta donde se guardarán las miniaturas

// Crear carpeta de miniaturas si no existe
if (!fs.existsSync(output)) fs.mkdirSync(output, { recursive: true });

// Leer todos los archivos de la carpeta
fs.readdirSync(folder).forEach(file => {
  if (file.endsWith(".png")) {
    sharp(path.join(folder, file))
      .resize({ width: 150 }) // ancho máximo de la miniatura
      .toFile(path.join(output, file.replace(".png", ".png")))
      .then(() => console.log(`Miniatura creada: ${file}`))
      .catch(err => console.error(err));
  }
});

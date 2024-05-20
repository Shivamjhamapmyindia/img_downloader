const axios = require('axios');
const fs = require('fs');

const data = [
  {
    "id": "28230748",
    "img": "https://lh3.googleusercontent.com/FzKmdoB1aN_6ruS4zDG_TxzJkEGB-t5OeWVBbBRO6hulyMQuC-5TSA6FylDpGAU63DOAQjlW40bo9vCS6wzaRrTCAK8Z5RerlbxEOT2V"
  },
]

async function downloadImage(url, filename) {
  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
  });

  response.data.pipe(fs.createWriteStream(`img/${filename}`));

  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      resolve();
    });

    response.data.on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages(data) {
  for (const item of data) {
    const id = item.id;
    const imgUrl = item.img;
    const filename = `${id}.jpg`;

    try {
      await downloadImage(imgUrl, filename);
      console.log(`Downloaded ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}: ${error.message}`);
    }
  }
}

downloadAllImages(data);

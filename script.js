
const fs =require('fs')

   const data=[
    {
      "SKU_ID": "28230748",
      "SKU_Images_1": "https://lh3.googleusercontent.com/FzKmdoB1aN_6ruS4zDG_TxzJkEGB-t5OeWVBbBRO6hulyMQuC-5TSA6FylDpGAU63DOAQjlW40bo9vCS6wzaRrTCAK8Z5RerlbxEOT2V"
    }
     
  ]
  //  console.log(data)
  const img=[]
  const id=[]
  fullData=[]

  data.map(item => {
    // console.log(item)
    if (item.SKU_Images_1 && item.SKU_Images_1.includes('https')) {
      let imgUrl = item.SKU_Images_1;
      // console.log(imgUrl)
      if (imgUrl.startsWith('"')) {
          imgUrl = imgUrl.slice(1); // Remove the double quote
        
      }
      fullData.push({ id: item.SKU_ID, img: imgUrl });
  }

});
  console.log(img)
  console.log(id)
//   console.log(id)
//  const jsonString = JSON.stringify(ipdata, null, 2);
  fs.createWriteStream('output.json').write(JSON.stringify(fullData, null, 2));

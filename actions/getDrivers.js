const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const getDriversPage = async () => {
    const html = await fetch('https://www.formula1.com/en/drivers.html').then(res => res.text());

    return html;
};

const downloadImage = async (url, name) => {
    const res = await fetch(url);
  await new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(`./public/images/${name}`);
    res.body.pipe(fileStream);
    res.body.on("error", (err) => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve();
    });
  });
};

const cleanName = (name) => {
    return name.toLowerCase().trim().replace(' ', '-');
};

const getData = async (html) => {
    const $ = cheerio.load(html);

    const data = await ($('.listing-item--link')
    .map(function (i, el) {
        let name = $(this).find('.listing-item--name').text().trim().split('\n')[0];
        let surname = $(this).find('.listing-item--name').text().trim().split('\n')[1].trim();
        let team = $(this).find('.listing-item--team').text().trim();
        let image = $(this).find('.listing-item--photo img').attr('data-src');

        downloadImage(image, `${cleanName(name)}.png`);

      return {
          id: uuidv4(),
          name,
          surname,
          team,
          image
      };
    })
    .get());

    return data;
}

const main = async () => {
    const html = await getDriversPage();
    const data = await getData(html);

    fs.writeFileSync('./data/drivers.json', JSON.stringify(data));
}

main();
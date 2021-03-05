const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const getTeamsPage = async () => {
    const html = await fetch('https://www.formula1.com/en/teams.html').then(res => res.text());

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

    const data = await ($('.listing-item-wrapper')
    .map(function (i, el) {
        let name = $(this).find('.listing-info').text().trim();
        let image = $(this).find('.listing-image img').attr('data-src');
        let logo = $(this).find('.logo img').attr('data-src');

        downloadImage(image, `${cleanName(name)}.png`);
        downloadImage(logo, `${cleanName(name)}-logo.png`);

      return {
          id: uuidv4(),
          name,
          image,
          logo
      };
    })
    .get());

    return data;
}

const main = async () => {
    const html = await getTeamsPage();
    const data = await getData(html);

    fs.writeFileSync('./data/teams.json', JSON.stringify(data));
}

main();
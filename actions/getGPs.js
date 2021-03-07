const cheerio = require('cheerio');
const fetch = require('node-fetch');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const getGPsPage = async () => {
  const html = await fetch('https://www.formula1.com/en/racing/2021.html').then(res => res.text());

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
    fileStream.on("finish", function () {
      resolve();
    });
  });
};

const cleanName = (name) => {
  return name.toLowerCase().trim().replace(' ', '-');
};

const getData = async (html) => {
  const $ = cheerio.load(html);

  const data = await ($('.event-item')
    .map(function (i, el) {
      let place = $(this).find('.event-place').text().trim();
      let flag = $(this).find('.country-flag img').attr('data-src');
      let startDate = $(this).find('.start-date').text();
      let endDate = $(this).find('.end-date').text();
      let month = $(this).find('.month-wrapper').text();

      downloadImage(flag, `${cleanName(place)}.png`);

      return {
        id: uuidv4(),
        place,
        startDate,
        endDate,
        month
      };
    })
    .get());

  return data;
}

const main = async () => {
  const html = await getGPsPage();
  const data = await getData(html);

  fs.writeFileSync('./data/GPs.json', JSON.stringify(data));
}

main();
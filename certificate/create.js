const util = require('util');
const pem = require('pem');
const fs = require('fs');

const createCertificate = util.promisify(pem.createCertificate);
createCertificate({ days: 365, selfSigned: true })
  .then((keys) => {
    fs.writeFileSync('./key.pem', keys.clientKey);
    fs.writeFileSync('./cert.pem', keys.certificate);
  })
  .catch((error) => {
    console.error(error);
  });

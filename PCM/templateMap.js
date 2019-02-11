const fs = require('fs');
const path = require('path');
const PCMTemplates = '/Users/marvinli/Code/PCM.API/data/base_template';

const results = {};
const files = fs.readdirSync(PCMTemplates);
files.forEach((file) => {
  if (file.endsWith('.json')) {
    const filePath = path.join(PCMTemplates, file);
    const val = require(filePath);
    results[file] = val;
  }
});

module.exports = results;
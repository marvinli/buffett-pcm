const fs = require('fs');
const path = require('path');
const templatePath = '/data/base_template';

const buildTemplateMap = (pcmPath) => {
  const pcmTemplateFoler = path.join(pcmPath, templatePath);
  const results = {};
  const files = fs.readdirSync(pcmTemplateFoler);
  files.forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(pcmTemplateFoler, file);
      const val = require(filePath);
      results[file] = val;
    }
  });
  return results;
}


module.exports = buildTemplateMap;
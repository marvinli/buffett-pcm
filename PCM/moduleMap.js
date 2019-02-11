const moduleConfig = require('/Users/marvinli/Code/PCM.API/data/module_config/data.json');

const moduleMap = {};

moduleConfig
  .forEach((mod) => {
    if (mod.modulePointer) {
      moduleMap[mod] = mod.modulePointer;
    }
  });

module.exports = moduleMap;

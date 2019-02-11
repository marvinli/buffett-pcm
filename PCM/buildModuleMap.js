const path = require('path');

const buildModuleMap = (pcmPath) => {
  const fullPath = path.join(pcmPath, 'data/module_config/data.json');
  const moduleConfig = require(fullPath);

  const moduleMap = {};

  moduleConfig
    .forEach((mod) => {
      if (mod.modulePointer) {
        moduleMap[mod] = mod.modulePointer;
      }
    });

  return moduleMap;
}

module.exports = buildModuleMap;

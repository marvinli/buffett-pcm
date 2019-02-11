const moduleMap = require('./moduleMap');

const templateObjToDeps = (template, map = {}) => {
  const depSet = new Set();
  template.layout.forEach((layout) => {
    layout.columns.forEach((column) => {
      if (!column.modules) {
        return;
      }
      column.modules.forEach((module) => {
        const moduleName =
          moduleMap[module.name] ||
          module.name;
        depSet.add(moduleName);
      })
    })
  });
  return depSet;
}

module.exports = templateObjToDeps;
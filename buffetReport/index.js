const buildTemplateMap = require('../PCM/buildTemplateMap');
const templateObjToDeps = require('../PCM/templateObjToDeps');

const buffetReport = (pcmPath) => {
  const templateMap = buildTemplateMap(pcmPath);
  const templates = Object.keys(templateMap);

  const buffetPages = new Set([
    'buffettAboutPage.json',
    'buffettAtoZ.json',
    'buffettHomepage.json',
    'buffettSlideshow.json',
    'buffettTemplate.json',
    'buffettarticle.json',
  ]);

  const reducer = (acc, curr) => {
    curr.forEach((c) => acc.add(c));
    return acc;
  };

  const buffetModules = templates
    .filter((template) => buffetPages.has(template))
    .map((template) => templateObjToDeps(templateMap[template]))
    .reduce(reducer, new Set());

  const nonBuffetModules = templates
    .filter((template) => !buffetPages.has(template))
    .map((template) => templateObjToDeps(templateMap[template]))
    .reduce(reducer, new Set());

  const buffetModulesArray = Array.from(buffetModules);

  console.log('Buffet Only');
  const buffetOnly = buffetModulesArray.filter((m) => !nonBuffetModules.has(m));
  console.log(buffetOnly);

  console.log('Shared');
  const shared = buffetModulesArray.filter((m) => nonBuffetModules.has(m));
  console.log(shared);
};

module.exports = buffetReport;

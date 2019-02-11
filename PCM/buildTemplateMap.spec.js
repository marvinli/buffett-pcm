const buildTemplateMap = require('./buildTemplateMap');
describe('templateMap()', () => {
  it('builds a template map', () => {
    // TODO: Extract path to Jest test variable:
    const templateMap = buildTemplateMap('/Users/marvinli/Code/PCM.API');
    expect(templateMap).toBeInstanceOf(Object);
  });
});

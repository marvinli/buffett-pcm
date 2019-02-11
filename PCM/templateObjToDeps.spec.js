const templateObjToDeps = require('./templateObjToDeps');
const template = require('./template.json');

describe('templateObjToDeps', () => {
  it('converts template to arr of deps', () => {
    const deps = templateObjToDeps(template);
    expect(deps).toEqual(new Set([
      'videoDetailClipPlayer',
      'relatedVideos',
      'CNBCVideoFeed60'
    ]));
  });
});

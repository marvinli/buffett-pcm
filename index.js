const buffetReprot = require('./buffetReport');

const pcmPath = process.argv[2];
if (!pcmPath) {
  console.log('Must specify PCM path.');
  process.exit();
}

buffetReprot(pcmPath);
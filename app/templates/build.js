const s = require('shelljs');

s.rm('-rf', 'build');
s.mkdir('build');
s.cp('.env', 'build/.env');
s.cp('-R', 'public', 'build/public');

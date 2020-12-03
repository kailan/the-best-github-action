const exec = require('@actions/exec');

await exec.exec('bash', ['-c', '"echo build!"']);
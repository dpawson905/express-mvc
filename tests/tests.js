require = require("esm")(module /*, options*/);
const assert = require("assert");

describe('Start', function() {
  describe('check for files', function() {
    it('should stop the cli because the dir is not empty', function() {
      require("../lib/files").isDirEmpty(process.cwd());
    });
  });
});
const asyncZip = require('./index');
const chai = require('chai');
var assert = chai.assert;

describe('asyncCompressString', function() {

    it('should return a compressed version of the string passed into it.', async function() {

      const expectedResult = "The string to compress";
      const compressedResult = await asyncZip.asyncCompressString(expectedResult);
      const deCompressedResult = await asyncZip.asyncDecompressString(compressedResult);
      assert.equal(deCompressedResult, expectedResult);

    });

    it('should return an error when value to compress is not a string.', async function() {
      const expectedResult = 1;

      const compressedResult = await asyncZip.asyncCompressString(expectedResult);

      assert.include(compressedResult.toString(),'TypeError [ERR_INVALID_ARG_TYPE]');
    });

});
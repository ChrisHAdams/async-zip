const zlib = require ('zlib');

async function asyncCompressString(stringToCompress) {

  try {
    return await compressString(stringToCompress);
  } catch(err) {
    return(err);
  }

}

async function asyncDecompressString(stringToDeCompress) {

  try {
    return await decompressString(stringToDeCompress)
   } catch(err) {
    return(err);
  }

}

function compressString(stringToCompress) {

  return new Promise( function( resolve, reject ) {

      zlib.deflate(stringToCompress, (err, buffer) => {
          if(err){
            reject(err);
          }

          resolve(buffer);
      });
  });
}

function decompressString(compressedBuffer) {

  return new Promise( function( resolve, reject ) {

      zlib.inflate(compressedBuffer, (err, string) => {
          if(err){
            reject(err);
          }

          resolve(string);
      });
  });
}

exports.asyncCompressString = asyncCompressString;
exports.asyncDecompressString = asyncDecompressString;

# async-zip

## An Asynchronous wrapper around ZLib

This module is a really simple wrapper around ZLip.  A while back I needed to compress the body of a web-service request.  At the time, I was trying understand promises and async/await functions and the compression libraries all seem to require callbacks to control the flow of code.  I ended up wrapping the call to ZLib's inflate and deflate actions in an async function.

### Installation
```
npm install async-zip
```

### Example
```
const asyncZip = require('async-zip');

const inputString = "The string to compress";
const compressedString = await asyncZip.asyncCompressString(inputString);
const deCompressedString = await asyncZip.asyncDecompressString(compressedString);
console.log(deCompressedString.toString());

```
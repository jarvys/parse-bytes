#parse-bytes
> Parse file size into an object, inspired by [parse-ms](https://github.com/sindresorhus/parse-ms)

##Install
```bash
$ npm install parse-bytes --save
```

##Usage
```js
var parseBytes = require("parse-bytes");
parseBytes(3003, true);
//=> { b: 3, kb: 3, mb: 0, gb: 0, tb: 0, pb: 0 }
```

## License
[MIT](http://opensource.org/licenses/MIT) © [Jarvys](http://jarvys.me)

#parse-file-size
> Parse file size into an object, inspired by [parse-ms](https://github.com/sindresorhus/parse-ms)

##install
```bash
$ npm install parse-file-size --save
```

##Usage
```js
var parseFileSize = require("parse-file-size");
parseFileSize(3003, true);
//=> { b: 3, kb: 3, mb: 0, gb: 0, tb: 0, pb: 0 }
```

## License
[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)

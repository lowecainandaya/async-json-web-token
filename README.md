# promise-jwt

promise-jwt is a class based jsonwebtoken alternative which is created from jsonwebtoken library itself.

### INSTALL

```bash
# NPM
$ npm install @fntools/jsonwebtoken --save

// or 
# YARN 
$ yarn add @fntools/jsonwebtoken
```

### DOCUMENTATION/USAGE

#### _new JWT(secret:string|PrivateKey)_

promise-jwt is a framework for promised based jwt token.

- **_secret_**
  it is a string or a privateKey that is used to sign the jwt token

### METHODS

- **_sign(payload[,options][,cb(error,token)])_**
  is the method used to create the jwt token string

  - _payload_ - is an object leteral that you want to sign
  - _options_ - is jwt options
  - _cb_ - is the callback funtion only used if dev doesn't want to use promise

- **_verify(token[,options][,cb(error,decode)])_**
  is a method that is used verify a token.
  - _token_ - is a jwt token string
  - _options_ - is jwt options
  - _cb_ - is the callback funtion only used if dev doesn't want to use promise

#### _new Jsonwebtoken(secret:string|PrivateKey)_

It is a class who behave like the original jwt

- **_secret_**
  it is a string or a privateKey that is used to sign the jwt token

### METHODS

- **_sign(payload[,options][,cb(error,token)])_**
  - _payload_ - is an object leteral that you want to sign
  - _options_ - is jwt options
  - _cb_ - is the callback is used to let jwt behave asyncronously
- **_verify(token[,options][,cb(error,decode)])_**
  - _payload_ - is an object leteral that you want to sign
  - _options_ - is jwt options
  - _cb_ - is the callback is used to let jwt behave asyncronously

Note `JWT.prototype.sync === new Jsonwebtoken(someSecret)`

### Examples

```javascript
const { JWT } = require("@fntools/jsonwebtoken"); // or import {Jsonwebtoken} from "@fntools/jsonwebtoken"
// initialize
const jwt = new JWT("some secret");
jwt.sign({ sample: "sample payload" })
  .then((token) => {
    // do something cool 
  })
  .catch((error) => {
    // handles error 
  });

// or use callback for synchrounous call 
jwt.sign({ sample: "sample payload" }, (error, token) => {
  if (error) {
    // do something cool 
  } else {
    // handle error 
  }
});


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYW1wbGUiOiJzYW1wbGUgcGF5bG9hZCIsImlhdCI6MTY3MDY3NDQ3Nn0.g8bh59r5qwB6u-Lb5X38R_wr5xELUpdqVffRIwoyc9c";

jwt.verify(token)
  .then((decode) => {
    // do something cool...
  })
  .catch((error) => {
    // handles error
  });

// or verify sync  using cb
jwt.verify(token, (error, decode) => {
  if (error) {
    // handle errors
  } else {
    // handle success
  }
});
```

```javascript
const {Jsonwebtoken} = require("@fntools/Jsonwebtoken"); // import Jsonwebtoken from "@fntools/Jsonwebtoken"
// if you want @fntools/jsonwebtoken to behave like the jsonwebtoken original library you will use Jsonwebtoken or JWT.sync ;

const secret = "some secret";
const jwt = new Jsonwebtoken(secret);
// sign
var token = jwt.sign({ foo: 'bar' });
// if callback is not provided it will behave synchronously and will return jwt string
// sign  asynchronously
jwt.sign({ foo: 'bar' }, { algorithm: 'RS256' }, function(err, token) {
  // do something call 
});


// verify a token symmetric - synchronous
var decoded = jwt.verify(token);
console.log(decoded.foo) // bar

// verify a token symmetric
jwt.verify(token,  function(err, decoded) {
  console.log(decoded.foo) // bar
});

```

**_JWT.prototype.sync_**

```javascript

const {JWT} = require("@fntools/jsonwebtoken") // or import {JWT} from "@fntools/j"
const secret = "some secret"
const jwt = new JWT('some secret');
// sign
var token = jwt.sync.sign({ foo: 'bar' });
// if callback is not provided it will behave synchronously and will return jwt string
// sign  asynchronously
jwt.sync.sign({ foo: 'bar' }, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
});
// verify
 verify a token symmetric - synchronous
var decoded = jwt.verify(token);
console.log(decoded.foo) // bar

// verify a token symmetric
jwt.sync.verify(token,  function(err, decoded) {
  console.log(decoded.foo) // bar
});

```

_Note ` new JWT(secret).sync === jwt` and `Jsonwebtoken` is better for non-async manner
it doesn't require the use of `async` and `await`_


Learn More @t [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

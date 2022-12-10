# promise-jwt
promise-jwt is a class based jsonwebtoken alternative which is created from jsonwebtoken library itself.

### INSTALL 
```bash 
$ npm install @fntools/jsonwebtoken --save
// or 
$ yarn add @fntools/jsonwebtoken
```

### DOCUMENTATION/USAGE

#### *new JWT(secret:string|PrivateKey)*

promise-jwt is a framework for promised based jwt token.

- ***secret***
  it is a string or a privateKey that is used to sign the jwt token

### METHODS
    
- ***sign(payload[,options][,cb(error,token)])***
  is the method used to create the jwt token string
  * *payload* - is an object leteral that you want to sign
  * *options* - is jwt options
  * *cb* - is the callback funtion only used if dev doesn't want to use promise

- ***verify(token[,options][,cb(error,decode)])*** 
  is a method that is used verify a token.
  * *token* - is a jwt token string
  * *options* - is jwt options
  * *cb* - is the callback funtion only used if dev doesn't want to use promise
  



#### *new Jsonwebtoken(secret:string|PrivateKey)*
It is a class who behave like the original jwt 

- ***secret***
  it is a string or a privateKey that is used to sign the jwt token
### METHODS
- ***sign(payload[,options][,cb(error,token)])***
  * *payload* - is an object leteral that you want to sign
  * *options* - is jwt options
  * *cb* - is the callback is used to let jwt behave asyncronously
  
- ***verify(token[,options][,cb(error,decode)])***
  * *payload* - is an object leteral that you want to sign
  * *options* - is jwt options
  * *cb* - is the callback is used to let jwt behave asyncronously


Note ``JWT.prototype.sync === new Jsonwebtoken(someSecret)``

### Examples
```javascript 
  const {JWT} = require("@fntools/jsonwebtoken") // or import {Jsonwebtoken} from "@fntools/jsonwebtoken"
  // initialize 
  const jwt = new JWT("some secret");
  jwt.sign({sample:"sample payload"}).then((token) => {
    console.log(token);
  }).catch((error) => {
    console.log(error)
  })
  
  // or 
  jwt.sign({sample:"sample payload"},(error,token) => {
    if(error){
      console.log(error)
    } else {
      console.log(token)
    }
  })
  // verify 
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYW1wbGUiOiJzYW1wbGUgcGF5bG9hZCIsImlhdCI6MTY3MDY3NDQ3Nn0.g8bh59r5qwB6u-Lb5X38R_wr5xELUpdqVffRIwoyc9c'
   jwt.verify(token).then((decode) => {
     console.log("no error");
     console.log(decode)
   } ).catch((error) => {
     console.log("error\n", error)
   })
   
   // or 
   jwt.verify(token,(error,decode) => {
     if(error){
        console.log("error\n", error)
     } else {
      console.log("no error");
      console.log(decode)
     }
   })
   
  
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
  console.log(token);
});
// verify
 verify a token symmetric - synchronous
var decoded = jwt.verify(token);
console.log(decoded.foo) // bar
 
// verify a token symmetric
jwt.verify(token,  function(err, decoded) {
  console.log(decoded.foo) // bar
});
 
```

***JWT.prototype.sync***
```javascript
const {JWT} = require("@fntools/jsonwebtoken") // or import {JWT} from "@fntools/j"
const secret = "someSecret"
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
*Note `` new JWT(secret).sync === jwt`` and ``Jsonwebtoken`` is better for non-async manner 
it doesn't require the use of `async` and  `await`*
### DEVELOPED BY L0WE ANDAYA

Learn More @t [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 


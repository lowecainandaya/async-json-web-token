# promise-jwt
promise-jwt is a class based jsonwebtoken alternative which is created from jsonwebtoken library itself.

### INSTALL 
```bash 
$ npm install promise-jwt --save
// or 
$ yarn add promise-jwt
```

### DOCUMENTATION/USAGE

#### *new JWT(secret:string|PrivateKey)*

promise-jwt is a framework for promised based jwt token.

### ARGUMENTS 
- ***secret***
  it is a string or a privateKey that is used to sign the jwt token

### METHODS
- ***verify(payload[,options][,cb(error,decode)])*** 

  is a method that is used verify a token.
  * *token* - is a jwt string that is created from ***JWT.prototype.sign*** method
  * *options* - is jwt options
  * *cb* - is the callback funtion only used if dev doesn't want to use promise
    
- ***sign(payload[,options][,cb(error,token)])***
  is the method used to create the jwt token string
  * *token* - is a jwt string that is created from ***JWT.prototype.sign*** method
  * *options* - is jwt options
  * *cb* - is the callback funtion only used if dev doesn't want to use promise



  
  


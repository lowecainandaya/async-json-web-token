import {JWT,Jsonwebtoken} from "./main.js";

function test1(){
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
  
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYW1wbGUiOiJzYW1wbGUgcGF5bG9hZCIsImlhdCI6MTY3MDY3NDQ3Nn0.g8bh59r5qwB6u-Lb5X38R_wr5xELUpdqVffRIwoyc9c'
  
  // verify 
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
  
}

// using Jsonwebtoken class to sign/verify/token
function test2(){
  const secret = "some secret";
  const jwt = new Jsonwebtoken(secret);
  // sign 
  var token = jwt.sign({ foo: 'bar' }); 
  // if callback is not provided it will behave synchronously and will return jwt string
  // sign  asynchronously 
  jwt.sign({ foo: 'bar' }, { algorithm: 'RS256' }, function(err, token) {
    if(err){
      console.log("error",err)
    }
    console.log("token", token);
  });
  // verify
  // verify a token symmetric - synchronous
  var decoded = jwt.verify(token);
  console.log(decoded.foo) // bar
  
  // verify a token symmetric
  jwt.verify(token,  function(err, decoded) {
    console.log(decoded.foo) // bar
  });
}

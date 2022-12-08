const jwt = require("jsonwebtoken");

class JSON_WEB_TOKEN_CLASS{
  secret:string;
  constructor(secret:string){
    this.secret = secret;
  }
  sign(payload:any,options?:any,cb?:Function):Promise<string>|void{
    const secret = this.secret;
    if(typeof cb === "function"){
      jwt.sign(payload,secret,options||{},cb);
      return;
    } else {
      return new Promise((r,j) => {
        jwt.sign(payload,secret,options||{},(err:any,token:string) => {
          if(err){
            j(err);
          } else {
            r(token);
          }
          
        });
      })
      
    }
    
  }
  verify(token:string,options?:any,cb?:Function):Promise<any>|void {
    const secret = this.secret;
    if(typeof cb === 'function' ){
      jwt.verify(token,secret,options||{},cb)
      return;
    } else if(typeof options === "function") {
      jwt.verify(token,secret,options)
      return;
    } else {
      console.log(options)
      return new Promise((r,j) => {
        jwt.verify(token,secret,options||{},(err:any,decoded:any) => {
          if(err){
            j(err);
          } else {
            r(decoded)
          }
        })
      })
    }
  }
  
}


export default JSON_WEB_TOKEN_CLASS;
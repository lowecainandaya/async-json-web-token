const jwt = require("jsonwebtoken");

class JSON_WEB_TOKEN_CLASS{
  #secret:string;
  constructor(secret:string){
    this.#secret = secret;
  }
  sign(payload:any,options?:any,cb?:Function):Promise<string>{
    const secret = this.#secret;
    if(typeof cb === "function"){
      return jwt.sign(payload,secret,options||{},cb);
    } else if(typeof options === "function") {
      return jwt.sign(payload,secret,options)
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
  verify(token:string,options?:any,cb?:Function):Promise<any>{
    const secret = this.#secret;
    if(typeof cb === 'function' ){
      return jwt.verify(token,secret,options||{},cb)
      
    } else if(typeof options === "function") {
      return jwt.verify(token,secret,options)
      
    } else {
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
  
  get sync(){
    return new Jsonwebtoken(this.#secret);
  }
}

export const JWT = JSON_WEB_TOKEN_CLASS;
export class Jsonwebtoken {
  #secret:string;
  constructor(secret:string){
  this.#secret = secret;
  }
      sign(payload:any,options?:Function|Object,cb?:Function){
        const secret = this.#secret;
      return jwt.sign(payload,secret,options,cb);
    }
    verify(token:string,options:Object|Function,cb:Function){
      const secret = this.#secret;
      return jwt.verify(token,secret,options,cb)
    }
}
export default JWT;
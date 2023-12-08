import jwt, {Jwt, SignOptions} from "jsonwebtoken";


class JSON_WEB_TOKEN_CLASS{
  #secret:jwt.Secret;
  constructor(secret:jwt.Secret){
    this.#secret = secret;
  }

 
  sign(payload: any, options?: any): Awaited<string>;
   sign(payload:string | object | Buffer, options?: any, cb?:jwt.SignCallback):string|void|Promise<string> {
    const secret = this.#secret;
    if(typeof cb === "function"){
      return jwt.sign(payload,secret,options||{},cb);
    } else if(typeof options === "function") {
      return jwt.sign(payload,secret,options)
    } else {
      return new Promise((r,j) => {
        jwt.sign(payload,secret,options||{},(err:Error|null,token:string|undefined) => {
          if(err){
            j(err);
          } else {
            r(token as any);
          }
          
        });
      })
      
    }
    }
   
  verify(token: string, options:jwt.VerifyCallback):Jwt; 
  verify(token: string, options: jwt.VerifyOptions, cb: Function): Jwt;
  verify(token:string,options?:any,cb?:Function):Promise<any>|Jwt|void{
    const secret = this.#secret;
    if(typeof cb === 'function' ){
      return jwt.verify(token,secret,options||{},cb as any)
      
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
  #secret:jwt.Secret;
  constructor(secret:jwt.Secret){
  this.#secret = secret;
  }
      sign(payload:any,options:jwt.SignCallback|jwt.SignOptions|object,cb?:jwt.SignCallback){
        const secret = this.#secret;
      return jwt.sign(payload,secret,options as SignOptions,cb as jwt.SignCallback);
      }
  
    verify(token:string,options:Object|Function,cb:jwt.VerifyCallback){
      const secret = this.#secret;
      return jwt.verify(token,secret,options as any,cb)
    }
}
export default JWT;
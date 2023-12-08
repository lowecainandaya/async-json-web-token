import jwt, { Jwt } from "jsonwebtoken";
declare class JSON_WEB_TOKEN_CLASS {
    #private;
    constructor(secret: string);
    sign(payload: any, options?: any): Awaited<string>;
    verify(token: string, options: jwt.VerifyCallback): Jwt;
    verify(token: string, options: jwt.VerifyOptions, cb: Function): Jwt;
    get sync(): Jsonwebtoken;
}
export declare const JWT: typeof JSON_WEB_TOKEN_CLASS;
export declare class Jsonwebtoken {
    #private;
    constructor(secret: jwt.Secret);
    sign(payload: any, options: jwt.SignCallback | jwt.SignOptions | object, cb?: jwt.SignCallback): void;
    verify(token: string, options: Object | Function, cb: jwt.VerifyCallback): void;
}
export default JWT;
//# sourceMappingURL=main.d.ts.map
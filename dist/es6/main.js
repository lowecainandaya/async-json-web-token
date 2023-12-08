var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _JSON_WEB_TOKEN_CLASS_secret, _Jsonwebtoken_secret;
import jwt from "jsonwebtoken";
class JSON_WEB_TOKEN_CLASS {
    constructor(secret) {
        _JSON_WEB_TOKEN_CLASS_secret.set(this, void 0);
        __classPrivateFieldSet(this, _JSON_WEB_TOKEN_CLASS_secret, secret, "f");
    }
    sign(payload, options, cb) {
        const secret = __classPrivateFieldGet(this, _JSON_WEB_TOKEN_CLASS_secret, "f");
        if (typeof cb === "function") {
            return jwt.sign(payload, secret, options || {}, cb);
        }
        else if (typeof options === "function") {
            return jwt.sign(payload, secret, options);
        }
        else {
            return new Promise((r, j) => {
                jwt.sign(payload, secret, options || {}, (err, token) => {
                    if (err) {
                        j(err);
                    }
                    else {
                        r(token);
                    }
                });
            });
        }
    }
    verify(token, options, cb) {
        const secret = __classPrivateFieldGet(this, _JSON_WEB_TOKEN_CLASS_secret, "f");
        if (typeof cb === 'function') {
            return jwt.verify(token, secret, options || {}, cb);
        }
        else if (typeof options === "function") {
            return jwt.verify(token, secret, options);
        }
        else {
            return new Promise((r, j) => {
                jwt.verify(token, secret, options || {}, (err, decoded) => {
                    if (err) {
                        j(err);
                    }
                    else {
                        r(decoded);
                    }
                });
            });
        }
    }
    get sync() {
        return new Jsonwebtoken(__classPrivateFieldGet(this, _JSON_WEB_TOKEN_CLASS_secret, "f"));
    }
}
_JSON_WEB_TOKEN_CLASS_secret = new WeakMap();
export const JWT = JSON_WEB_TOKEN_CLASS;
export class Jsonwebtoken {
    constructor(secret) {
        _Jsonwebtoken_secret.set(this, void 0);
        __classPrivateFieldSet(this, _Jsonwebtoken_secret, secret, "f");
    }
    sign(payload, options, cb) {
        const secret = __classPrivateFieldGet(this, _Jsonwebtoken_secret, "f");
        return jwt.sign(payload, secret, options, cb);
    }
    verify(token, options, cb) {
        const secret = __classPrivateFieldGet(this, _Jsonwebtoken_secret, "f");
        return jwt.verify(token, secret, options, cb);
    }
}
_Jsonwebtoken_secret = new WeakMap();
export default JWT;

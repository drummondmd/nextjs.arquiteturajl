import crypto from "node:crypto"

export function generateToken() {
    ///gerando token aleatorio
    const tokenBuf = crypto.randomBytes(12);
    const token = tokenBuf.toString("hex");
    return token
}

export default function generateRandomPassword() {
    const array = new Uint32Array(1)
    crypto.getRandomValues(array)
    const response = (array[0] % 1_000_000).toString().padStart(6, '0')
    return response

}
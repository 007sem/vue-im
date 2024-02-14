import jwt from "jsonwebtoken";


const token_secret = "ahahhahs";

export function getToken(data) {
  console.log(data);
  return jwt.sign(data, token_secret, { expiresIn: "4h" });
}
export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, token_secret);
    return decoded;
  } catch (err) {
    return false;
  }
}

export default function randomString(length) {

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = letters[Math.floor(Math.random() * letters.length)];

  for (let i = length - 1; i > 0; --i) {

    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
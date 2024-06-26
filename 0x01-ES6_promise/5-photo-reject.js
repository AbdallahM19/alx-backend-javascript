export default function uploadPhoto(filename) {
  const newpromis = Promise.reject(new Error(`${filename} cannot be processed`));
  return newpromis;
}

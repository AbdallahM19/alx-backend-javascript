import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const dict = {};

  try {
    dict.photo = await uploadPhoto();
    dict.user = await createUser();
  } catch (error) {
    dict.photo = null;
    dict.user = null;
  }
  return dict;
}

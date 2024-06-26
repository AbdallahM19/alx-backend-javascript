import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const array = [];
  const functionone = signUpUser(firstName, lastName);
  const functiontwo = uploadPhoto(fileName);

  return Promise.allSettled([functionone, functiontwo]).then((res) => {
    res.forEach((r) => {
      if (r.status === 'fulfilled') {
        array.push({ status: r.status, value: r.value });
      } else {
        array.push({ status: r.status, value: r.reason });
      }
    });
    return array;
  });
}

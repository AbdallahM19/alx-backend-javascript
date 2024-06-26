import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const functionone = await signUpUser(firstName, lastName);
  const functiontwo = await uploadPhoto(fileName);

  return Promise
    .allSettled([functionone, functiontwo])
    .then((res) => {
      res.map((r) => ({
        status: r.status,
        value: r.status === 'fulfilled' ?  r.value : String(r.reason),
      }))
    });
}

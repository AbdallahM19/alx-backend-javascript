import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const functionone = signUpUser(firstName, lastName);
  const functiontwo = uploadPhoto(fileName);

  return Promise.allSettled([functionone, functiontwo]).then((res) => {
    res.map((r) => ({
      status: r.status,
      value: r.status === 'fulfilled' ? r.value : String(r.reason),
    }));
  });
}

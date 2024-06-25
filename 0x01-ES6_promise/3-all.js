import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((res) => {
    const [photo, user] = res;
    console.log(photo.body, user.firstName, user.lastName);
  }).catch((error) => {
    console.log('Signup system offline', error);
  });
}
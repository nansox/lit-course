// const headers = {
//   Authorization: 'PUT TOKEN',
// };
const headers = null;

export const getUserByName = async (name) =>
  fetch(`https://api.github.com/users/${name}`, headers ? { headers } : undefined);

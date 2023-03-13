export const getUserByName = async (name) =>
  fetch(`https://api.github.com/users/${name}`, {
    headers: {
      Authorization: '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',
    },
  });

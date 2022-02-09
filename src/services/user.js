export const fetchUser = (user) => {
  return fetch(`https://api.github.com/users/${user}`).then((resp) =>
    resp.json()
  );
};

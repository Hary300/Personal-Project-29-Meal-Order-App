// export const authStorage = {
//   getToken: () => localStorage.getItem('token'),
//   setToken: (token: string) => localStorage.setItem('token', token),
//   removeToken: () => localStorage.removeItem('token'),
// };

export const authStorage = {
  getToken() {
    if (typeof window === 'undefined') return null;

    return localStorage.getItem('token');
  },

  setToken(token: string) {
    if (typeof window === 'undefined') return;

    localStorage.setItem('token', token);
  },

  removeToken() {
    if (typeof window === 'undefined') return;

    localStorage.removeItem('token');
  },
};

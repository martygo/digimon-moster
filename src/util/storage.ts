export const saveUser = (value: string) => window.localStorage.setItem('username', value);

export const getUser = (key: string) => window.localStorage.getItem(key);

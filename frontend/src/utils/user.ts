import IUser from 'interfaces/IUser';

const getUser = async (): Promise<IUser> => {
  let token: string = localStorage.getItem('token') || '{}';
  let httpHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const request = new Request('/api/users/me', {
    method: 'GET',
    headers: new Headers(httpHeaders),
  });

  const response = await fetch(request);

  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();
  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail;
    }
    throw data;
  }
  return data;
};

export const getUsers = async (): Promise<IUser> => {
  let token: string = localStorage.getItem('token') || '{}';
  let httpHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const request = new Request('/api/users', {
    method: 'GET',
    headers: new Headers(httpHeaders),
  });

  const response = await fetch(request);

  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();
  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail;
    }
    throw data;
  }
  return data;
};

export default getUser;

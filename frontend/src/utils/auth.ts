import IUser from 'interfaces/IUser';
import decodeJwt from 'jwt-decode';

export const isAuthenticated = () => {
  const permissions = localStorage.getItem('permissions');
  if (!permissions) {
    return false;
  }
  return permissions === 'user' || permissions === 'admin' ? true : false;
};

/**
 * Login to backend and store JSON web token on success
 *
 * @param email
 * @param password
 * @returns JSON data containing access token on success
 * @throws Error on http errors or failed attempts
 */
export const login = async (email: string, password: string) => {
  // Assert email or password is not empty
  if (!(email.length > 0) || !(password.length > 0)) {
    throw new Error('Email or password was not provided');
  }
  const formData = new FormData();
  // OAuth2 expects form data, not JSON data
  formData.append('username', email);
  formData.append('password', password);

  const request = new Request('/api/token', {
    method: 'POST',
    body: formData,
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
  if ('access_token' in data) {
    const decodedToken: any = decodeJwt(data['access_token']);
    localStorage.setItem('token', data['access_token']);
    localStorage.setItem('permissions', decodedToken.permissions);
  }

  return data;
};

/**
 * Sign up via backend and store JSON web token on success
 *
 * @param email
 * @param password
 * @returns JSON data containing access token on success
 * @throws Error on http errors or failed attempts
 */
export const signUp = async (
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  passwordConfirmation: string
) => {
  // Assert email or password or password confirmation is not empty
  if (!(email.length > 0)) {
    throw new Error('Email was not provided');
  }
  if (!(firstname.length > 0)) {
    throw new Error('First Name was not provided');
  }
  if (!(lastname.length > 0)) {
    throw new Error('Last Name was not provided');
  }
  if (!(password.length > 0)) {
    throw new Error('Password was not provided');
  }
  if (!(passwordConfirmation.length > 0)) {
    throw new Error('Password confirmation was not provided');
  }

  const formData = new FormData();
  // OAuth2 expects form data, not JSON data
  formData.append('username', email);
  formData.append('first_name', firstname);
  formData.append('last_name', lastname);
  formData.append('password', password);

  const request = new Request('/api/signup/' + firstname + '/' + lastname, {
    method: 'POST',
    body: formData,
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

  if ('access_token' in data) {
    const decodedToken: any = decodeJwt(data['access_token']);
    localStorage.setItem('token', data['access_token']);
    localStorage.setItem('permissions', decodedToken.permissions);
  }

  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('permissions');
};


/**
 * update user info
 *
 * @param email
 * @param userID
 * @param firstname
 * @param lastname
 * @returns JSON data on success
 * @throws Error on http errors or failed attempts
 */
 export const updateUser = async (
  ...props:any
) => {
  let token:string = localStorage.getItem('token')||'{}';
  let httpHeaders = {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
  };

  let userData;
  //5 for change names
  if(props.length == 5){
    console.log(props.length);
    userData = { user_id : props[0], email: props[1], first_name: props[2], last_name: props[3] };
    console.log(userData);
  //3 for change points
  }else if(props.length == 3){
    userData = {user_id : props[0], email: props[1], points: props[2]};
    console.log(userData);
  }

  const request = new Request(`/api/users/${props[0]}`, {
    method: 'PUT',
    headers: new Headers(httpHeaders),
    body: JSON.stringify(userData)
  });

  const response = await fetch(request);


  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();
  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      console.log(data.detail);
    }
    throw data;
  }

  return data;
};

/**
 * update user password
 *
 * @param email
 * @param userID
 * @param newPassword
 * @returns JSON data on success
 * @throws Error on http errors or failed attempts
 */
 export const updateUserPassword = async (
  userID: any,
  email: any,
  newPassword: string,
) => {
  let token:string = localStorage.getItem('token')||'{}';
  let httpHeaders = {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
  };

  const userData = {email: email, password: newPassword};

  const request = new Request(`/api/users/${userID}`, {
    method: 'PUT',
    headers: new Headers(httpHeaders),
    body: JSON.stringify(userData)
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

/**
 * delete user
 *
 * @param userID
 * @returns JSON data on success
 * @throws Error on http errors or failed attempts
 */
 export const deleteUser = async (
  userID: any,
) => {
  let token:string = localStorage.getItem('token')||'{}';
  let httpHeaders = {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
  };

  const request = new Request(`/api/users/${userID}`, {
    method: 'DELETE',
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
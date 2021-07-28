import IPerformsActivities from "interfaces/IPerformsActivities";

const getPerformsActivities = async() : Promise<IPerformsActivities> =>{
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = { 
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    };
    const request = new Request('/api/performsActivities', {
      method: 'GET',
      headers: new Headers(httpHeaders)
      },
    );

  
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
  }


  export const performsActivity = async (
    userId: number,
    activityId: number,
    date: string,
    effort: number,
  
  ) => {
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    };

    // Assert email or password or password confirmation is not empty
    if (!(userId)) {
      throw new Error('User ID was not provided');
    }
    if (!(activityId)) {
      throw new Error('Activity ID was not provided');
    }
    if (!(date.length > 0)) {
      throw new Error('Date was not provided');
    }

    const userData = {user_id : userId, activities_id : activityId, date : date, effort: effort};
  
    const request = new Request('/api/performsActivities', {
      method: 'POST',
      headers: new Headers(httpHeaders),
      body: JSON.stringify(userData),
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

  export const deletePerformsActivity = async (
    performsActivityID: number,
  ) => {
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
    };
  
    const request = new Request(`/api/performsActivities/${performsActivityID}`, {
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

export default getPerformsActivities;
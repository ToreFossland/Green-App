import IPerformsChallenges from "interfaces/IperformsChallenges";

const getPerformsChallenge = async() : Promise<IPerformsChallenges> =>{
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = { 
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    };
    const request = new Request('/api/performsChallenge', {
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
        console.log(data.detail);
      }
      throw data;
    }
    return data;
  }


  export const performsChallenge = async (
    challengeId: number,
    performsActivityId: number
  
  ) => {
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    };

    // Assert email or password or password confirmation is not empty
    if (!(challengeId)) {
      throw new Error('Challenge ID was not provided');
    }
    if (!(performsActivityId)) {
      throw new Error('PerformsActivity ID was not provided');
    }

    const userData = {challenge_id : challengeId, performsActivty_id : performsActivityId};
  
    const request = new Request('/api/performsChallenge', {
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

  export const deletePerformsChallenge = async (
    performsChallengeID: number,
  ) => {
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
    };
  
    const request = new Request(`/api/performsChallenge/${performsChallengeID}`, {
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
        console.log(data.detail);
      }
      throw data;
    }
    return data;
  };

  export default getPerformsChallenge;
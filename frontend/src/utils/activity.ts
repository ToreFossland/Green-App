import IActivity from "interfaces/IActivity";
import { useState } from "react";

const getActivities = async() : Promise<IActivity> =>{
    let token:string = localStorage.getItem('token')||'{}';
    let httpHeaders = { 
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${token}`
    };
    const request = new Request('/api/activities', {
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

export default getActivities;
// import React, { createContext, useEffect, useState } from "react";
// import getUser from './getUser';

// interface User {
//     email: string
//     is_active: boolean
//     is_superuser: boolean
//     first_name: string
//     last_name: string
//     company: string
//     points: bigint
// }

// interface IContextProps {
//   user: User;
//   //dispatch: ({type}:{type:string}) => void;
// }

// const UserContext = createContext({} as IContextProps);

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState<any>();
//   let token = localStorage.getItem("token");
//   useEffect(() => {
//     let user = getUser();
//     console.log(user);
//     setUser(user);
//   }, [token]);

//   //   co]st [firstNFirstzn
//   //   const [lastName, setLastName] = useState();
//   //   const []
//   //   const [firstName, setFirstName] = useState("Joh");
//   //   const [gosnts, setPoints]eSauteSta(;
//   //   const [points, setPoints] = useState();
//     return (
//       <UserContext.Provider value={{ user }}>
//         {children}
//       </UserContext.Provider>
//     );
//   };

//   // const withUser = (Child) => (props) => (
//   //   <UserContext.Consumer>
//   //     {(context) => <Child {...props} {...context} />}
//   //     {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
//   //   </UserContext.Consumer>
//   //);

//   export { UserProvider};
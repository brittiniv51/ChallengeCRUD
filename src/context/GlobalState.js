// import React, { createContext, useReducer } from "react";
// import AppReducer from './AppReducer';

// const initialState = {
//   ingredients: [
//     {
//       id: 1, 
//       name: "cilantro",
//       type: "herb"
//     }
//   ]
// }; 

// export const GlobalContext = createContext(initialState);
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   function removeIngredient(id) {
//     dispatch ({
//       type: "REMOVE_INGREDIENT",
//       payload: ingredients
//     });
//   }

//   function addEmployee(employees) {
//     dispatch({
//       type: "ADD_INGREDIENTS",
//       payload: ingredients
//     });
//   }

//  return (
// <GlobalContext.Provider
// value={{
//   ingredients: state.ingredients,
//   removeIngredient,
// }}
// >
// {children}
// </GlobalContext.Provider>
//  );
// };

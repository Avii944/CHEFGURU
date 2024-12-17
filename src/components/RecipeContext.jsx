import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [clickedImg, setClickedImg] = useState(""); // Add clickedImg state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add authentication state
  const [userId, setUserId] = useState(null); // Add userId state

  return (
    <RecipeContext.Provider
      value={{
        ingredient,
        setIngredient,
        recipes,
        setRecipes,
        isSearched,
        setIsSearched,
        clickedImg,
        setClickedImg,
        isAuthenticated, // Provide authentication state
        setIsAuthenticated,
        userId, // Provide userId state
        setUserId,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

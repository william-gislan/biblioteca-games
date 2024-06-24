import { useState } from "react";

export default function useGame() {
  
  
  const [games, setGames] = useState(() => {
    const storedGame = localStorage.getItem("obj-lib");
    if(!storedGame){
      return [];
    } else{
      return JSON.parse(storedGame);
    }
  }); 
  
  const addGame = ({title, cover}) => {
    let id = games.length + 1;
    const game = ({ id, title,cover});
    setGames((state) => {
      const newGame = [...state, game];//state seria o array no estado atual então vai somar mais o novo valor que sera o game
      localStorage.setItem("obj-lib", JSON.stringify(newGame));
      return newGame;
    });
    
    console.log(games);
  
  };
  
  const deleteGame = (id) => {
    setGames(state => {
      const newGame = state.filter(game => game.id !== id);
      localStorage.setItem("obj-lib", JSON.stringify(newGame));
      return newGame;
    });
  };
  return{addGame,deleteGame, games};
};
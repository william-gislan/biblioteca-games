import Games from "./components/Games";
import Form from "./components/Form"
import useGameCollection from "./hooks/useGameCollecion";


export default function App() {
  const {games, addGame, deleteGame } = useGameCollection();

  return(
    <div>
      <h1>Biblioteca de Jogos</h1>
      <Form addGames={addGame} />
      <div className="games">
        {games.map(game => {
          return(
              <Games
                key={game.id}
                cover={game.cover}
                title={game.title}
                onRemove={() => deleteGame(game.id)}
              />
          );
        })}
      </div>
    </div>
  );
};
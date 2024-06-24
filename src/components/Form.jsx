import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInputs";

Form.propTypes = {
  addGames:PropTypes.func
}

export default function Form({addGames}){
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");


  const handleBoardClick = (ev) => {
    ev.preventDefault();
    addGames({title, cover});
    setCover("");
    setTitle("");
  };

  return(
    <form onSubmit={handleBoardClick}>
      
          <TextInput
            title="titulo"
            id={title}
            value={title}
            setValue={setTitle}
          />
      
          <TextInput
            title="Capa"
            id={cover}
            value={cover}
            setValue={setCover}
          />

        <button type="submit">Salvar Game</button>
    </form>
  );
}
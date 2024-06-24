import PropTypes from "prop-types";

Games.protoType = {
  onRemove:PropTypes.func
}



export default function Games({id, cover, title, onRemove}) {
  return(
    <div key={id}>
      <img src={cover} alt="" />
      <div>
        <p>{title}</p>
        <button onClick={onRemove}>Deletar</button>
      </div>
    </div>
  );
};
import PropTypes from "prop-types";

TextInput.protoType = {
  setValue:PropTypes.func
};


export default function TextInput({id, value, title, setValue}) {
  return(
    <div>
          <label htmlFor="title">{title}</label>
          <input 
            type="text" 
            name="title" 
            id={id}
            value={value}
            onChange={(c) => setValue(c.target.value)} 
        />
        </div>
  );
}
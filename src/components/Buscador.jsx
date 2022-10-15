import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export const Buscador = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) =>{
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim())
    setInputValue(' ')
  }

  return (
  
      <Form className="mt-3" onSubmit={onSubmit}>
        <Form.Control type="text" placeholder="Ingresar personaje" onChange={onInputChange} value={inputValue}/>
        <Button variant="primary" className="mt-2" onClick={onSubmit}>
          Buscar
        </Button>
      </Form>

  );
};

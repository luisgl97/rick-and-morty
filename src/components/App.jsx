import { useState } from "react";

import Container  from "react-bootstrap/Container";

import { PersonajesGrid } from "./PersonajesGrid"
import { Buscador } from "./Buscador";
import { Nav } from "./Nav";

export const App = () => {

  const [categories, setCategories] = useState(['Rick'])

  const onAddCategory = (newCategory) => {
    const exist = categories.some(
      (cat) => cat.toLocaleLowerCase() === newCategory.toLocaleLowerCase()
    );

    if (exist) return;
    setCategories([newCategory, ...categories]);
  };


  return (
    <div>
      <Nav />
      <Container>
        <Buscador onAddCategory={onAddCategory} />
        {
          categories.map((category)=>(
            <PersonajesGrid key={category} category={category} />
          ))
        }
      </Container>
     
    
    </div>
  );
};

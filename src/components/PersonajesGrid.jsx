import { useState, useEffect } from "react";
import { PersonajeItem } from "./PersonajeItem";

export const PersonajesGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const useFetchAPI = async () => {
    try {
      const url = `https://rickandmortyapi.com/api/character/?name=${category}`;
      const response = await fetch(url);
      const { results } = await response.json();
      // console.log(results);
      const imagenes = results.map((img) => ({
        id: img.id,
        name: img.name,
        image: img.image,
      }));
      return imagenes;
    } catch (error) {
      console.log("No se encontro el personaje");
    }
  };

  const getPersonajes = async () => {
    const newImages = await useFetchAPI();
    setImages(newImages);
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <>
      <h1 className="mt-2">{category}</h1>
      <div className="card-grid">
        {images.map((image) => (
          <PersonajeItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

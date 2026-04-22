const CardMovie = ({ movie }) => {
  return (
    <div>
      {/* Contenido superior */}
      <div>
        <h3>pelicula</h3>
        <p>descripcion </p>
        <p>Categoría:</p>
      </div>
      {/* Botón Eliminar siempre al final */}
      <div>
        <button>Eliminar</button>
      </div>
    </div>
  );
};

export default CardMovie;

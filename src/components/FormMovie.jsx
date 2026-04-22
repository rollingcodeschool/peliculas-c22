import GridMovie from "./GridMovie";

const FormMovie = () => {
  return (
    <section>
      <form>
        {/* Campo: Nombre */}
        <div>
          <label>Nombre película</label>
          <input type="text" placeholder="Ej: Titanic" name="nombrePelicula" />
          {/* <p className="text-sm text-red-600 mt-2">Un error posible</p> */}
          <p>ocurrio un error</p>
        </div>

        {/* Campo: Descripción */}
        <div>
          <label>Descripción</label>
          <textarea rows="3" placeholder="Resumen de la trama..." />
          <p>ocurrio un error</p>
        </div>

        {/* Campo: Categoría */}
        <div>
          <label>Categoría</label>
          <select name="categoria">
            <option value="">Seleccione una categoría</option>
            <option value="aventura">Aventura</option>
            <option value="comedia">Comedia</option>
            <option value="romance">Romance</option>
            <option value="terror">Terror</option>
          </select>
          <p>ocurrio un error</p>
        </div>

        {/* Botón */}
        <button type="submit">Enviar Película</button>
      </form>
      <GridMovie></GridMovie>
    </section>
  );
};

export default FormMovie;

import { useForm } from "react-hook-form";
import GridMovie from "./GridMovie";
import { useState } from "react";

const FormMovie = () => {
  const [peliculas, setPeliculas] = useState([])

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm()

 
  const crearPelicula = (pelicula, e)=>{
    const nuevaPelicula = {
      ...pelicula, id:crypto.randomUUID()
    }
    console.log(pelicula)
    console.log(e)
    //guardar pelicula en el array
    setPeliculas([...peliculas, nuevaPelicula])
    //limpiar el formulario
    e.target.reset()
  }

  return (
    <section>
      <form className="border border-slate-300 dark:border-slate-700 p-8 rounded-lg bg-white dark:bg-slate-800 transition-colors" onSubmit={handleSubmit((pelicula, e)=> crearPelicula(pelicula, e))}>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-slate-700 dark:text-slate-200">Nombre película</label>
          <input type="text" placeholder="Ej: Titanic"  className="w-full border border-slate-300 dark:border-slate-600 rounded p-2 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/80"name="nombrePelicula" {...register('nombrePelicula', {
            required: 'El nombre de la pelicula es un dato obligatorio',
            minLength:{
              value: 2,
              message: 'El nombre de la pelicula debe contener como minimo 2 caracteres'
            },
            maxLength:{
              value: 50,
              message: 'El nombre de la pelicula debe contener como maximo 50 caracteres'
            }
          })}/>
          {/* <p className="text-sm text-red-600 mt-2">Un error posible</p> */}
          <p className="text-sm text-red-600 mt-2">{errors.nombrePelicula?.message}</p>
        </div>

        {/* Campo: Descripción */}
        <div>
          <label>Descripción</label>
          <textarea rows="3" placeholder="Resumen de la trama..." className="w-full border border-slate-300 dark:border-slate-600 rounded p-2 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/80" {...register('descripcion', {
            required: 'La descripción es un dato obligatorio',
            minLength:{
              value: 5,
              message: 'La descripción debe contener como minimo 5 caracteres'
            },
            maxLength:{
              value: 300,
              message: 'La descripción debe contener como maximo 300 caracteres'
            },
            pattern:{
              value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/,
              message: 'La descripción solo puede contener caracteres de la A a la Z y numeros.'
            }
          })}/>
          <p className="text-sm text-red-600 mt-2">{errors.descripcion?.message}</p>
        </div>

        {/* Campo: Categoría */}
        <div>
          <label>Categoría</label>
          <select name="categoria"   className="w-full border border-slate-300 dark:border-slate-600 rounded p-2 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/80" {...register('categoria', {required:'Debes seleccionar una categoria'})}>
            <option value="">Seleccione una categoría</option>
            <option value="aventura">Aventura</option>
            <option value="comedia">Comedia</option>
            <option value="romance">Romance</option>
            <option value="terror">Terror</option>
          </select>
          <p className="text-sm text-red-600 mt-2">{errors.categoria?.message}</p>
        </div>

        {/* Botón */}
        <button type="submit"  className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto cursor-pointer">Enviar Película</button>
      </form>
      <GridMovie></GridMovie>
    </section>
  );
};

export default FormMovie;

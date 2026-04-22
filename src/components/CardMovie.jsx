import React from "react";

const CardMovie = () => {
  return (
    <div className="flex flex-col h-full border border-slate-300 dark:border-slate-700 rounded-lg p-5 bg-white dark:bg-slate-800 transition-colors shadow-sm">
      {/* Contenido superior */}
      <div className="grow">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white uppercase">
          pelicula
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-md leading-relaxed wrap-break-word">
          descripcion
        </p>
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
          Categoría: 
        </p>
      </div>
      {/* Botón Eliminar siempre al final */}
      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
        <button className="w-full py-2 px-4 bg-red-600 text-white rounded font-medium text-sm hover:bg-red-700 transition-colors duration-300 shadow-sm cursor-pointer">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardMovie;

import React from "react";
import CardMovie from "./CardMovie";

const GridMovie = ({movies}) => {
  return (
    // grid-cols-1 (móvil), sm:grid-cols-2 (tablet), lg:grid-cols-4 (desktop)
    <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardMovie></CardMovie>    
      <CardMovie></CardMovie>    
      <CardMovie></CardMovie>    
      <CardMovie></CardMovie>    
    </div>
  );
};

export default GridMovie;

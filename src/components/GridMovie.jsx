import React from "react";
import CardMovie from "./CardMovie";

const GridMovie = ({movies}) => {
  return (
    // grid-cols-1 (móvil), sm:grid-cols-2 (tablet), lg:grid-cols-4 (desktop)
    <div >
      <CardMovie></CardMovie>    
    </div>
  );
};

export default GridMovie;

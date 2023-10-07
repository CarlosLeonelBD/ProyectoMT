import React from "react";

export default function Sort({ handleSort }) {
  const changeValue = (e) => {
    const value = e.target.value;
    handleSort(value);
  };
  return (
    <select className="selectpicker ml-auto" onChange={changeValue}>
      <option value="default">Clasificación por defecto</option>
      <option value="DownToUp">Precios de barato a caro</option>
      <option value="UpToDown">Precio: de mayor a menor</option>
    </select>
  );
}



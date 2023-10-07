import React from "react";
import { NavLink } from "react-router-dom";

export default function CartEmpty() {
  return (
    <div className=" d-flex flex-column text-center align-items-center my-5">
      <div>
        <img
          src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-smartphone-online-shop-logo-design-with-click-icon-png-image_8647135.png"
          alt="img"
          width={350}
          height={350}
        />
      </div>
      <div>
        <p className="mb-4 font-weight-normal ">
          {" "}
          No tiene artículos en su carrito de compras
        </p>
        <NavLink
          to="/shop"
          className="text-sm text-center py-3 px-4 border border-dark bg-dark text-white hover-zoom my-5"
        >
          SEGUIR COMPRANDO
        </NavLink>
      </div>
    </div>
  );
}

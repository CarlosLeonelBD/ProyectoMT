/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6">
            <p className="small text-muted mb-0">
              &copy; 2023 Reservados todos los derechos.
            </p>
          </div>
          <div className="col-lg-6 text-lg-right">
            <p className="small text-muted mb-0">
              Diseñado por{" "}
              <a className="text-white reset-anchor" href="#">
                Jordy Vega
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

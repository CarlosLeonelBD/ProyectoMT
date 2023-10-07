/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import {
  createProduct,
  deleteProduct,
  getListProductFilter,
  getListProductPanigation,
} from "../../services/API/productApi";
import Pagination from "@mui/material/Pagination";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ProductsAdmin() {
  const productPanigation = useSelector(
    (state) => state.product.productPanigation?.allProductPanigation
  );
  const productFilter = useSelector(
    (state) => state.product.productFilter?.allProductFilter
  );

  const [page, setPage] = useState(1);
  const [sort] = useState("default");
  const [totalPage, setTotalPage] = useState();
  const [pagination, setPagination] = useState({
    page: "1",
    size: "9",
    search: "",
    category: "all",
  });
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      const params = {
        page: pagination.page,
        size: pagination.size,
        search: pagination.search,
        category: pagination.category,
      };

      const query = queryString.stringify(params);
      const newQuery = "?" + query;
      await getListProductPanigation(dispatch, newQuery);
    })();
  }, [pagination, page, sort, load, dispatch]);

  useEffect(() => {
    (async () => {
      const params = {
        page: "",
        size: "",
        search: pagination.search,
        category: pagination.category,
      };

      const query = queryString.stringify(params);
      const newQuery = "?" + query;
      await getListProductFilter(dispatch, newQuery);
    })();
  }, [dispatch, page, pagination, sort]);

  useEffect(() => {
    let totalProduct = productFilter?.length;
    totalProduct = Math.ceil(totalProduct / pagination.size);
    setTotalPage(totalProduct);
  }, [page, pagination, sort, productFilter]);

  const handleChangePage = (e, value) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    setPage(value);

    setPagination({
      page: value,
      size: pagination.size,
      search: pagination.search,
      category: pagination.category,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      category: "",
      originalPrice: "",
      promotionPercent: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("(*) El nombre completo no está vacío."),
      description: Yup.string().required("(*) La descripción no está vacía."),
      price: Yup.string()
        .required("(*) El precio no está vacío.")
        .matches(/^[0-9]+$/, "El precio no es válido"),
      img1: Yup.string().required("(*) Img1 está vacío"),
      img2: Yup.string().required("(*) Img2 está vacío"),
      img3: Yup.string().required("(*) Img3 está vacío"),
      img4: Yup.string().required("(*) Img4 está vacío"),
      category: Yup.string().required("(*) La categoría no está vacía"),
      originalPrice: Yup.string()
        .required("(*) El precio original está vacío.")
        .matches(/^[0-9]+$/, "El precio original no es valido"),
      promotionPercent: Yup.string()
        .required("(*) El porcentaje de promoción no está vacío.")
        .matches(/^[0-9]+$/, "Promocion no valida"),
    }),
    onSubmit: async (value) => {
      await createProduct(dispatch, value);
      setLoad(!load);
    },
  });

  const handleDelete = async (id) => {
    await deleteProduct(dispatch, id);
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-7 align-self-center">
            <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
              Registro de productos
            </h4>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-muted">
                      Inicio
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-muted active"
                    aria-current="page"
                  >
                    Tabla
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Productos</h4>
                <div className="d-flex">
                  <input
                    className="form-control w-25"
                    type="text"
                    placeholder="Buscar producto"
                  />
                  <div>
                    <button
                      type="button"
                      className="btn btn-success mx-2"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                    >
                      Añadir producto
                    </button>

                    <div
                      className="modal fade bd-example-modal-lg"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                              >
                                Añadir producto
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>

                            <div className="container-fluid">
                              <div className="row p-3">
                                <div className="col-6">
                                  <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                      type="text"
                                      name="name"
                                      className="form-control"
                                      id="name"
                                      placeholder="Nombre"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.name}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="description">
                                      Descripcion
                                    </label>
                                    <input
                                      name="description"
                                      type="text"
                                      className="form-control"
                                      id="descripcion"
                                      placeholder="Enter description"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.description}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="price">Precio</label>
                                    <input
                                      name="price"
                                      type="text"
                                      className="form-control"
                                      id="price"
                                      placeholder="Precio Q"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.price}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="img1">Imagen 1</label>
                                    <input
                                      name="img1"
                                      type="text"
                                      className="form-control"
                                      id="img1"
                                      placeholder="Imagen 1"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.img1}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="img2">Imagen 2</label>
                                    <input
                                      name="img2"
                                      type="text"
                                      className="form-control"
                                      id="img2"
                                      placeholder="Imagen 2"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.img2}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group">
                                    <label htmlFor="img3">Imagen 3</label>
                                    <input
                                      name="img3"
                                      type="text"
                                      className="form-control"
                                      id="img3"
                                      placeholder="Imagen 3"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.img3}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="img4">Imagen 4</label>
                                    <input
                                      name="img4"
                                      type="text"
                                      className="form-control"
                                      id="img4"
                                      placeholder="Imagen 4"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.img4}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="category">Categoria</label>
                                    <input
                                      name="category"
                                      type="text"
                                      className="form-control"
                                      id="category"
                                      placeholder="Categoria"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.category}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="originalPrice">
                                      Precio original
                                    </label>
                                    <input
                                      name="originalPrice"
                                      type="text"
                                      className="form-control"
                                      id="originalPrice"
                                      placeholder="Precio Original"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.originalPrice}
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="promotionPercent">
                                      Promocion
                                    </label>
                                    <input
                                      name="promotionPercent"
                                      type="text"
                                      className="form-control"
                                      id="promotionPercent"
                                      placeholder="Promocion"
                                      onChange={formik.handleChange}
                                    />
                                    <p className="text-2xs text-danger">
                                      {formik.errors.promotionPercent}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Cancelar
                              </button>
                              <button type="submit" className="btn btn-success">
                                Guardar
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <div className="table-responsive">
                  <table className="table table-striped table-bordered no-wrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productPanigation?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                              <img
                                src={item.img1}
                                style={{ height: "60px", width: "60px" }}
                                alt={item.img1}
                              />
                            </td>
                            <td>{item.category}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-success mx-2"
                                style={{ cursor: "pointer", color: "white" }}
                              >
                                Actualizar
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                style={{ cursor: "pointer", color: "white" }}
                                className="btn btn-danger"
                                onClick={() => handleDelete(item.id)}
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <Pagination
                    count={totalPage}
                    page={page}
                    onChange={handleChangePage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-center text-muted">
        © 2023 Reservados todos los derechos. <a href="">Jordy Vega</a>.
      </footer>
    </div>
  );
}

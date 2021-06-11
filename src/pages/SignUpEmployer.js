import React from "react";
import { useFormik } from "formik";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignUpEmployer.css";
import EmployerService from "../services/employerService";

export default function SignUpEmployer() {
  let employerService = new EmployerService();
  const formik = useFormik({
    initialValues: {
      companyName: "",
      confirmPassword: "",
      email: "",
      password: "",
      phoneNumber: "",
      webAddress: "",
    },
    onSubmit: (values) => {
      employerService.addEmployer(values).then((result) => {
        if (result.data.success) {
          alert(result.data.message);
        }
      });
    },
  });
  return (
    <div>
      <div className="container-form">
        <form onSubmit={formik.handleSubmit} className="align-items-center">
          <div className="mb-3 col-lg-4  col-md-4 ">
            <label htmlFor="email" className="form-label float-start">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4 ">
            <label htmlFor="companyName" className="form-label float-start">
              Şirket Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4 ">
            <label htmlFor="webAddress" className="form-label float-start">
              Web Adresi
            </label>
            <input
              type="text"
              className="form-control"
              id="webAddress"
              onChange={formik.handleChange}
              value={formik.values.webAddress}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4">
            <label htmlFor="phoneNumber" className="form-label float-start">
              Telefon Numarası
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4 ">
            <label htmlFor="password" className="form-label float-start">
              Şifre
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4 ">
            <label htmlFor="confirmPassword" className="form-label float-start">
              Şifre Tekrarı
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="float-start btn btn-primary col-md-4 col-lg-2"
          >
            Üye Ol
          </button>
        </form>
      </div>
    </div>
  );
}

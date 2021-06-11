import React from "react";
import { useFormik } from "formik";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignUpCandidate.css";
import CandidateService from "../services/candidateService";

export default function SignUpEmployer() {
  let candidateService = new CandidateService();
  const formik = useFormik({
    initialValues: {
      birthYear: 0,
      confirm_password: "",
      email: "",
      firstName: "",
      lastName: "",
      nationalIdentity: "",
      password: "",
    },
    onSubmit: (values) => {
      candidateService.addCandidate(values).then((result) => {
        alert(result.data.message);
      });
    },
  });
  return (
    <div>
      <div className="container-form">
        <form onSubmit={formik.handleSubmit} className="align-items-center">
          <div className="mb-3 col-lg-4  col-md-4 ">
            <label htmlFor="birthYear" className="form-label float-start">
              Doğum Yılı
            </label>
            <input
              type="number"
              className="form-control"
              id="birthYear"
              onChange={formik.handleChange}
              value={formik.values.birthYear}
            />
          </div>
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
            <label htmlFor="firstName" className="form-label float-start">
              Tam Adınız
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4 ">
            <label htmlFor="lastName" className="form-label float-start">
              Tam Soyadınız
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div className="mb-3 col-lg-4 col-md-4">
            <label
              htmlFor="nationalIdentity"
              className="form-label float-start"
            >
              TC Kimlik No
            </label>
            <input
              type="text"
              className="form-control"
              id="nationalIdentity"
              onChange={formik.handleChange}
              value={formik.values.nationalIdentity}
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
              value={formik.values.confirm_password}
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

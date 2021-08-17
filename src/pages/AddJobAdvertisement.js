import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobService from "../services/jobService";
import CityService from "../services/cityService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddJobAdvertisement.css";
import { Container, Button, Icon } from "semantic-ui-react";

export default function AddJobAdvertisement() {
  let jobAdvertisementService = new JobAdvertisementService();
  const [cities, setcities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    let jobTitleService = new JobService();
    cityService.getAllCity().then((result) => setcities(result.data.data));
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      createdDate: new Date().toISOString().slice(0, 10),
      employerId: 10,
      lastApplicationDate: "",
      positionSize: 0,
    },
    onSubmit: (values) => {
      values.jobTitleId = parseInt(values.jobTitleId);
      values.cityId = parseInt(values.cityId);

      jobAdvertisementService.add(values).then((result) => {
        alert(result.data.message);
      });
      console.log(JSON.stringify(values));
    },
  });
  return (
    <div style={{marginLeft:10}}>
      <div className="job-advertisement-header">
        <h5>İlan Ekle</h5>
      </div>
      <hr />
      <div className="job-advertisement-form">
        <form onSubmit={formik.handleSubmit} className="align-items-center">
          <div className="row ">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <label htmlFor="cityId" className="cityId-select-label">
                Şehir
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="cityId"
                onChange={formik.handleChange}
              >
                <option defaultValue=""> Şehir Seçin</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.cityName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              <label htmlFor="jobTitleId" className="jobTitleId-select-label">
                İş Pozisyonu
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="jobTitleId"
                onChange={formik.handleChange}
              >
                <option defaultValue=""> İş Pozisyonu Seçin</option>
                {jobTitles.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <label htmlFor="worktype" className="worktype-select-label">
                Çalışma Türü
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="workType"
                onChange={formik.handleChange}
              >
                <option defaultValue=""> İş Türü Seçiniz</option>
                <option key="1" value="Uzaktan Çalışma">
                  Uzaktan Çalışma
                </option>
                <option key="2" value="İş Yerinden Çalışma">
                  İiş yerinden Çalışma
                </option>
              </select>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              <label
                htmlFor="workTimeType"
                className="worktimetype-select-label"
              >
                Çalışma Zamanı
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="workTimeType"
                onChange={formik.handleChange}
              >
                <option defaultValue=""> Çalışma Zamanı Seçiniz</option>
                <option key="1" value="Tam Zamanlı">
                  Tam Zamanlı
                </option>
                <option key="2" value="Yarı Zamanlı">
                  Yarı Zamanlı
                </option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <label htmlFor="positionSize" className="positionSize-label">
                Açık Pozisyon Sayısı
              </label>
              <input
                type="number"
                className="form-control"
                id="positionSize"
                onChange={formik.handleChange}
                value={formik.values.positionSize}
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              <label
                htmlFor="lastApplicationDate"
                className="lastApplicationDate-label"
              >
                Son Başvuru Tarihi
              </label>
              <input
                type="date"
                className="form-select"
                id="lastApplicationDate"
                onChange={formik.handleChange}
                value={formik.values.lastApplicationDate}
              />
            </div>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="İlan Detayları..."
              id="positionSummary"
              onChange={formik.handleChange}
              style={{ minHeight: 150 }}
            ></textarea>
            <label htmlFor="positionSummary">İlan detayları...</label>
          </div>
          <Button
            positive
            floated="right"
            style={{ marginRight: 30 }}
            className="d-flex align-items-center"
          >
            <Icon name="plus" style={{ paddingTop: 10 }} />
            İlan Oluştur
          </Button>
        </form>
      </div>
    </div>
  );
}

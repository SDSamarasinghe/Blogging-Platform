import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const BlogAdd = () => {
  const [listOfAds, setListOfAdvertisement] = useState([]);
  const [type, setType] = useState("Something else here");
  const [message, setmessage] = useState("");
  const [Publish_Date, setPublish_Date] = useState("");
  const [img, setImg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };

  const validate = () => {
    const errors = {};
    if (!type) {
      errors.type = "type is required!";
    }
    if (!message) {
      errors.message = "message is required!";
    }
    
    if (!Publish_Date) {
      errors.Publish_Date = "Date is required!";
    }
    if (!img) {
      errors.img = "Image is required!";
    }
    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createAd();
    }
  };

  const createAd = () => {
    axios
      .post("http://localhost:8000/api/Blogger/", {
        type,
        message,
        Publish_Date,
        img,
      })
      .then((response) => {
        setListOfAdvertisement([
          ...listOfAds,
          {
            type,
            message,
            Publish_Date,
            img,
          },
        ]);
      });
    swal({
      title: "Blog Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.href = "/Ads/AdminView";
    });
  };

  return (
    <div
      style={{
       // backgroundImage: `url(${adformback2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <br />
      <h1
        style={{
          fontFamily: "Georgia",
          fontSize: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        Advertiser Form
      </h1>
      <br />
      <div style={{ backgroundColor: "black" }}></div>
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          borderRadius: "30px",
          border: "3px solid green",
          margin: "2px",
        }}
      >
        <br />
        <form style={{ margin: "20px" }}>
          <br />
          <div className="row mb-3">
            <label class="col-sm-2 col-form-label" style={{ color: "#D3D3D3" }}>
              Type
            </label>
            <div className="col-sm-10">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#1bb004" }}
                >
                  {type}
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                    value="action"
                  >
                    Type1
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Type2
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Type3
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Type4
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Type5
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Something else here
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Description
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.description}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Size of Area(Perches)
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setPublish_Date(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.sizeOfArea}</p>
            </div>
          </div>
         
          
          <br />
          <div className="form-group my-4">
            <label className="my-1" style={{ color: "#D3D3D3" }}>
              Image
            </label>
            <input
              style={{ backgroundColor: "#D3D3D3" }}
              type="text"
              className="form-control"
              placeholder="Image"
              value={img}
              required
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
            <p class="alert-txt">{formErrors.img}</p>
          </div>

          <div class="row justify-content-end" id="add-btn">
            <center>
              <Link to="/Ads/AdminView">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn-block btn-primary"
                  style={{ backgroundColor: "#1bb004" }}
                >
                  Submit
                </button>
              </Link>{" "}
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogAdd;

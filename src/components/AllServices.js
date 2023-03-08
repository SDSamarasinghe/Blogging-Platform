import React from "react";
import { Link, useNavigate } from "react-router-dom";


function AllServices() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", float: "left", marginRight: "2rem"}}
      >
        <div className="card-body">
          <h5 className="card-titlem">Education</h5>
          <img className="card-img-top" src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"alt="Card image cap" />
          <p className="card-text">
            Agriculture Education Services & Technology, Inc.offers industry
            certifications in agriculture. A trusted
          </p>
          <a href="/coursehome">
            <button class="buttonserv">
              <span>more</span>
            </button>{" "}
          </a>
        </div>

        <div className="card-body"></div>

        
      </div>

      <div className="col-md-8 mt-4 mx-auto">
        <div
          className="card"
          style={{
            width: "18rem",
            marginRight: "1rem",
            
            float: "left",
            marginLeft: "6rem",
          }}
        >
          <div className="card-body">
            <h5 className="card-titlem">Career</h5>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
            <p className="card-text">
              CALS Career Services Office provides you with the necessary tools
              to make the transition from college to career.
            </p>
            <br />
            <button class="buttonserv">
              <span>more</span>
            </button>
          </div>

          <div className="card-body"></div>
        </div>

        <div className="card" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5 className="card-titlem">Land Sale Ads</h5>
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <p className="card-text">
              Find over Cultivated Land for Sale in Sri Lanka on the #1 Real
              Estate Portal - AgroTech (browse images, get property info/prices.)
            </p>
            <br />
            <Link to="/Ads/properties">
              <button class="buttonserv">
                <span>more</span>
              </button>
            </Link>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    </>
  );
}

export default AllServices;

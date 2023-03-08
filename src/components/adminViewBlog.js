import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admins.css";

const adminViewBlog = () => {
  const [adsr, setAdsr] = useState(undefined);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Blogger/all`).then((res) => {
      setAdsr(res.data);
    });
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/api/Blogger/${id}`).then((res) => {
      alert("Blog deleted successfully!");
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"20px"}}>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Type</th>
            <th scope="col">Message</th>
            <th scope="col">img</th>
            <th scope="col">Pusblished_Date</th>
          </tr>
        </thead>
        <tbody>
          {adsr &&
            adsr.map((adr, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link
                    to={`/Blogger/blog/${adr._id}/${adr.type}/${adr.message}/${
                      adr.Publish_Date
                    }/${encodeURIComponent(adr.img)}`}
                    style={{ textDecoration: "none" }}
                  >
                    {adr.type}
                  </Link>
                </td>
                <td>{adr.message}</td>
                <td>{adr.Publish_Date}</td>
                <td>
                  <Link
                    className="btn btn-warning"
                    to={`/Blogger/edit/${adr._id}/${adr.type}/${adr.message}/${
                      adr.Publish_Date
                    }/${encodeURIComponent(adr.img)}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
                  &nbsp;
                  <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => onDelete(adr._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button className="btn btn-success">
        {" "}
        <Link
          to="/Home"
          style={{ extDecoration: "none", color: "white" }}
        >
          Create New Advertisment
        </Link>
        <br />
      </button>
      <br />
    </div>
  );
};
export default adminViewBlog;

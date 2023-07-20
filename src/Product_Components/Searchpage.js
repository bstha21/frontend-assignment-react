import React, { useState } from 'react'
import data from "./template.json"
import { Link } from 'react-router-dom';

function Searchpage(props) {
  const [searchresult, setSearchResult] = useState("");

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <input className="form-control me-2" type="search" placeholder="Type your query here" style={{ width: "80%" }} onChange={(e) => setSearchResult(e.target.value)} />
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {
            // eslint-disable-next-line
            data.filter((val) => {
                if (searchresult === "") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchresult.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="col-md-3 mb-3" key={val.id}>
                    <div className="card shrink">
                      <Link to={`/Productdetails/${val.id}`}>
                      <img src={val.image} className="card-img-top" alt="..." style={props.mystyle}/>
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">
                          {val.title}
                        </h5>
                        <p className="card-text">
                          {val.price}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            })  
          }
          </div>
        </div>
    </>
  )
}

export default Searchpage
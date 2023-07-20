import React from 'react'
import { Products } from './Products'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

function Productdetails() {
  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const { id } = useParams()
  const { isLoading, data } = Products(id)

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="container">
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-4">
              <img className="card-img-top mb-5 mb-md-0" src={data?.data.image} alt="..." /></div>
            <div className="col-md-8">
              <h2 className="fw-bolder">{data?.data.title}</h2>
              <div className="fs-5 mb-4">
                <span>Price:&nbsp;${data?.data.price}</span>
              </div>
              <div className="fs-5 mb-4">
                <span>Category:&nbsp;{capitalizeFirstLetter(data?.data.category)}</span>
              </div>
              <p className="text-muted mb-5" style={{textAlign:"justify"}}>{data?.data.description}</p>
              <button className="btn btn-outline-primary flex-shrink-0 me-4" type="button">
                <i className="bi bi-bag-heart"></i>
                Buy Now
              </button>
              <button className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi bi-cart-fill"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productdetails
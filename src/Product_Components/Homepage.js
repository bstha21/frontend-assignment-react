import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'


function Homepage(props) {

    const fetchApi = () => {
        return axios.get("https://fakestoreapi.com/products")
    }

    const { isLoading, data } = useQuery("Product", fetchApi)

    if (isLoading) {
        return <Spinner/>
    }

    return (
            <div className="container my-5">
                <div className="row">
                    {
                        data?.data.map((element) => {
                            return <div className="col-md-3 mb-3" key={element.id}>
                                <div className="card">
                                    <img src={element.image} className="card-img-top" alt="..." style={props.mystyle} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {element.title}
                                        </h5>
                                        <p className="card-text">
                                            Price : ${element.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
    )
}

export default Homepage
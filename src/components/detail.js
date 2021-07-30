import React, { useState } from 'react';
import { useParams } from 'react-router';
import data from '../utils/productList.json';

const getProduct = (id) => {
    const product = [];
    data.forEach(p => {
        if (p.ProductID === id) product.push(p);
    })
    return product[0];
}

const Detail = (props) => {
    const [isShowingAlert, setShowingAlert] = useState(false);
    const params = useParams();
    const product = getProduct(parseInt(params.id));
    const clear = () => {
        setShowingAlert(false);
    }
    const showModal = () => {
        setShowingAlert(true);
    }


    return (
        <div>

            <div
                className={`alert ${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}
                onTransitionEnd={clear}
            >
                <strong>Product added successfully!</strong>
            </div>
            <div>
                <div className="product">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="product-image">
                                <img src={product.ThumbnailURL} alt="" className="img-responsive" />
                            </div>
                            <div>
                                <p><b>Brand:</b> {product.Brand}</p>
                                <p><b>Color:</b> {product.Color}</p>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="product-deatil">
                                <h5 className="name">
                                    {product.Name}
                                </h5>
                                <p className="price-container">
                                    <span className="price">${product.Price}</span>
                                    <span className="retail">{product['Retail Price']}</span>
                                </p>
                                <p>
                                    {product.Description}
                                </p>
                            </div>
                            <div className="product-info smart-form">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <input className="btn btn-success" type="button" value="Add to cart" onClick={showModal} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="rating">Rating:
                                        <label for="stars-rating-5"><i className="fa fa-star text-danger"></i></label>
                                        <label for="stars-rating-4"><i className="fa fa-star text-danger"></i></label>
                                        <label for="stars-rating-3"><i className="fa fa-star text-danger"></i></label>
                                        <label for="stars-rating-2"><i className="fa fa-star text-warning"></i></label>
                                        <label for="stars-rating-1"><i className="fa fa-star text-warning"></i></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail;
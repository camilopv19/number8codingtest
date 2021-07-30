import React from 'react';
import './product.css';
import '../App.css';
import { NavLink } from 'react-router-dom';


const Product = (props) => {
    const { ProductID } = props;
    return (
        <div>
            <div className="product">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="product-image">
                            <img src={props.ThumbnailURL} alt="" className="img-responsive" />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="product-deatil">
                            <h5 className="name">
                                {props.Name}
                            </h5>
                            <p className="price-container">
                                <span className="price">${props.Price}</span>
                                <span className="retail">{props['Retail Price']}</span>
                            </p>
                        </div>
                        <div className="product-info smart-form">
                            <div className="row">
                                <div className="col-sm-12">
                                    <NavLink className="btn btn-success" type="button" to={'/' + ProductID}>
                                        View details
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
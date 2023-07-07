import './ProductDetails.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {actionFetchOneProduct} from "../../reducers/products.reducer";
import {selectorCurrentDetailsProduct} from "../../selectors";


const ProductDetails = () => {
    let {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchOneProduct(`http://localhost:4000/products/${id}`));
    }, [id]);

    const productDetails = useSelector(selectorCurrentDetailsProduct);
    const {imageUrl, name, count, size, weight} = productDetails;

    return (
        <>
            <div className="product-details">
                <img src={imageUrl} alt="" className="product-details__logo"/>

                <div className="product-details__content">
                    <h3 className="product-details__name">{name}</h3>
                    <p className="product-details__content-item">Count : {count}</p>
                    <p className="product-details__content-item">Size : {size.width} x {size.height} </p>
                    <p className="product-details__content-item">Weight : {weight}</p>
                </div>

            </div>
        </>
    )
};

export default ProductDetails;

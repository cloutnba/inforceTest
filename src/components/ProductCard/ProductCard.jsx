import './ProductCard.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionDeleteProduct, actionFetchDeleteProduct} from "../../reducers/products.reducer";
const ProductCard = ({data, handlerToggleModal}) => {

    const dispatch = useDispatch();
    const {imageUrl, name, id} = data;

    const deleteProduct = () => {
        dispatch(actionDeleteProduct(id));
        handlerToggleModal();
    }

    return (
        <>
            <div  className="product-card">
                <div className="product-card__actions">
                    <button className="product-card__action" type="button"><FavoriteBorderIcon/></button>
                    <button className="product-card__action" type="button" onClick={deleteProduct}><DeleteIcon/></button>

                </div>
                <Link to={`/products/${id}`} className="product-card__logo-wrapper">
                    <img src={imageUrl} alt="image" className="product-card__logo"/>
                </Link>
                <Link to={`/products/${id}`} className="product-card__name">{name}</Link>
                <button type="button" className="product-card__buy-btn">BUY</button>
            </div>
        </>
    )
}

export default ProductCard;
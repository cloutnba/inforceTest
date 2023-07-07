import './Products.scss';
import {useEffect, useReducer, useState} from "react";
import axios from 'axios';
import getData from "../../helpers/getData";
import ProductCard from "../ProductCard";
import {Container} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import {actionDeleteProduct, actionFetchAllProducts, actionFetchDeleteProduct} from "../../reducers/products.reducer";
import {selectorAllProducts, selectorCurrentDeleteProductId} from "../../selectors";
import Modal from "../Modal";
import AddModal from "../AddModal";

const Products = () => {
    const [isItemDeleteModal, setIsItemDeleteModal] = useState(false);
    const [isAddItemModal, setIsAddItemModal] = useState(false);
    const products = useSelector(selectorAllProducts);
    const currentDeleteId = useSelector(selectorCurrentDeleteProductId);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchAllProducts('http://localhost:4000/products'));
    }, [products])


    const onClickHand = () => {
        dispatch(actionFetchDeleteProduct(`http://localhost:4000/products/${currentDeleteId}`));
        handlerToggleModal();
    }

    const handlerToggleModal = () => {
        setIsItemDeleteModal(!isItemDeleteModal);
    }

    const handleAddItemModal = () => {
        setIsAddItemModal(!isAddItemModal);
    }

    return (
        <main>
            <Container maxWidth="xl">

                <div className="products">
                    <button type="button" className="products__add-btn" onClick={handleAddItemModal}>ADD ITEM</button>


                    <div className="products__list">
                        {products.map((product, key) => <ProductCard
                            data={product}
                            handlerToggleModal={handlerToggleModal}
                            className="products-list__item" key={key}/>)}
                    </div>
                </div>

                {(isItemDeleteModal || isAddItemModal) && <Modal
                    text={isAddItemModal ? "Do you want add item ?" : "Do you want delete item ?"}
                    onClickHandler={() => onClickHand()}
                    closeModal={() => handlerToggleModal()}
                >
                    {isAddItemModal && <AddModal handleAddItemModal={handleAddItemModal}/>}
                </Modal>}
            </Container>
        </main>
    );
};
export default Products;

import {Form, Formik} from "formik";
import * as Yup from 'yup';
import './AddModal.scss';
import Input from "./Input";
import {useDispatch} from "react-redux";
import {actionAddNewProduct, actionFetchAddNewProduct} from "../../reducers/products.reducer";
import axios from 'axios';
const AddModal = ({handleAddItemModal}) => {

    const dispatch = useDispatch();


    return (
        <>
            <Formik
                initialValues={{
                    imageUrl: "",
                    name: "",
                    count: null,
                    width: null,
                    height: null,
                    weight: null,
                    comments: [],
                }}
                validationSchema={Yup.object({
                    imageUrl: Yup.string()
                        .required("The field is required !"),
                    name: Yup.string()
                        .min(5, "Name too short !")
                        .required("The field is required !"),
                    count: Yup.number()
                        .required("The field is required !"),
                    width: Yup.number()
                        .required("The field is required !"),
                    height: Yup.number()
                        .required("The field is required !"),
                    weight: Yup.number()
                        .required("The field is required !"),
                })}
                onSubmit={(values) => {
                    dispatch(actionFetchAddNewProduct("http://localhost:4000/products", {
                        id: Math.round(Math.random() * 10001),
                        imageUrl: values.imageUrl,
                        name: values.name,
                        count: values.count,
                        size: {
                            width: values.width,
                            height: values.height
                        },
                        weight: values.weight,
                        comments: [
                        ]}));
                    handleAddItemModal();
                }}
            >
                <Form className="form">
                    <fieldset className="form__block">
                        <legend className="form__legend">Product Details</legend>
                        <Input label="imageUrl" placeholder="imageUrl" type="text" name="imageUrl"
                               className="form__input"/>
                        <Input label="name" placeholder="name" type="text" name="name" className="form__input"/>
                        <Input label="count" placeholder="count" type="number" name="count" className="form__input"/>
                        <Input label="width" placeholder="width" type="number" name="width" className="form__input"/>
                        <Input label="height" placeholder="height" type="number" name="height" className="form__input"/>
                        <Input label="weight" placeholder="weight" type="number" name="weight" className="form__input"/>
                        <button type="submit" className="form__add-btn">Add</button>
                    </fieldset>
                </Form>
            </Formik>
        </>
    )
}

export default AddModal;
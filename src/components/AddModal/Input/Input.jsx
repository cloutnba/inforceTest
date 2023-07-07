import {Field, ErrorMessage} from "formik";

function Input({name, type, placeholder}) {
    return(
        <label>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}/>
            <ErrorMessage name={name} component="p"/>
        </label>
    )
}

export default Input;

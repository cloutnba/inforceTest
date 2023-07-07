import {useEffect, useRef, useState} from "react";

import './Modal.scss';

function Modal({text,onClickHandler, closeModal,children}) {
    const wrapperRef = useRef();



    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return (() => {
            document.removeEventListener("mousedown", handleClickOutside);
        })
    })


    const handleClickOutside = (event) => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            closeModal();
        }
    }

    return(
        <div className="modal-wrapper">
            <div className="modal" ref={wrapperRef}>
                <div className="modal-box">
                    <div className="modal-content">
                        <div className="modal-text">
                            {text}
                        </div>
                    </div>
                    {children}

                    {!children && <div className="modal-footer">
                        <div className="button-wrapper">
                            <button type="button" className="btn" onClick={onClickHandler}>YES</button>
                            <button type="button" className="btn" onClick={closeModal}>NO</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}


export default Modal;

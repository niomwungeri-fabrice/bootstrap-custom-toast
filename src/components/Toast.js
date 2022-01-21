
import * as bootstrap from 'bootstrap';
import React from 'react';

const { useEffect, useRef } = React
const { Toast, } = bootstrap;

export const ToastManager = (props) => {

    const toastRef = useRef();
    const { setToast, isVisible, message, autoHide = true, duration = 6000, type, position } = props;

    useEffect(() => {
        let myToast = toastRef.current
        let bsToast = bootstrap.Toast.getInstance(myToast)

        if (!bsToast) {
            // initialize Toast
            bsToast = new Toast(myToast, { autohide: false })
            // hide after init
            bsToast.hide();
            setToast(false);
        }
        else {
            isVisible ? bsToast.show() : bsToast.hide()
        }

        if (autoHide) {
            setInterval(() => {
                bsToast.hide();
            }, duration)
        }

    });


    const _setType = (type) => {
        let text = '';
        switch (type) {
            case "error":
                text = "text-white bg-danger";
                break;
            case "info":
                text = "text-white bg-primary";
                break;
            case "success":
                text = "text-white bg-success";
                break;
            case "warning":
                text = "text-black bg-warning";
                break;
            default:
                text = "text-white bg-secondary";
        }
        return text;
    }


    const _setPosition = (position) => {
        let text = '';
        switch (position) {
            case "top-right":
                text = "top-0 end-0";
                break;
            case "bottom-left":
                text = "bottom-0 start-0";
                break;
            case "bottom-right":
                text = "bottom-0 end-0";
                break;
        case "top-left":
                text = "top-0 start-0";
                break;
            default:
                text = "top-0 end-0";
        }
        return text;
    }

    return (
        <div className="py-2">
            <div className={`toast position-absolute ${_setPosition(position)} m-4`} role="alert" ref={toastRef}>
                <div className={`toast-header ${_setType(type)}`}>
                    <strong className="me-auto">{message.title || 'title'}</strong>
                    <small>4 mins ago</small>
                    <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {message.content || 'title'}
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useCustomHookContext } from './context';

const Modal = () => {
    const { isModalOpen, closeModal } = useCustomHookContext()

    return (
        // Toggle Class Method
        <div className={`${ isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal

import React from 'react';

function ImageModal({ selectedImg, closeCarousel }) {
    return (
        <div className="image-modal">
            <div className="modal-content">
                <span className="close" onClick={closeCarousel}>
                    &times;
                </span>
                <img src={selectedImg.src} alt={selectedImg.caption} />
            </div>
        </div>
    );
}

export default ImageModal;

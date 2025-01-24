import React from 'react';

const Letter = ({ isOpen, onClose, imageSrc }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt="Carta" style={{ width: '800px', height: '800px' }} />
                <button className="close-button" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Letter;
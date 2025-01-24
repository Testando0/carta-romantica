import React, { useState } from 'react';

const Card = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className="emoji-card" onClick={handleCardClick}>
                <img src="path/to/emoji.png" alt="Emoji de Carta" width="800" height="800" />
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src="path/to/carta.gif" alt="Carta" width="800" height="800" />
                    </div>
                </div>
            )}
            <button className="open-letter-button">ABRA A CARTA</button>
        </div>
    );
};

export default Card;
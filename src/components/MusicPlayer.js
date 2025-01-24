import React from 'react';
import './styles.css';

const MusicPlayer = () => {
    return (
        <div className="music-player-container">
            <h1 className="title">Eu te amo</h1>
            <img src="path/to/your/image.jpg" alt="Player" className="player-image" />
            <div className="controls">
                <button className="control-button">Anterior</button>
                <button className="control-button">Play/Pause</button>
                <button className="control-button">Próximo</button>
            </div>
            <h2 className="subtitle">Para sempre</h2>
        </div>
    );
};

export default MusicPlayer;
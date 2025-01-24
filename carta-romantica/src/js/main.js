// main.js

// Função para abrir o modal com a imagem da carta
function openLetterModal() {
    const modal = document.getElementById('letterModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
}

// Função para fechar o modal
function closeLetterModal() {
    const modal = document.getElementById('letterModal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Adiciona eventos de clique ao emoji de carta e ao botão "ABRA A CARTA"
document.addEventListener('DOMContentLoaded', () => {
    const letterEmoji = document.getElementById('letterEmoji');
    const openButton = document.getElementById('openLetterButton');

    letterEmoji.addEventListener('click', () => {
        letterEmoji.classList.add('animate');
        setTimeout(openLetterModal, 300); // Espera a animação terminar antes de abrir o modal
    });

    openButton.addEventListener('click', openLetterModal);

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        const modal = document.getElementById('letterModal');
        if (event.target === modal) {
            closeLetterModal();
        }
    };
});

// Função para controlar o player de música
class MusicPlayer {
    constructor(audioFiles) {
        this.audioFiles = audioFiles;
        this.currentTrack = 0;
        this.isPlaying = false;
        this.audioElement = new Audio(this.audioFiles[this.currentTrack]);
        this.initializeControls();
        this.updateProgress();
    }

    initializeControls() {
        // Botões
        this.playBtn = document.querySelector('.play');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        
        // Progresso
        this.progressBar = document.querySelector('.progress');
        this.progressPoint = document.querySelector('.ponto');
        this.timeStart = document.querySelector('.inicio');
        this.timeEnd = document.querySelector('.fim');
        this.waveContainer = document.querySelector('.wave-container');

        // Event Listeners
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.previousTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('loadedmetadata', () => {
            this.timeEnd.textContent = this.formatTime(this.audioElement.duration);
        });
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audioElement.play();
        this.isPlaying = true;
        this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        this.waveContainer.classList.add('playing');
    }

    pause() {
        this.audioElement.pause();
        this.isPlaying = false;
        this.playBtn.innerHTML = '<i class="fas fa-heart"></i>';
        this.waveContainer.classList.remove('playing');
    }

    nextTrack() {
        this.currentTrack = (this.currentTrack + 1) % this.audioFiles.length;
        this.loadTrack();
    }

    previousTrack() {
        this.currentTrack = (this.currentTrack - 1 + this.audioFiles.length) % this.audioFiles.length;
        this.loadTrack();
    }

    loadTrack() {
        this.audioElement.src = this.audioFiles[this.currentTrack];
        this.audioElement.load();
        if (this.isPlaying) {
            this.play();
        }
    }

    updateProgress() {
        const currentTime = this.audioElement.currentTime;
        const duration = this.audioElement.duration;
        
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            this.progressBar.style.width = `${progressPercent}%`;
            this.progressPoint.style.left = `${progressPercent}%`;
            this.timeStart.textContent = this.formatTime(currentTime);
        }
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Inicializa o player quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const audioFiles = [
        'assets/audio/music-1.mp3',
        'assets/audio/music-2.mp3',
        'assets/audio/music-3.mp3',
        'assets/audio/music-4.mp3',
        'assets/audio/music-5.mp3',
        'assets/audio/music-6.mp3'
    ];

    const player = new MusicPlayer(audioFiles);
});

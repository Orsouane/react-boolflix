import React, { useState, useEffect } from 'react'; // Importa React e gli hook useState e useEffect
import ReactPlayer from 'react-player'; // Importa il componente ReactPlayer per riprodurre video

function VideoPlayer() {
    // Definisce un array di URL dei video
    const videos =
        ["./videos/havoc.mp4",
            "./videos/zeroday.mp4",
            "./videos/asterix.mp4"];
    // Stato per tenere traccia dell'indice del video attuale
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    useEffect(() => { setTimeout(() => { setPlaying(true) }, 1) }, [])
    // Funzione che viene eseguita quando il video finisce
    const handleEnd = () => {
        // Passa al video successivo ciclicamente  
        setCurrentIndex((currentIndex) => (currentIndex + 1) % videos.length);
    };
    return (
        <div className='flex items-center justify-center' style={{ marginTop: "30px" }} >
            <ReactPlayer
                url={videos[currentIndex]} // Usa l'URL del video corrente
                // controls={true} // Mostra i controlli del player
                onEnded={handleEnd} // Esegue handleEnd quando il video termina
                playing={playing}
                playbackRate={1}
                key={currentIndex}
                pip={true}
                muted={true}
                width={"150%"} />
        </div>
    );
}
export default VideoPlayer; // Esporta il componente per poterlo usare altrove



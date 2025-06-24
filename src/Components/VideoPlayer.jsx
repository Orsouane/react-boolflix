import React, { useState, useEffect } from 'react'; // Importa React e gli hook useState e useEffect
import { motion } from "motion/react"
import ReactPlayer from 'react-player'; // Importa il componente ReactPlayer per riprodurre video

function VideoPlayer() {
   
     // Stato per tenere traccia dell'indice del video attuale
     const [currentIndex, setCurrentIndex] = useState(0);
     const [playing, setPlaying] = useState(false);
     useEffect(() => { setTimeout(() => { setPlaying(true) }, 1) }, [])
     // Definisce un array di URL dei video
     const titles = ["Havoc", "Zero Day", "Asterix"]
     const description = [
          "An action thriller about a detective navigating a corrupt city to rescue a politician’s son and uncover dark secrets",
          "A six‑episode political thriller starring Robert De Niro as former President George Mullen, called back to head a commission after a catastrophic cyber‑attack cripples the U.S. infrastructure and kills thousands",
          "Asterix & Obelix – Il Regno di Mezzo: A live‑action del 2023, diretto da Guillaume Canet con Castell, Lellouche e Cotillard, in cui Asterix e Obelix viaggiano fino in Cina per aiutare la principessa Fu Yi a difendere l’Impero da Cesare ."
     ]
     const videos =
          [`./videos/${titles[currentIndex]}.mp4`,
               `./videos/${titles[currentIndex]}.mp4`,
               `./videos/${titles[currentIndex]}.mp4`];
     // Funzione che viene eseguita quando il video finisce
     const handleEnd = () => {
          // Passa al video successivo ciclicamente  
          setCurrentIndex((currentIndex) => (currentIndex + 1) % videos.length);
     };
     return (

          <div className='flex items-center  border-[#0C101F] rounded-2xl p-1 border-4  shadow-2xl  w-[400px] md:w-[800px] lg:w-[1200px] 
bg-gradient-to-br from-[#00010a] via-[#000620] to-[#000b30]




 ' >
               <div className=' m-2 '>
                
                    <ReactPlayer
                         url={videos[currentIndex]}
                         onEnded={handleEnd}
                         playing={playing}
                         playbackRate={1}
                         key={currentIndex}
                         pip={true}
                         muted={true}
                         width="100%"
                         height="50%"


                    />
                    <div className='flex flex-col mt-2 bg-cyan-800/20  w-full p-2 shadow-2xl  rounded-xl '> 
                         <span className='font-extrabold'>{titles[currentIndex]} </span>
                         <span className='font-extralight'>{description[currentIndex]} </span></div>  
               </div>
             
               
          </div>


     );
}
export default VideoPlayer;


import React from 'react';
import "./LecteurAudio.scss";

interface AudioPlayerProps {
    src: string;
    audioRef: React.RefObject<HTMLAudioElement>;
}

const LecteurAudio: React.FC<AudioPlayerProps> = ({ src, audioRef }) => {
    return (
        <div className={"musique"}>
            <audio ref={audioRef} controls loop>
                <source src={src} type="audio/mp3" />
            </audio>
        </div>
    );
}

export default LecteurAudio;

import React from 'react';
import "./IconeVolume.scss";

interface IconeVolumeProps {
    muet: boolean;
    toggleMuet: () => void;
}

const IconeVolume: React.FC<IconeVolumeProps> = ({ muet, toggleMuet}) => {
    return (
        <div className={"icone-volume"} onClick={toggleMuet}>
            {!muet ? (
                <svg className={"svg-volume"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.74 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.76 5 3.49 5 6.71s-2.11 5.95-5 6.71v2.06c4.06-.92 7-4.48 7-8.77s-2.94-7.85-7-8.77z"/>
                </svg>
            ) : (
                <svg className={"svg-volume"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.74 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.76 5 3.49 5 6.71s-2.11 5.95-5 6.71v2.06c4.06-.92 7-4.48 7-8.77s-2.94-7.85-7-8.77z"/>
                    <line fill="none" fillOpacity="null" id="svg_4" stroke="#000000" strokeDasharray="null" strokeOpacity="null" strokeWidth="4" x1="4" x2="19.75" y1="19.88" y2="4.88"/>
                </svg>
            )}
        </div>
    );
}

export default IconeVolume;

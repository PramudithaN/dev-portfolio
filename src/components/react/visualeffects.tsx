import React, { useState } from 'react';

type Video = {
    src: string;
    title: string;
};

export default function VisualEffects() {
    const [popupVideo, setPopupVideo] = useState<Video | null>(null);

    const closePopup = () => setPopupVideo(null);

    const [showAll, setShowAll] = useState(false);

    const videos: Video[] = [
        { src: 'https://www.youtube.com/embed/JJZUiycIZvg', title: 'Project 1' },
        { src: 'https://www.youtube.com/embed/RoTm7wOD1uI', title: 'Project 2' },
        { src: 'https://www.youtube.com/embed/yMo2v7vhQ6M', title: 'Project 3' },
        { src: 'https://www.youtube.com/embed/SJLsMEyUOSE', title: 'Project 4' },
        { src: 'https://www.youtube.com/embed/01reidY65cs', title: 'Project 5' },
        { src: 'https://www.youtube.com/embed/pCPfKqmUD1c', title: 'Project 6' },

    ];

    const visibleVideos = showAll ? videos : videos.slice(0, 6);

    return (
        <>
            <div
            style={{
                marginTop: '25px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
            }}
            className="visual-effects-grid"
            >
            {visibleVideos.map((video, idx) => (
                <div
                key={idx}
                style={{ aspectRatio: '16/9', width: '100%', cursor: 'pointer', position: 'relative' }}
                onClick={() => setPopupVideo(video)}
                >
                <iframe
                    width="100%"
                    height="100%"
                    src={video.src + '?controls=0&showinfo=0&rel=0&autoplay=0'}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '8px', width: '100%', height: '100%', pointerEvents: 'none', filter: 'brightness(0.7)' }}
                    tabIndex={-1}
                />
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none'
                }}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="white" style={{ opacity: 0.8 }}>
                    <circle cx="32" cy="32" r="32" fill="black" opacity="0.5"/>
                    <polygon points="26,20 48,32 26,44" fill="white"/>
                    </svg>
                </div>
                </div>
            ))}
            </div>
            <style>
            {`
            @media (max-width: 900px) {
                .visual-effects-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                }
            }
            @media (max-width: 600px) {
                .visual-effects-grid {
                grid-template-columns: 1fr !important;
                }
            }
            `}
            </style>
            {videos.length > 6 && (
            <div style={{ textAlign: 'center', marginTop: 16 }}>
               <button
                className="mt-2 cursor-pointer p-2 rounded-full bg-muted hover:bg-accent transition"
                onClick={() => setShowAll((prev) => !prev)}
                aria-label={showAll ? "Collapse logos" : "Expand to show all logos"}
                >
                {showAll ? (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 15l6-6 6 6"/>
                    </svg>
                ) : (
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                    </svg>
                )}
                </button>
            </div>
            )}
            {popupVideo && (
            <div
                style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
                }}
                onClick={closePopup}
            >
                <div
                style={{ position: 'relative', width: '80vw', maxWidth: 900, aspectRatio: '16/9', background: '#000', borderRadius: 12 }}
                onClick={e => e.stopPropagation()}
                >
                <iframe
                    width="100%"
                    height="100%"
                    src={popupVideo.src + '?autoplay=1'}
                    title={popupVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '12px', width: '100%', height: '100%' }}
                />
                <button
                    onClick={closePopup}
                    style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    background: 'rgba(0,0,0,0.6)',
                    border: 'none',
                    color: 'white',
                    fontSize: 24,
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    cursor: 'pointer'
                    }}
                    aria-label="Close"
                >×</button>
                </div>
            </div>
            )}
        </>
    );
}
import { useState, useEffect } from 'react';

const logoWorks = [
    {
        title: "Deepest Secrets",
        description: "A logo inspired by underwater exploration and mystery.",
        image: "/Images/ED-4.webp",
        guideImage: "/Images/IHUB-FINAL LOGO.svg",
        guideText: "This logo represents the unknown depths of creativity, using cool blue tones and dynamic lighting to evoke a sense of wonder and discovery."
    },
    {
        title: "Minimalist Owl",
        description: "A clean, modern owl logo for a tech startup.",
        image: "/Images/GALLE-FORT-Microworld.webp",
        guideImage: "/Images/GALLE-FORT-Microworld.webp",
        guideText: "The owl symbolizes wisdom and vision. The minimalist lines keep the design versatile and memorable."
    },
    {
        title: "Mountain Peak",
        description: "Logo for an adventure brand, featuring bold mountain shapes.",
        image: "/Images/F-Superhero-Dog.webp",
        guideImage: "/Images/F-Superhero-Dog.webp",
        guideText: "Sharp angles and gradients create a sense of elevation and ambition, perfect for outdoor brands."
    },
    {
        title: "Test Data",
        description: "Logo for an adventure brand, featuring bold mountain shapes.",
        image: "/Images/Skull_Island.webp",
        guideImage: "/Images/Skull_Island.webp",
        guideText: "Sharp angles and gradients create a sense of elevation and ambition, perfect for outdoor brands."
    },
    // Add more logo works as needed
];

export default function LogoCarousel() {
    const [current, setCurrent] = useState(0);
    const [popup, setPopup] = useState<number | null>(null);

    // MODIFIED: Load initial 'likes' state from Local Storage
    const [likes, setLikes] = useState<number[]>(() => {
        try {
            const savedLikes = window.localStorage.getItem('logoLikes');
            return savedLikes ? JSON.parse(savedLikes) : Array(logoWorks.length).fill(0);
        } catch {
            return Array(logoWorks.length).fill(0);
        }
    });

    // MODIFIED: Load initial 'liked' status from Local Storage
    const [liked, setLiked] = useState<boolean[]>(() => {
        try {
            const savedLiked = window.localStorage.getItem('logoLikedStatus');
            return savedLiked ? JSON.parse(savedLiked) : Array(logoWorks.length).fill(false);
        } catch {
            return Array(logoWorks.length).fill(false);
        }
    });

    // NEW: useEffect to save 'likes' to Local Storage whenever it changes
    useEffect(() => {
        window.localStorage.setItem('logoLikes', JSON.stringify(likes));
    }, [likes]);

    // NEW: useEffect to save 'liked' status to Local Storage whenever it changes
    useEffect(() => {
        window.localStorage.setItem('logoLikedStatus', JSON.stringify(liked));
    }, [liked]);


    const scrollLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
    const scrollRight = () => setCurrent((prev) => Math.min(prev + 1, logoWorks.length - 1));

    const handleLike = (idx: number) => {
        setLikes((prev) => {
            const updated = [...prev];
            if (liked[idx]) {
                updated[idx] = Math.max(0, updated[idx] - 1);
            } else {
                updated[idx] = (updated[idx] || 0) + 1; // Ensure it's a number before adding
            }
            return updated;
        });
        setLiked((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

    return (
        <div className="relative w-full">
            <div className="flex items-center">
                <button
                    className="p-2 rounded-full bg-muted hover:bg-accent transition disabled:opacity-50"
                    onClick={scrollLeft}
                    disabled={current === 0}
                    aria-label="Scroll left"
                >
                    &#8592;
                </button>
                <div
                    className="flex gap-4 px-4 py-6 w-full"
                    style={{
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        // @ts-ignore
                        msOverflowStyle: 'none'
                    }}
                >
                    {logoWorks.map((work, idx) => (
                        <div
                            className={`min-w-[260px] max-w-xs bg-card rounded-xl shadow-md p-4 flex-shrink-0 transition-transform duration-300 ${idx === current ? 'scale-105 border-2 border-primary' : ''}`}
                            key={work.title}
                            style={{
                                display: Math.abs(idx - current) <= 1 ? 'block' : 'none'
                            }}
                        >
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-40 object-cover rounded-lg cursor-pointer"
                                onClick={() => setPopup(idx)}
                                loading="lazy"
                            />
                            <h3 className="mt-3 font-semibold text-lg">{work.title}</h3>
                            <p className="text-muted-foreground text-sm">{work.description}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="p-2 rounded-full bg-muted hover:bg-accent transition disabled:opacity-50"
                    onClick={scrollRight}
                    disabled={current === logoWorks.length - 1}
                    aria-label="Scroll right"
                >
                    &#8594;
                </button>
            </div>
            {popup !== null && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                        <div className="bg-background rounded-xl p-6 max-w-2xl w-full relative shadow-2xl flex">
                            {/* Popup content */}
                            <div className="flex-1 min-w-0">
                                <button
                                    className="absolute top-2 right-5 text-xl font-bold text-muted-foreground hover:text-foreground"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                                    onClick={() => setPopup(null)}
                                    aria-label="Close popup"
                                >
                                    &times;
                                </button>
                                <div
                                    className="w-full max-h-80 overflow-y-auto rounded-lg mb-4 flex"
                                    style={{
                                        scrollbarWidth: 'none',
                                        // @ts-ignore
                                        msOverflowStyle: 'none'
                                    }}
                                >
                                    <img
                                        src={logoWorks[popup].guideImage}
                                        alt={logoWorks[popup].title + ' guide'}
                                        className="w-full object-contain rounded-lg"
                                        style={{ maxHeight: '320px',maxWidth: '500px', display: 'block', margin: '0 auto' }}
                                    />
                                    {/* Side icons moved to the right of the image */}
                                    <div className="flex flex-col items-center gap-6 pr-6 pt-6">
                                        <button
                                            className={`bg-muted p-3 rounded-full hover:bg-accent transition ${liked[popup] ? 'text-orange-200' : ''}`}
                                            title="Appreciate"
                                            onClick={() => handleLike(popup)}
                                        >
                                            <span role="img" aria-label="like">
                                                {liked[popup] ? (
                                                    // Filled heart
                                                    <svg width="24" height="24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                                                        <path d="M12 21C12 21 4 13.36 4 8.5A4.5 4.5 0 0 1 8.5 4A4.5 4.5 0 0 1 12 7.09A4.5 4.5 0 0 1 15.5 4A4.5 4.5 0 0 1 20 8.5C20 13.36 12 21 12 21Z"/>
                                                    </svg>
                                                ) : (
                                                    // Outlined heart
                                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M12 21C12 21 4 13.36 4 8.5A4.5 4.5 0 0 1 8.5 4A4.5 4.5 0 0 1 12 7.09A4.5 4.5 0 0 1 15.5 4A4.5 4.5 0 0 1 20 8.5C20 13.36 12 21 12 21Z"/>
                                                    </svg>
                                                )}
                                            </span>
                                        </button>
                                        <div className="text-xs text-center mt-1">{likes[popup] ?? 0} likes</div>
                                        <button className="bg-muted p-3 rounded-full hover:bg-accent transition" title="Share">
                                            <span role="img" aria-label="share">
                                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-bold text-xl mb-2">{logoWorks[popup].title}</h3>
                                <p className="text-base">{logoWorks[popup].guideText}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <style>{`
                .flex[style]::-webkit-scrollbar {
                    display: none;
                }
                .max-h-80::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
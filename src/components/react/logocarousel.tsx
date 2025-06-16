import { useState, useEffect } from 'react';

const logoWorks = [
    {
        title: "Adobe Prama",
        description: "A Logo created for my personal use.Uses the initials to create a modern and sleek design.",
        image: "/Images/AP-Logo.webp",
        guideImage: "/Images/AP-Logo.webp",
        guideText: "This logo combines the initials 'AP' in a sleek, modern style. The design is versatile for various applications, from digital to print."
    },
    {
        title: "Nexorbyte",
        description: "A Logo designed for a tech startup company.",
        image: "/Images/Nexorbyte.webp",
        guideImage: "/Images/Nexorbyte.webp",
        guideText: "This logo features a stylized sphere with circuit patterns, representing innovation and technology. The design is sleek and modern, suitable for a tech company."
    },
    {
        title: "Parallax Peaks",
        description: "Logo for a project of Rotary Club in IIT",
        image: "/Images/Parallax.webp",
        guideImage: "/Images/Parallax.webp",
        guideText: "This is for a coding competition organized by the Rotary Club in IIT. The logo features a stylized mountain peak, symbolizing challenges and achievements in coding."
    },
    {
        title: "The Shady Tree",
        description: "Logo for an Restaurant. Features a stylized tree with a modern twist.",
        image: "/Images/Shady-Tree.webp",
        guideImage: "/Images/Shady-Tree.webp",
        guideText: "The Restaurant itself is under a Huge tree.So the logo is designed to reflect that. The tree symbolizes growth and stability, while the modern design keeps it fresh and appealing."
    },
    {
        title: "Cloudy Elegance",
        description: "A Logo designed for a saloon.",
        image: "/Images/CE.webp",
        guideImage: "/Images/CE.webp",
        guideText: "This logo features a stylized cloud with elegant curves, symbolizing a fresh and airy atmosphere. The design is perfect for a salon, conveying beauty and sophistication."
    },
];

export default function LogoCarousel() {
    const [current, setCurrent] = useState(0);
    const [popup, setPopup] = useState<number | null>(null);
    const [expanded, setExpanded] = useState(false);

    const visibleCards = expanded ? logoWorks : logoWorks.slice(0, 4);

    const [likes, setLikes] = useState<number[]>(() => {
        try {
            const savedLikes = window.localStorage.getItem('logoLikes');
            return savedLikes ? JSON.parse(savedLikes) : Array(logoWorks.length).fill(0);
        } catch {
            return Array(logoWorks.length).fill(0);
        }
    });

    const [liked, setLiked] = useState<boolean[]>(() => {
        try {
            const savedLiked = window.localStorage.getItem('logoLikedStatus');
            return savedLiked ? JSON.parse(savedLiked) : Array(logoWorks.length).fill(false);
        } catch {
            return Array(logoWorks.length).fill(false);
        }
    });

    useEffect(() => {
        window.localStorage.setItem('logoLikes', JSON.stringify(likes));
    }, [likes]);

    useEffect(() => {
        window.localStorage.setItem('logoLikedStatus', JSON.stringify(liked));
    }, [liked]);

    const handleLike = (idx: number) => {
        setLikes((prev) => {
            const updated = [...prev];
            if (liked[idx]) {
                updated[idx] = Math.max(0, updated[idx] - 1);
            } else {
                updated[idx] = (updated[idx] || 0) + 1;
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
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full py-6">
                    {visibleCards.map((work, idx) => (
                        <div
                            className={`bg-card rounded-xl shadow-md p-4 transition-transform duration-300 ${!expanded && idx === current ? 'scale-105 border-2 border-primary' : ''}`}
                            key={work.title}
                        >
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-40 object-cover rounded-lg cursor-pointer"
                                onClick={() => setPopup(expanded ? idx : idx)}
                                loading="lazy"
                            />
                            <h3 className="mt-3 font-semibold text-lg">{work.title}</h3>
                            <p className="text-muted-foreground text-sm">{work.description}</p>
                        </div>
                    ))}
                </div>
                {logoWorks.length > 4 && (
                    <button
                        className="mt-2 cursor-pointer p-2 rounded-full bg-muted hover:bg-accent transition"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-label={expanded ? "Collapse logos" : "Expand to show all logos"}
                    >
                        {expanded ? (
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 15l6-6 6 6"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6"/>
                            </svg>
                        )}
                    </button>
                )}
            </div>
            {popup !== null && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                        <div className="bg-background rounded-xl p-6 max-w-2xl w-full relative shadow-2xl flex">
                            {/* Popup content */}
                            <div className="flex-1 min-w-0">
                                <button
                                    className="absolute top-2 right-5 text-xl font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', scale: '1.6' }}
                                    onClick={() => setPopup(null)}
                                    aria-label="Close popup"
                                >
                                    &times;
                                </button>
                                <div
                                    className="w-full max-h-80 overflow-y-auto rounded-lg mb-4 flex flex-col sm:flex-row"
                                    style={{
                                        scrollbarWidth: 'none',
                                        // @ts-ignore
                                        msOverflowStyle: 'none'
                                    }}
                                >
                                    <div
                                        style={{
                                            maxHeight: '250px',
                                            maxWidth: '500px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <img
                                            src={logoWorks[popup].guideImage}
                                            alt={logoWorks[popup].title + ' guide'}
                                            className="w-full object-contain"
                                            style={{
                                                maxHeight: '250px',
                                                maxWidth: '500px',
                                                display: 'block',
                                            }}
                                            loading='lazy'
                                        />
                                    </div>
                                    {/* Side icons: below image on mobile, right on desktop */}
                                    <div className="flex flex-row sm:flex-col items-center justify-center gap-6 pr-0 sm:pr-6 pt-4 sm:pt-6 w-full sm:w-auto">
                                        <button
                                            className={`cursor-pointer bg-muted p-3 rounded-full hover:bg-accent transition ${liked[popup] ? 'text-orange-200' : ''}`}
                                            title="Appreciate"
                                            onClick={() => handleLike(popup)}
                                        >
                                            <span role="img" aria-label="like">
                                                {liked[popup] ? (
                                                    <svg width="24" height="24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                                                        <path d="M12 21C12 21 4 13.36 4 8.5A4.5 4.5 0 0 1 8.5 4A4.5 4.5 0 0 1 12 7.09A4.5 4.5 0 0 1 15.5 4A4.5 4.5 0 0 1 20 8.5C20 13.36 12 21 12 21Z"/>
                                                    </svg>
                                                ) : (
                                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M12 21C12 21 4 13.36 4 8.5A4.5 4.5 0 0 1 8.5 4A4.5 4.5 0 0 1 12 7.09A4.5 4.5 0 0 1 15.5 4A4.5 4.5 0 0 1 20 8.5C20 13.36 12 21 12 21Z"/>
                                                    </svg>
                                                )}
                                            </span>
                                        </button>
                                        <div className="text-xs text-center mt-1">{likes[popup] ?? 0} likes</div>
                                        <button
                                            className="cursor-pointer bg-muted p-3 rounded-full hover:bg-accent transition"
                                            title="Share"
                                            onClick={async () => {
                                                const url = `${window.location.origin}${window.location.pathname}?logo=${popup}`;
                                                if (navigator.share) {
                                                    try {
                                                        await navigator.share({
                                                            title: logoWorks[popup].title,
                                                            text: logoWorks[popup].description,
                                                            url,
                                                        });
                                                    } catch {
                                                        // User cancelled or error
                                                    }
                                                } else {
                                                    try {
                                                        await navigator.clipboard.writeText(url);
                                                        alert('Link copied to clipboard!');
                                                    } catch {
                                                        alert('Could not copy link.');
                                                    }
                                                }
                                            }}
                                        >
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
        </div>
    );
}
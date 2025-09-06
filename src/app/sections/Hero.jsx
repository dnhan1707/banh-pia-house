'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
    const video_url = 'https://f4mccdvrwalec4mm.public.blob.vercel-storage.com/dough.mp4' || '/dough.mp4'
    
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (video) {
            // Force play on mobile devices
            const playVideo = async () => {
                try {
                    await video.play()
                } catch (error) {
                    console.log('Autoplay failed:', error)
                    // Fallback: try to play when user interacts
                    const handleInteraction = async () => {
                        try {
                            await video.play()
                            document.removeEventListener('touchstart', handleInteraction)
                            document.removeEventListener('click', handleInteraction)
                        } catch (err) {
                            console.log('Manual play failed:', err)
                        }
                    }
                    document.addEventListener('touchstart', handleInteraction)
                    document.addEventListener('click', handleInteraction)
                }
            }
            
            // Try to play immediately
            playVideo()
        }
    }, [])

    return (
        <>
            {/* Google Fonts Import */}
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
                rel="stylesheet"
            />
            
            <section id="hero" className="relative h-screen w-full overflow-hidden">
                {/* Video */}
                <div className="video absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="object-cover w-full h-full"
                        crossOrigin="anonymous"
                        style={{ backgroundColor: '#1a1a1a' }}
                    >
                        <source src={video_url} type="video/mp4"/>
                        {/* Fallback for very old browsers */}
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px] z-10"></div>
                
                {/* Hero Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-light tracking-tight" style={{fontFamily: 'Lora, serif'}}>
                    <span className="text-yellow-400" style={{fontStyle: 'italic'}}>Bánh Pía</span>
                    </h1>
                    <h2 className="text-white text-5xl md:text-6xl font-light tracking-tight mt-2" style={{fontFamily: 'Lora, serif'}}>
                    tinh hoa Sóc Trăng
                    </h2>
                </div>
            </section>
        </>
    )
}
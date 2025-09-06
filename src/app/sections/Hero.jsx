export default function Hero() {
    const video_url = '/dough.mp4'

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
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                    >
                        <source src={video_url} type="video/mp4"/>
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
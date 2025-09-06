'use client'

import { useState, useEffect } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Change header style when scrolled past hero section (roughly viewport height)
            setIsScrolled(window.scrollY > window.innerHeight * 0.8)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleContactClick = (e) => {
        e.preventDefault()
        setShowContactModal(true)
        setIsMenuOpen(false)
    }

    return (
        <>
            {/* Google Fonts Import */}
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
                rel="stylesheet"
            />
            
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100' 
                    : 'bg-white/10 backdrop-blur-md'
            }`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-12">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <h1 className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-amber-900' : 'text-white'
                            }`} style={{fontFamily: 'Lora, serif', fontStyle: 'italic'}}>
                                Cẩm Trinh Thành Phát
                            </h1>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                <a href="#hero" className={`hover:opacity-80 transition-all duration-200 text-sm ${
                                    isScrolled ? 'text-amber-800 hover:text-amber-600' : 'text-white hover:text-white/80'
                                }`} style={{fontFamily: 'Lora, serif'}}>
                                    Trang chủ
                                </a>
                                <a href="#products" className={`hover:opacity-80 transition-all duration-200 text-sm ${
                                    isScrolled ? 'text-amber-800 hover:text-amber-600' : 'text-white hover:text-white/80'
                                }`} style={{fontFamily: 'Lora, serif'}}>
                                    Sản phẩm
                                </a>
                                <a href="#about" className={`hover:opacity-80 transition-all duration-200 text-sm ${
                                    isScrolled ? 'text-amber-800 hover:text-amber-600' : 'text-white hover:text-white/80'
                                }`} style={{fontFamily: 'Lora, serif'}}>
                                    Về chúng tôi
                                </a>
                                <a href="#contact" onClick={handleContactClick} className={`hover:opacity-80 transition-all duration-200 text-sm cursor-pointer ${
                                    isScrolled ? 'text-amber-800 hover:text-amber-600' : 'text-white hover:text-white/80'
                                }`} style={{fontFamily: 'Lora, serif'}}>
                                    Liên hệ
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`hover:opacity-80 transition-all duration-200 ${
                                    isScrolled ? 'text-amber-800' : 'text-white'
                                }`}
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm border-t transition-colors duration-300 ${
                                isScrolled 
                                    ? 'bg-white/90 border-amber-200' 
                                    : 'bg-white/5 border-white/10'
                            }`}>
                                <a 
                                    href="#hero" 
                                    className={`block px-3 py-2 text-sm transition-all duration-200 ${
                                        isScrolled 
                                            ? 'text-amber-800 hover:text-amber-600 hover:bg-amber-50' 
                                            : 'text-white hover:text-white/80'
                                    }`}
                                    style={{fontFamily: 'Lora, serif'}}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Trang chủ
                                </a>
                                <a 
                                    href="#products" 
                                    className={`block px-3 py-2 text-sm transition-all duration-200 ${
                                        isScrolled 
                                            ? 'text-amber-800 hover:text-amber-600 hover:bg-amber-50' 
                                            : 'text-white hover:text-white/80'
                                    }`}
                                    style={{fontFamily: 'Lora, serif'}}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sản phẩm
                                </a>
                                <a 
                                    href="#about" 
                                    className={`block px-3 py-2 text-sm transition-all duration-200 ${
                                        isScrolled 
                                            ? 'text-amber-800 hover:text-amber-600 hover:bg-amber-50' 
                                            : 'text-white hover:text-white/80'
                                    }`}
                                    style={{fontFamily: 'Lora, serif'}}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Về chúng tôi
                                </a>
                                <a 
                                    href="#contact" 
                                    onClick={handleContactClick}
                                    className={`block px-3 py-2 text-sm transition-all duration-200 cursor-pointer ${
                                        isScrolled 
                                            ? 'text-amber-800 hover:text-amber-600 hover:bg-amber-50' 
                                            : 'text-white hover:text-white/80'
                                    }`}
                                    style={{fontFamily: 'Lora, serif'}}
                                >
                                    Liên hệ
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Contact Modal */}
            {showContactModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
                        <div className="text-center">
                            <h3 
                                className="text-2xl font-medium text-amber-900 mb-4"
                                style={{fontFamily: 'Lora, serif', fontStyle: 'italic'}}
                            >
                                Liên hệ đặt hàng
                            </h3>
                            <p 
                                className="text-gray-600 mb-6"
                                style={{fontFamily: 'Lora, serif'}}
                            >
                                Vui lòng gọi hoặc nhắn tin số điện thoại:
                            </p>
                            <div className="bg-amber-50 rounded-lg p-4 mb-6">
                                <p 
                                    className="text-3xl font-bold text-amber-800"
                                    style={{fontFamily: 'Lora, serif'}}
                                >
                                    0966 860 170
                                </p>
                            </div>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                                style={{fontFamily: 'Lora, serif'}}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

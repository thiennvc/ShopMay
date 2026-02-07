'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const defaultSlides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2000&auto=format&fit=crop',
        title: 'Vẻ Đẹp Á Đông',
        subtitle: 'Tinh tế trong từng đường kim mũi chỉ'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2000&auto=format&fit=crop',
        title: 'Thời Trang Công Sở',
        subtitle: 'Thanh lịch, hiện đại và sang trọng'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2000&auto=format&fit=crop',
        title: 'Thiết Kế Độc Quyền',
        subtitle: 'Mỗi bộ trang phục là một tác phẩm nghệ thuật'
    }
]

export default function HeroSlider() {
    const [slides, setSlides] = useState(defaultSlides)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const fetchSlides = async () => {
            try {
                const res = await fetch('/api/slides')
                const data = await res.json()
                if (data.success && data.data && data.data.length > 0) {
                    setSlides(data.data)
                }
            } catch (error) {
                console.error('Failed to fetch slides', error)
            }
        }
        fetchSlides()
    }, [])

    if (!mounted) return null // Prevent hydration mismatch

    return (
        <section style={{ height: 'calc(100vh - 80px)', width: '100%', position: 'relative' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                speed={1500}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                style={{ height: '100%', width: '100%' }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: 'white'
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <h2 style={{
                                        fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                                        fontFamily: 'var(--font-heading)',
                                        marginBottom: '1rem',
                                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                                    }}>
                                        {slide.title}
                                    </h2>
                                    <p style={{
                                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                        fontWeight: 300,
                                        textShadow: '0 1px 5px rgba(0,0,0,0.3)',
                                        marginBottom: '2rem'
                                    }}>
                                        {slide.subtitle}
                                    </p>
                                    <button className="btn" style={{
                                        background: 'rgba(255,255,255,0.9)',
                                        color: 'var(--text-main)',
                                        border: 'none',
                                        fontWeight: 'bold'
                                    }}>
                                        Xem Bộ Sưu Tập
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

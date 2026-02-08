'use client'
import HeroSlider from './components/HeroSlider'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import localImages from './data/images.json'

const defaultImages = []

export default function Home() {
    // Merge default images (now empty) with local images from folder
    const [images, setImages] = useState([...localImages])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const aodaiImages = images.filter(img => img.category === 'aodai')
    const officeImages = images.filter(img => img.category === 'office')

    return (
        <>
            <HeroSlider />

            {/* Intro */}
            <section className="section-padding container text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
                    <span style={{ fontSize: '0.6em', display: 'block', fontWeight: 'normal', marginBottom: '5px' }}>Nhà may</span>
                    KIM ĐÍNH
                </h2>
                <p style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.2rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Chúng tôi mang đến những thiết kế áo dài truyền thống và cách tân, cùng các mẫu váy đầm công sở thanh lịch,
                    tôn vinh vẻ đẹp dịu dàng nhưng không kém phần hiện đại của người phụ nữ Việt Nam.
                    <br /><br />
                    Mỗi đường kim mũi chỉ đều được chăm chút tỉ mỉ, gửi gắm tâm huyết và niềm đam mê thời trang của chúng tôi.
                </p>
                <Link href="/about" className="btn">Về Chúng Tôi</Link>
            </section>

            {/* Collection 1: Ao Dai */}
            <section className="section-padding" style={{ backgroundColor: 'var(--secondary)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Bộ Sưu Tập Áo Dài</h2>
                        <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '10px auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
                        {aodaiImages.map(img => (
                            <div key={img.id} style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                <Image
                                    src={img.src}
                                    alt={img.title || 'Áo Dài'}
                                    fill
                                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="hover-scale"
                                />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '15px', background: 'rgba(255,255,255,0.9)' }}>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>{img.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link href="/gallery?filter=aodai" className="btn" style={{ background: 'transparent', color: 'var(--text-main)' }}>Xem Tất Cả</Link>
                    </div>
                </div>
            </section>

            {/* Collection 2: Office */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Thời Trang Công Sở</h2>
                        <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '10px auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
                        {officeImages.map(img => (
                            <div key={img.id} style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                <Image
                                    src={img.src}
                                    alt={img.title || 'Công Sở'}
                                    fill
                                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="hover-scale"
                                />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '15px', background: 'rgba(255,255,255,0.9)' }}>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>{img.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link href="/gallery?filter=office" className="btn" style={{ background: 'transparent', color: 'var(--text-main)' }}>Xem Tất Cả</Link>
                    </div>
                </div>
            </section>

            {/* CSS for hover effect */}
            <style jsx global>{`
        .hover-scale:hover {
            transform: scale(1.05) !important;
        }
        @media (max-width: 992px) {
            .container div[style*="grid-template-columns"] {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }
        @media (max-width: 576px) {
            .container div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
            }
        }
      `}</style>

            {/* CTA */}
            <section className="section-padding text-center" style={{ background: 'linear-gradient(45deg, var(--primary), var(--secondary))' }}>
                <h2 style={{ marginBottom: '20px' }}>Đặt May Theo Yêu Cầu</h2>
                <p style={{ marginBottom: '30px' }}>Bạn có ý tưởng? Hãy để chúng tôi hiện thực hóa nó.</p>
                <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--text-main)' }}>Liên Hệ Ngay</Link>
            </section>
        </>
    )
}

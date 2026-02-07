'use client'
import HeroSlider from './components/HeroSlider'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const defaultImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1599707367072-cd6ad66aa1a8?q=80&w=800', category: 'aodai', title: 'Áo dài đỏ truyền thống' },
    { id: 2, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800', category: 'office', title: 'Đầm công sở thanh lịch' },
    { id: 3, src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800', category: 'aodai', title: 'Áo dài trắng cách tân' },
    { id: 4, src: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800', category: 'office', title: 'Set váy vest' },
    { id: 5, src: 'https://images.unsplash.com/photo-1550614000-4b9519e07d09?q=80&w=800', category: 'custom', title: 'Thiết kế dạ hội' },
    { id: 6, src: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800', category: 'custom', title: 'Váy cưới nhẹ nhàng' },
    { id: 7, src: 'https://images.unsplash.com/photo-1557754101-7fa11c341334?q=80&w=800', category: 'aodai', title: 'Áo dài lụa tơ tằm' },
    { id: 8, src: 'https://images.unsplash.com/photo-1616165509205-02758169992d?q=80&w=800', category: 'office', title: 'Váy liền thân cao cấp' },
]

export default function Home() {
    const [images, setImages] = useState(defaultImages)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const fetchImages = async () => {
            try {
                const res = await fetch('/api/images')
                const data = await res.json()
                if (data.success && data.data && data.data.length > 0) {
                    setImages(data.data)
                }
            } catch (error) {
                console.error('Failed to fetch images from API', error)
            }
        }
        fetchImages()
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

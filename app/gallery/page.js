'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

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

export default function Gallery() {
    const [images, setImages] = useState(defaultImages)
    const [filter, setFilter] = useState('all')
    const [selectedImage, setSelectedImage] = useState(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const storedImages = localStorage.getItem('galleryImages')
        if (storedImages) {
            try {
                setImages(JSON.parse(storedImages))
            } catch (e) { }
        }
    }, [])

    if (!mounted) return null

    const filteredImages = filter === 'all'
        ? images
        : images.filter(img => img.category === filter)

    return (
        <div className="section-padding container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <h1 className="text-center" style={{ marginBottom: '40px', fontSize: '3rem' }}>Bộ Sưu Tập</h1>

            {/* Filters */}
            <div className="flex-center" style={{ gap: '20px', marginBottom: '50px', flexWrap: 'wrap' }}>
                {['all', 'aodai', 'office', 'custom'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            padding: '10px 25px',
                            border: '1px solid var(--text-main)',
                            background: filter === cat ? 'var(--text-main)' : 'transparent',
                            color: filter === cat ? 'white' : 'var(--text-main)',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {cat === 'all' ? 'Tất cả' : cat === 'aodai' ? 'Áo Dài' : cat === 'office' ? 'Công Sở' : 'Thiết Kế'}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                <AnimatePresence>
                    {filteredImages.map(img => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={img.id}
                            style={{ position: 'relative', height: '400px', cursor: 'pointer', overflow: 'hidden', borderRadius: 'var(--radius)' }}
                            onClick={() => setSelectedImage(img)}
                            whileHover={{ y: -10 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.title || 'Gallery Image'}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                {img.title && <h3 style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{img.title}</h3>}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button style={{ position: 'absolute', top: '30px', right: '30px', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                            <FiX size={40} />
                        </button>
                        <div style={{ position: 'relative', width: '90%', height: '80%' }} onClick={e => e.stopPropagation()}>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title || 'Detail'}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        {selectedImage.title && <div style={{ position: 'absolute', bottom: '30px', color: 'white', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{selectedImage.title}</div>}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiUpload, FiTrash2, FiEdit, FiPlus, FiLogOut, FiImage, FiFileText, FiLayers, FiX } from 'react-icons/fi'

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [activeTab, setActiveTab] = useState('posts') // posts | images | slides

    // Modal State for Image Upload
    const [showUploadModal, setShowUploadModal] = useState(false)
    const [uploadType, setUploadType] = useState('url') // 'url' | 'file'
    const [newImage, setNewImage] = useState({ src: '', category: 'aodai' })
    const [filePreview, setFilePreview] = useState(null)

    // Mock Data
    const [posts, setPosts] = useState([
        { id: 1, title: 'Xu hướng áo dài 2024', date: '2023-10-01', status: 'Published' },
        { id: 2, title: 'Cách chọn vải may đầm công sở', date: '2023-09-15', status: 'Draft' },
    ])
    const [images, setImages] = useState([
        { id: 1, src: 'https://images.unsplash.com/photo-1599707367072-cd6ad66aa1a8?q=80&w=200', category: 'aodai' },
        { id: 2, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200', category: 'office' },
    ])

    // Slides Data
    const [slides, setSlides] = useState([
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
    ])
    const [newSlide, setNewSlide] = useState({ image: '', title: '', subtitle: '' })

    useEffect(() => {
        // Load slides
        const storedSlides = localStorage.getItem('heroSlides')
        if (storedSlides) {
            try {
                setSlides(JSON.parse(storedSlides))
            } catch (e) { }
        }
        // Load images
        const storedImages = localStorage.getItem('galleryImages')
        if (storedImages) {
            try {
                setImages(JSON.parse(storedImages))
            } catch (e) { }
        }
    }, [])

    const saveSlides = (updatedSlides) => {
        setSlides(updatedSlides)
        localStorage.setItem('heroSlides', JSON.stringify(updatedSlides))
    }

    const saveImages = (updatedImages) => {
        setImages(updatedImages)
        localStorage.setItem('galleryImages', JSON.stringify(updatedImages))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (username === 'admin' && password === 'admin123') {
            setIsLoggedIn(true)
            setError('')
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng')
        }
    }

    const handleDeletePost = (id) => {
        if (confirm('Bạn có chắc muốn xoá bài viết này?')) {
            setPosts(posts.filter(p => p.id !== id))
        }
    }

    const handleDeleteImage = (id) => {
        if (confirm('Bạn có chắc muốn xoá hình này?')) {
            const updated = images.filter(img => img.id !== id)
            saveImages(updated)
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setFilePreview(reader.result)
                setNewImage({ ...newImage, src: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAddImage = () => {
        if (!newImage.src) {
            alert('Vui lòng chọn hình hoặc nhập URL')
            return
        }
        const updated = [...images, { ...newImage, id: Date.now() }]
        saveImages(updated)
        setNewImage({ src: '', category: 'aodai' })
        setFilePreview(null)
        setShowUploadModal(false)
    }

    const handleAddSlide = () => {
        if (!newSlide.image || !newSlide.title) {
            alert('Vui lòng nhập Link ảnh và Tiêu đề')
            return
        }
        const updated = [...slides, { ...newSlide, id: Date.now() }]
        saveSlides(updated)
        setNewSlide({ image: '', title: '', subtitle: '' })
    }

    const handleDeleteSlide = (id) => {
        if (confirm('Xoá slide này?')) {
            const updated = slides.filter(s => s.id !== id)
            saveSlides(updated)
        }
    }

    if (!isLoggedIn) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
                <form onSubmit={handleLogin} style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
                    <h2 className="text-center" style={{ marginBottom: '30px' }}>Admin Panel</h2>
                    {error && <p style={{ color: 'red', marginBottom: '20px', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '10px' }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                        <label style={{ display: 'block', marginBottom: '10px' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <button type="submit" className="btn" style={{ width: '100%', border: 'none' }}>Đăng Nhập</button>
                </form>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <div style={{ width: '250px', background: '#333', color: 'white', padding: '20px' }}>
                <h2 style={{ marginBottom: '40px', color: 'white' }}>Admin</h2>
                <ul style={{ listStyle: 'none' }}>
                    <li
                        onClick={() => setActiveTab('posts')}
                        style={{ padding: '15px', cursor: 'pointer', background: activeTab === 'posts' ? '#444' : 'transparent', display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        <FiFileText /> Quản lý bài viết
                    </li>
                    <li
                        onClick={() => setActiveTab('images')}
                        style={{ padding: '15px', cursor: 'pointer', background: activeTab === 'images' ? '#444' : 'transparent', display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        <FiImage /> Quản lý hình ảnh
                    </li>
                    <li
                        onClick={() => setActiveTab('slides')}
                        style={{ padding: '15px', cursor: 'pointer', background: activeTab === 'slides' ? '#444' : 'transparent', display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        <FiLayers /> Quản lý Banner
                    </li>
                </ul>
                <button
                    onClick={() => setIsLoggedIn(false)}
                    style={{ marginTop: 'auto', background: 'transparent', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', cursor: 'pointer', width: '100%' }}
                >
                    <FiLogOut /> Đăng xuất
                </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: '40px', background: '#f9f9f9', overflowY: 'auto' }}>

                {activeTab === 'posts' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <h2>Danh sách bài viết</h2>
                            <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FiPlus /> Thêm bài viết</button>
                        </div>
                        <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: '#f1f1f1', borderBottom: '1px solid #ddd' }}>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>ID</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Tiêu đề</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Ngày đăng</th>
                                        <th style={{ padding: '15px', textAlign: 'left' }}>Trạng thái</th>
                                        <th style={{ padding: '15px', textAlign: 'right' }}>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map(post => (
                                        <tr key={post.id} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '15px' }}>{post.id}</td>
                                            <td style={{ padding: '15px' }}>{post.title}</td>
                                            <td style={{ padding: '15px' }}>{post.date}</td>
                                            <td style={{ padding: '15px' }}><span style={{ padding: '5px 10px', borderRadius: '15px', background: post.status === 'Published' ? '#e6fffa' : '#fff5f5', color: post.status === 'Published' ? '#2c7a7b' : '#c53030', fontSize: '0.85rem' }}>{post.status}</span></td>
                                            <td style={{ padding: '15px', textAlign: 'right' }}>
                                                <button style={{ marginRight: '10px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'blue' }}><FiEdit /></button>
                                                <button onClick={() => handleDeletePost(post.id)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'red' }}><FiTrash2 /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'images' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <h2>Thư viện hình ảnh</h2>
                            <button
                                className="btn"
                                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                                onClick={() => setShowUploadModal(true)}
                            >
                                <FiUpload /> Upload hình
                            </button>
                        </div>

                        {/* Upload Modal */}
                        {showUploadModal && (
                            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ background: 'white', padding: '30px', borderRadius: '8px', width: '500px', maxWidth: '90%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                        <h3 style={{ margin: 0 }}>Upload Hình Ảnh</h3>
                                        <button onClick={() => setShowUploadModal(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><FiX size={24} /></button>
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Nguồn ảnh</label>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                                                <input type="radio" checked={uploadType === 'url'} onChange={() => setUploadType('url')} /> URL (Link)
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                                                <input type="radio" checked={uploadType === 'file'} onChange={() => setUploadType('file')} /> Từ máy tính
                                            </label>
                                        </div>
                                    </div>

                                    {uploadType === 'url' ? (
                                        <div style={{ marginBottom: '20px' }}>
                                            <label style={{ display: 'block', marginBottom: '10px' }}>Link hình ảnh</label>
                                            <input
                                                value={newImage.src}
                                                onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
                                                placeholder="https://example.com/image.jpg"
                                                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ marginBottom: '20px' }}>
                                            <label style={{ display: 'block', marginBottom: '10px' }}>Chọn file từ máy</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                style={{ width: '100%' }}
                                            />
                                            {filePreview && (
                                                <div style={{ marginTop: '10px', height: '150px', position: 'relative' }}>
                                                    <Image src={filePreview} alt="Preview" fill style={{ objectFit: 'contain' }} />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div style={{ marginBottom: '30px' }}>
                                        <label style={{ display: 'block', marginBottom: '10px' }}>Chọn Album (Danh mục)</label>
                                        <select
                                            value={newImage.category}
                                            onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                                            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                        >
                                            <option value="aodai">Áo Dài</option>
                                            <option value="office">Đầm Công Sở</option>
                                            <option value="custom">Thiết Kế Riêng</option>
                                        </select>
                                    </div>

                                    <button onClick={handleAddImage} className="btn" style={{ width: '100%' }}>Thêm Vào Thư Viện</button>
                                </div>
                            </div>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                            {images.map(img => (
                                <div key={img.id} style={{ background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                                    <div style={{ position: 'relative', height: '150px', marginBottom: '10px', borderRadius: '4px', overflow: 'hidden' }}>
                                        <Image src={img.src} fill style={{ objectFit: 'cover' }} alt="img" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#888' }}>
                                            {img.category === 'aodai' ? 'Áo Dài' : img.category === 'office' ? 'Công Sở' : 'Thiết kế'}
                                        </span>
                                        <button onClick={() => handleDeleteImage(img.id)} style={{ border: 'none', background: 'transparent', color: 'red', cursor: 'pointer' }}><FiTrash2 /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'slides' && (
                    <div>
                        <h2 style={{ marginBottom: '30px' }}>Quản lý Banner (Slideshow)</h2>

                        {/* Add New Slide */}
                        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Thêm Slide Mới</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <input
                                    placeholder="Link Hình Ảnh (URL)"
                                    value={newSlide.image}
                                    onChange={(e) => setNewSlide({ ...newSlide, image: e.target.value })}
                                    style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                                <input
                                    placeholder="Tiêu đề (Vẻ đẹp Á Đông...)"
                                    value={newSlide.title}
                                    onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
                                    style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                                />
                                <input
                                    placeholder="Mô tả phụ (Tinh tế...)"
                                    value={newSlide.subtitle}
                                    onChange={(e) => setNewSlide({ ...newSlide, subtitle: e.target.value })}
                                    style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', gridColumn: 'span 2' }}
                                />
                            </div>
                            <button onClick={handleAddSlide} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <FiPlus /> Thêm hình vào Slide
                            </button>
                        </div>

                        {/* List Slides */}
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {slides.map((slide, index) => (
                                <div key={slide.id} style={{ display: 'flex', background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ position: 'relative', width: '150px', height: '80px', flexShrink: 0 }}>
                                        <Image src={slide.image} alt="slide" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{slide.title}</h4>
                                        <p style={{ margin: '5px 0 0', color: '#666' }}>{slide.subtitle}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => handleDeleteSlide(slide.id)} style={{ border: '1px solid red', background: 'white', color: 'red', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <FiTrash2 /> Xoá
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

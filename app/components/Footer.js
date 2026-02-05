import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid #eee', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                            <span style={{ fontSize: '0.8rem', display: 'block', fontWeight: 'normal' }}>Nhà may</span>
                            KIM ĐÍNH
                        </h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
                            Nơi tôn vinh vẻ đẹp phụ nữ Việt qua những tà áo dài truyền thống và trang phục công sở hiện đại, sang trọng.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <Link href="#" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}><FaFacebook /></Link>
                            <Link href="#" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}><FaInstagram /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Liên Hệ</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-light)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
                                <FaMapMarkerAlt style={{ color: 'var(--accent)' }} />
                                538 Quang Trung, Phường Thông Tây Hội, TP.HCM
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
                                <FaPhone style={{ color: 'var(--accent)' }} />
                                090 8318323
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaEnvelope style={{ color: 'var(--accent)' }} />
                                contact dinh.hokim@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Menu</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-light)' }}>
                            <li className="mb-1"><Link href="/">Trang chủ</Link></li>
                            <li className="mb-1"><Link href="/about">Giới thiệu</Link></li>
                            <li className="mb-1"><Link href="/gallery">Bộ sưu tập</Link></li>
                            <li className="mb-1"><Link href="/contact">Liên hệ</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="text-center" style={{ borderTop: '1px solid #eee', paddingTop: '20px', color: '#999', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Nhà may KIM ĐÍNH. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default function Contact() {
    return (
        <div className="container section-padding" style={{ paddingTop: '120px' }}>
            <h1 className="text-center" style={{ marginBottom: '50px' }}>Liên Hệ Với Chúng Tôi</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                {/* Form */}
                <div>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px' }}>Họ và Tên</label>
                            <input type="text" placeholder="Nhập họ tên của bạn" style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius)', border: '1px solid #ddd', fontSize: '1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px' }}>Email</label>
                            <input type="email" placeholder="example@gmail.com" style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius)', border: '1px solid #ddd', fontSize: '1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px' }}>Số Điện Thoại</label>
                            <input type="tel" placeholder="090..." style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius)', border: '1px solid #ddd', fontSize: '1rem' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px' }}>Nội Dung</label>
                            <textarea rows="5" placeholder="Bạn cần tư vấn gì?" style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius)', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
                        </div>
                        <button type="submit" className="btn" style={{ marginTop: '10px' }}>Gửi Tin Nhắn</button>
                    </form>
                </div>

                {/* Info & Map */}
                <div>
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Thông Tin Liên Hệ</h3>
                        <p className="mb-1"><strong>Địa chỉ:</strong> 538 Quang Trung, Phường Thông Tây Hội, TP.HCM</p>
                        <p className="mb-1"><strong>Hotline:</strong> 090 8318323</p>
                        <p className="mb-1"><strong>Email:</strong> dinh.hokim@gmail.com</p>
                        <p className="mb-1"><strong>Giờ làm việc:</strong> Từ 8:00 đến 20:00 (Thứ 2 - Chủ Nhật)</p>
                    </div>

                    {/* Map Placeholder */}
                    <div style={{ width: '100%', height: '300px', background: '#eee', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.584370215712!2d106.69611100650942!3d10.779782520689369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a1b6c7z%3A0x6bba3ef5ee9180f6!2sNotre%20Dame%20Cathedral%20of%20Saigon!5e0!3m2!1sen!2s!4v1652174239854!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: 'var(--radius)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

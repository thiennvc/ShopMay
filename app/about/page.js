import Image from 'next/image'

export default function About() {
    return (
        <div className="container section-padding" style={{ paddingTop: '120px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>

                {/* Text */}
                <div>
                    <h1 style={{ marginBottom: '30px', fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>
                        <span style={{ fontSize: '0.5em', display: 'block', fontWeight: 'normal' }}>Về Nhà may</span>
                        KIM ĐÍNH
                    </h1>
                    <p style={{ marginBottom: '20px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                        Nhà may KIM ĐÍNH được thành lập với niềm đam mê bất tận với tà áo dài truyền thống và mong muốn mang đến vẻ đẹp thanh lịch, hiện đại cho phụ nữ Việt nơi công sở.
                    </p>
                    <p style={{ marginBottom: '20px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                        Với hơn 10 năm kinh nghiệm trong nghề may đo, đội ngũ thợ lành nghề của chúng tôi luôn tỉ mỉ trong từng đường kim mũi chỉ, lựa chọn những chất liệu vải thượng hạng nhất để tạo nên những tác phẩm hoàn hảo.
                    </p>
                    <div style={{ marginTop: '30px', padding: '20px', borderLeft: '4px solid var(--accent)', background: 'var(--secondary)' }}>
                        <p style={{ fontStyle: 'italic', fontWeight: 'bold' }}>"Chúng tôi không chỉ may quần áo, chúng tôi kiến tạo phong cách và sự tự tin cho phái đẹp."</p>
                    </div>
                </div>

                {/* Image */}
                <div style={{ position: 'relative', height: '500px', borderRadius: 'var(--radius)', overflow: 'hiddenbox-shadow: var(--shadow-md)' }}>
                    <Image
                        src="https://images.unsplash.com/photo-1550614000-4b9519e07d09?q=80&w=800"
                        alt="Xưởng may"
                        fill
                        style={{ objectFit: 'cover', borderRadius: 'var(--radius)' }}
                    />
                </div>
            </div>

            {/* Stats/Features */}
            <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
                {[
                    { num: '10+', text: 'Năm Kinh Nghiệm' },
                    { num: '1000+', text: 'Khách Hàng Hài Lòng' },
                    { num: '500+', text: 'Mẫu Thiết Kế' },
                    { num: '100%', text: 'Tâm Huyết' }
                ].map((item, index) => (
                    <div key={index} style={{ padding: '30px', background: 'white', boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius)' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '10px' }}>{item.num}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

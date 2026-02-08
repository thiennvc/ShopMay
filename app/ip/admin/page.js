
'use client'
import Link from 'next/link'

export default function Admin() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', padding: '40px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
            <h1>Admin Panel (File-System Mode)</h1>
            <p>
                Trang web hiện đang chạy ở chế độ <strong>File System</strong> (Tĩnh).
                <br />
                Tính năng Upload trực tiếp đã được tắt để tối ưu hóa tốc độ và không cần Database.
            </p>

            <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', maxWidth: '600px', textAlign: 'left' }}>
                <h3>Hướng dẫn thêm/xóa ảnh:</h3>
                <ol style={{ lineHeight: '1.8' }}>
                    <li>Mở thư mục code trên máy tính của bạn: <code>d:\Git\ShopMay\public\images</code></li>
                    <li>Copy ảnh mới vào thư mục <strong>aodai</strong> hoặc <strong>office</strong>.</li>
                    <li>Đặt tên file không dấu (ví dụ: <code>mau-moi-1.jpg</code>).</li>
                    <li>Mở Terminal và chạy lệnh: <code>git add . ; git commit -m "Them anh moi" ; git push</code></li>
                    <li>Web sẽ tự động cập nhật sau vài phút.</li>
                </ol>
            </div>

            <Link href="/" className="btn">
                Quay về Trang Chủ
            </Link>
        </div>
    )
}

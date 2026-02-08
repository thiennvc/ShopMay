# 🌸 NHÀ MAY KIM ĐÍNH - Website Shop Thời Trang Cao Cấp

Chào mừng bạn đến với bộ mã nguồn website **NHÀ MAY KIM ĐÍNH**. Tài liệu này sẽ hướng dẫn bạn chi tiết từ cách cài đặt, vận hành trên máy cá nhân cho đến cách tùy chỉnh nội dung và đưa website lên mạng.

---

## 1. Yêu Cầu Hệ Thống
Để chạy được website này, máy tính của bạn cần cài đặt:
- **Node.js**: Phiên bản 18.0.0 trở lên (Khuyên dùng bản mới nhất LTS).
  - Tải tại: [nodejs.org](https://nodejs.org/)
- **Trình soạn thảo code**: VS Code (Khuyên dùng).

---

## 2. Cài Đặt & Chạy Thử (Local)

### Bước 1: Cài đặt thư viện
Mở **Terminal** (hoặc CMD/PowerShell) tại thư mục chứa dự án và chạy lệnh sau để tải các gói cần thiết:
```bash
npm install
```
*Đợi một lát để quá trình tải hoàn tất.*

### Bước 2: Chạy trang web
Sau khi cài đặt xong, chạy lệnh sau để khởi động web server:
```bash
npm run dev
```

### Bước 3: Truy cập
Mở trình duyệt (Chrome, Edge, Safari...) và truy cập địa chỉ:
👉 **http://localhost:3000**

---

## 3. Hướng Dẫn Sử Dụng Admin Panel

Trang quản trị dành riêng cho chủ shop để quản lý nội dung (Demo).

- **Đường dẫn Admin:** [http://localhost:3000/ip/admin](http://localhost:3000/ip/admin)
- **Tài khoản đăng nhập mặc định:**
  - Username: `admin`
  - Password: `admin123`

**Chức năng hiện có (Demo):**
- Đăng nhập bảo mật.
- Xem danh sách bài viết.
- Upload/Xóa hình ảnh trong Gallery.

---

## 4. Hướng Dẫn Tùy Chỉnh Nội Dung

Bạn có thể chỉnh sửa nội dung website trực tiếp bằng cách sửa các file code tương ứng.

### 🎨 Chỉnh Màu Sắc & Font Chữ
Mở file: `app/globals.css`
- Thay đổi mã màu tại phần `:root`:
  ```css
  :root {
    --primary: #E8D5C4; /* Màu be chủ đạo */
    --accent: #DB7093;  /* Màu điểm nhấn (hồng đậm) */
    ...
  }
  ```

### 🖼️ Thay Đổi Hình Ảnh Banner (Slide)
Mở file: `app/components/HeroSlider.js`
- Tìm mảng `const slides = [...]` và thay thế đường link ảnh (URL) trong phần `image: '...'`.

### 📞 Thay Đổi Thông Tin Liên Hệ (Footer & Contact)
- **Footer:** Chỉnh sửa file `app/components/Footer.js`
- **Trang Liên Hệ:** Chỉnh sửa file `app/contact/page.js`

### 📷 Thêm Ảnh Vào Gallery
Mở file: `app/gallery/page.js`
- Thêm hoặc sửa các đối tượng trong danh sách `const images = [...]`.
- `category`: Điền 'aodai', 'office', hoặc 'custom' để bộ lọc hoạt động đúng.

---

## 5. Cấu Trúc Thư Mục
Để bạn dễ dàng quản lý:
```
web aodai/
├── app/                  # Thư mục chính chứa code giao diện
│   ├── about/            # Trang Giới thiệu
│   ├── components/       # Các thành phần tái sử dụng (Navbar, Slider, Footer...)
│   ├── contact/          # Trang Liên hệ
│   ├── gallery/          # Trang Bộ sưu tập
│   ├── ip/admin/         # Trang Quản trị (Admin)
│   ├── globals.css       # File CSS toàn cục (Màu sắc, Font)
│   ├── layout.js         # Khung sườn chung của web
│   └── page.js           # Trang Chủ
├── public/               # Chứa ảnh tĩnh, icon (nếu tải ảnh về máy)
├── next.config.js        # Cấu hình Next.js
└── package.json          # Khai báo thư viện
```

---

## 6. Đưa Website Lên Mạng (Deploy) - Khuyên dùng Vercel

Cách nhanh nhất và miễn phí để đưa website này cho khách hàng xem là dùng **Vercel**:

1. Đăng ký tài khoản tại [vercel.com](https://vercel.com).
2. Tải và cài đặt [Vercel CLI](https://vercel.com/docs/cli) hoặc cài Git và đẩy code lên GitHub.
3. Liên kết Vercel với GitHub repo của bạn.
4. Vercel sẽ tự động nhận diện Next.js và Build website.
5. Bạn sẽ nhận được đường link `https://web-aodai.vercel.app` để gửi cho khách.

---
**Chúc bạn kinh doanh thành công rực rỡ!** 🌸
Nếu cần hỗ trợ thêm về kỹ thuật, hãy liên hệ lại với đội ngũ phát triển.

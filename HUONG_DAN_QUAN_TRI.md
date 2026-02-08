
# HƯỚNG DẪN QUẢN TRỊ WEBSITE SHOP MAY (CHẾ ĐỘ FILE SYSTEM)

Chào mừng bạn đến với tài liệu hướng dẫn quản trị website.
Hiện tại, trang web của bạn hoạt động ở chế độ **Tĩnh (Static)** cực kỳ ổn định và nhanh.
Bạn sẽ quản lý nội dung bằng cách chỉnh sửa File và Folder trực tiếp.

---

## 1. QUẢN LÝ HÌNH ẢNH ALBUM (GALLERY)

Web tự động hiển thị tất cả hình ảnh có trong 2 thư mục sau:
- **Áo Dài**: `d:\Git\ShopMay\public\images\aodai`
- **Công Sở**: `d:\Git\ShopMay\public\images\office`

### Cách THÊM hình mới:
1.  Mở thư mục trên máy tính theo đường dẫn trên.
2.  Copy ảnh của bạn vào thư mục `aodai` hoặc `office`.
3.  **Đặt tên file**: Hãy đặt tên không dấu, phân cách bằng gạch ngang.
    *   Ví dụ: `ao-dai-do-tet-2025.jpg` -> Web sẽ tự đẹp tên thành: "Ao Dai Do Tet 2025".
4.  Sau khi copy xong, bạn cần chạy lệnh cập nhật (xem phần cuối).

### Cách XÓA hình cũ:
1.  Vào đúng thư mục, xóa file hình bạn muốn bỏ đi.
2.  Chạy lệnh cập nhật.

---

## 2. QUẢN LÝ BANNER (SLIDER TRANG CHỦ)

Banner (Slide) được cấu hình trong file mã nguồn.

### Cách sửa:
1.  Mở file: `d:\Git\ShopMay\app\components\HeroSlider.js` (Dùng Notepad hoặc VS Code).
2.  Tìm đoạn code bắt đầu bằng `const defaultSlides = [...]`.
3.  Bạn sẽ thấy danh sách các slide như sau:
    ```javascript
    {
        id: 1,
        image: 'https://...', // Link ảnh
        title: 'Tiêu đề to',   // Vẻ Đẹp Á Đông
        subtitle: 'Mô tả nhỏ'  // Tinh tế từng đường kim...
    },
    ```
4.  **Thay đổi ảnh**: Bạn dán Link ảnh mới vào dòng `image`.
    *   *Mẹo*: Bạn có thể để ảnh banner vào thư mục `public/images/slider` (tự tạo thêm) và điền đường dẫn là `/images/slider/ten-anh.jpg`.
5.  **Thay đổi chữ**: Sửa nội dung trong `title` và `subtitle`.
6.  Lưu file lại.

---

## 3. QUẢN LÝ BÀI VIẾT & THÔNG TIN (POSTS)

Hiện tại web chưa có tính năng Blog động. Các thông tin "bài viết" nằm rải rác ở các trang giới thiệu.

### Sửa trang chủ (Lời giới thiệu, Slogan):
- Mở file: `d:\Git\ShopMay\app\page.js`
- Tìm các đoạn text tiếng Việt (Ví dụ: "Nhà may KIM ĐÍNH", "Chúng tôi mang đến...").
- Sửa lại theo ý bạn và Lưu file.

### Sửa trang Giới Thiệu (About):
- Mở file: `d:\Git\ShopMay\app\about\page.js`
- Sửa các đoạn văn giới thiệu, số năm kinh nghiệm, tiêu chí...

### Sửa trang Liên Hệ (Contact):
- Mở file: `d:\Git\ShopMay\app\contact\page.js`
- Tìm và sửa: Số điện thoại, Email, Địa chỉ, Giờ làm việc.
- Sửa bản đồ: Thay đoạn `src="..."` trong thẻ `<iframe>` bằng link Embed Map mới của Google Maps.

---

## 4. CÁCH CẬP NHẬT LÊN WEB (QUAN TRỌNG)

Sau khi bạn đã thêm ảnh hoặc sửa file xong. Bạn cần làm bước này để Web chính thức thay đổi.

1.  Mở **Terminal** (hoặc CMD/PowerShell) tại thư mục `d:\Git\ShopMay`.
2.  Gõ lần lượt 3 lệnh sau (nhấn Enter sau mỗi lệnh):

    ```bash
    git add .
    ```
    *(Lệnh này báo cho Git biết có file thay đổi)*

    ```bash
    git commit -m "Cap nhat noi dung web"
    ```
    *(Lệnh này xác nhận lưu thay đổi. Bạn có thể thay nội dung trong ngoặc kép)*

    ```bash
    git push
    ```
    *(Lệnh này đẩy code lên mạng)*

3.  Sau khi `git push` thành công, hãy đợi khoảng 2-3 phút. Cloudflare sẽ tự động nhận code mới và cập nhật website cho bạn.

---
**Chúc bạn quản trị website thành công!**

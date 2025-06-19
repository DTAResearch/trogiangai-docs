---
sidebar_position: 4
---

import GoalBox from '@site/src/components/GoalBox';

# Chức năng của Sinh viên

<GoalBox>
Hệ thống Trợ giảng AI được thiết kế nhằm **đồng hành và hỗ trợ sinh viên trong suốt quá trình học tập**, trước – trong – sau mỗi buổi học:
  - Tiếp cận nhanh chóng bài giảng theo nhiều cách (tóm lược, chi tiết, keyword) giúp sinh viên **nắm bắt nội dung linh hoạt và phù hợp với nhu cầu cá nhân**
  - **Làm bài kiểm tra thông minh** với hệ thống gồm trắc nghiệm, điền từ, tự luận – kèm theo **phân tích tự động điểm mạnh**, điểm yếu và gợi ý nội dung cần cải thiện
  - **Tương tác chủ động với Trợ giảng AI** qua chức năng hỏi – đáp về kiến thức bất kỳ lúc nào
  - Giúp sinh viên **rèn luyện thói quen tự học, nhận diện khoảng trống kiến thức**, từ đó nâng cao hiệu quả học tập mỗi ngày
</GoalBox>

:::info

Tài khoản sinh viên được thiết kế để hỗ trợ người học trong việc theo dõi tiến độ học tập và tham gia các lớp học. Các tính năng bao gồm:
- **Thống kê cá nhân.**
- **Quản lý Học phần:** `Kiến thức`, `Trợ lý (Bài giảng, Kiểm tra)`
- **Quản lý Phản hồi.** *(coming soon)*


:::

## 1. Thống kê cá nhân
Xem báo cáo kết quả học tập: Sinh viên có thể theo dõi tiến độ được lịch sử cuộc hội thoại của mình. Trong tương lai sản phẩm sẽ phát triển để sinh viên có thể xem được thống kê của bản thân và thống kê được kết quả học tập của mình (điểm yếu, điểm cần cải thiện)

![Thống kê cá nhân](/img/png/thongke.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thống kê cá nhân.</em>
</p>

## 2. Quản lý Học phần
**Xem danh sách:** Xem các Học phần có trong hệ thống.

![Học phần sinh viên](/img/png/hocphan.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện danh sách Học phần.</em>
</p>

**Tìm kiếm thông tin:** Tìm kiếm thông tin chương trình đào tạo theo tên, bộ lọc theo Học kỳ hoặc theo Chương trình đào tạo.

![Tìm kiếm thông tin theo tên](/img/png/timkiemhocphantheoten.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện tìm kiếm học phần theo tên.</em>
</p>

### a. Kiến thức
Xem danh sách: Xem các Kiến thức có trong hệ thống.

![Lịch sử chat](/img/png/kienthuc.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách Kiến thức.</em>
</p>

### b. Trợ lý
**Xem danh sách:** Xem các `Trợ lý` có trong hệ thống.

![Danh sách trợ lý](/img/png/dstroly.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách trợ lý.</em>
</p>

Từ danh sách trợ lý, học sinh có thể xem lịch sử các đoạn chat đã tạo trước đó, truy cập đến đoạn chat cũ, tạo mới đoạn chat với trợ lý đã chọn.

![Lịch sử chat](/img/png/lichsuchat.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách trợ lý.</em>
</p>

#### Xem nội dung bài giảng

Học sinh có thể truy cập vào xem bài giảng hoặc làm bài kiểm tra bằng cách chọn vào mô hình trợ lý.

![Bài giảng](/img/gif/baiGiang.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Bài giảng.</em>
</p>

#### Làm bài kiểm tra

Học sinh có thể bắt đầu kiểm tra bằng cách chọn **Làm bài kiểm tra**

Các câu hỏi sẽ được tạo tự động bằng AI từ dữ liệu bài giảng, bao gồm 20 câu hỏi: `Trắc nghiệm`, `Điền chỗ trống` và `Tự luận`.

![Giao diện câu hỏi kiểm tra](/img/gif/questionTest.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Các dạng câu hỏi kiểm tra.</em>
</p>

Sau khi Sinh viên hoàn thành hết 20 câu kiểm tra tợ lý AI sẽ chấm bài đưa ra `Điểm số`, `Tỷ lệ đúng`, `Thời gian`, `Nhận xét tổng quan`, `Kiến thức đã nắm được`, `Cần Cải Thiện`, `Gợi ý cải thiện`, Xem chi tiết đáp án từng câu và giải thích đáp án.

![Giao diện kiểm tra với AI](/img/gif/testWithAI.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện kiểm tra với AI.</em>
</p>




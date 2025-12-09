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
- **Quản lý Học phần:** `Kiến thức`, `Trợ giảng (Bài giảng, Kiểm tra)`
- **Quản lý Phản hồi.** *(coming soon)*


:::

## 1. Thống kê cá nhân
Xem báo cáo kết quả học tập: Sinh viên có thể theo dõi tiến độ được lịch sử cuộc hội thoại của mình. Trong tương lai sản phẩm sẽ phát triển để sinh viên có thể xem được thống kê của bản thân và thống kê được kết quả học tập của mình (điểm yếu, điểm cần cải thiện)

![Thống kê cá nhân](/img/SV_img/SV_thongke.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thống kê cá nhân.</em>
</p>

## 2. Quản lý Học phần
**Xem danh sách:** Xem các Học phần có trong hệ thống.

![Học phần sinh viên](/img/SV_img/SV_hocphan.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện danh sách Học phần.</em>
</p>

**Tìm kiếm thông tin:** Tìm kiếm thông tin chương trình đào tạo theo tên, bộ lọc theo Học kỳ hoặc theo Chương trình đào tạo.

![Tìm kiếm thông tin theo tên](/img/SV_img/SV_timkiemhocphan.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện tìm kiếm học phần theo tên.</em>
</p>

### a. Học liệu
Xem danh sách: Xem các Học liệu có trong hệ thống.

![Học liệu](/img/SV_img/SV_dshoclieu.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách Học liệu.</em>
</p>

### b. Trợ giảng
**Xem danh sách:** Xem các `Trợ giảng` có trong hệ thống.

![Danh sách trợ giảng](/img/SV_img/SV_dstrogiang.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách trợ giảng.</em>
</p>


#### Xem nội dung bài giảng

Học sinh có thể truy cập vào xem bài giảng hoặc làm bài kiểm tra bằng cách chọn nút Bài giảng AI trên mô hình trợ giảng.

![Nút Bài giảng AI](/img/SV_img/SV_nutbaigiangAI.png)

<p style={{ textAlign: 'center' }}>
  <em>Vị trí nút Bài giảng AI.</em>
</p>

![Bài giảng](/img/png/baiGiang.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Bài giảng.</em>
</p>

#### Làm bài kiểm tra

Học sinh có thể bắt đầu kiểm tra bằng cách chọn nút **Kiểm tra** trên mô hình trợ giảng

![Nút Kiểm tra](/img/SV_img/SV_nutbaitap.png)

<p style={{ textAlign: 'center' }}>
  <em>Vị trí nút Kiểm tra.</em>
</p>

Các câu hỏi sẽ được tạo tự động bằng AI từ dữ liệu bài giảng, bao gồm 20 câu hỏi: `Trắc nghiệm`, `Điền chỗ trống` và `Tự luận`.

![Giao diện câu hỏi kiểm tra](/img/gif/testWithAI.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Các dạng câu hỏi kiểm tra.</em>
</p>

Sau khi Sinh viên hoàn thành hết các câu kiểm tra trợ lý AI sẽ chấm bài đưa ra `Điểm số`, `Tỷ lệ đúng`, `Thời gian`, `Nhận xét tổng quan`, `Kiến thức đã nắm được`, `Cần Cải Thiện`, `Gợi ý cải thiện`, Xem chi tiết đáp án từng câu và giải thích đáp án.

![Giao diện kiểm tra với AI](/img/gif/testWithAI.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện kiểm tra với AI.</em>
</p>

#### Bài giảng AI

- **Truy cập và học tập linh hoạt**: Hệ thống cho phép sinh viên đọc nội dung bài giảng, bao gồm văn bản, hình ảnh đính kèm, được tạo tự động bởi AI dựa trên dữ liệu học phần.
      ![Giao diện Nội dung Bài giảng AI](/img/SV_img/SV_baigiangAI.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện Nội dung Bài giảng AI.</em>
      </p>

- **Học qua audio bài giảng:** Sinh viên có thể bật tính năng Audio để nghe toàn bộ nội dung bài giảng. Ngoài ra sinh viên có thể tạm dừng, tua lại, điều chỉnh tốc độ phát hoặc nghe lại nhiều lần để củng cố kiến thức của mình.
      ![Audio bài giảng](/img/png/audio.png)
      <p style={{ textAlign: 'center' }}>
        <em>Vị trí bật audio bài giảng.</em>
      </p>

- **Tương tác với nội dung**: Sinh viên chỉ có thể chuyển slide sau khi trả lời đúng câu hỏi ôn tập (hiểu bài).
      ![Giao diện Câu hỏi ôn tập Bài giảng AI](/img/SV_img/SV_cauhoislide.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện Câu hỏi ôn tập Bài giảng AI.</em>
      </p>

- **Hỏi đáp chủ động**: Sinh viên có thể đặt câu hỏi trực tiếp với Trợ giảng AI để làm rõ kiến thức, với giao diện hỗ trợ **lịch sử chat** để xem lại các đoạn hội thoại cũ.
      ![Giao diện Chat Bài giảng AI](/img/SV_img/SV_chatAI.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện Chat Bài giảng AI.</em>
      </p>

- **Sinh viên kiểm tra tiến độ bài học:** Sinh viên có thể kiểm tra tiến độ bài học tập của mình trong và sau quá trình học tập trên bài giảng AI.
     ![Nút kiểm tra tiến độ](/img/SV_img/SV_nuttiendo.png)
      <p style={{ textAlign: 'center' }}>
        <em>Sinh viên chọn nút để kiểm tra tiến độ học tập.</em>
      </p>

     ![Giao diện kiểm tra tiến độ học tập](/img/SV_img/SV_tiendo.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện kiểm tra tiến độ học tập.</em>
      </p>

    **Công thức tính điểm chuyên cần (Tự học)**

      Hệ thống tự động tính toán điểm chuyên cần của sinh viên dựa trên tiến độ xem slide và thời hạn (deadline) đã được thiết lập. Công thức áp dụng hệ số giảm điểm đối với các nội dung hoàn thành muộn.

      > **Công thức tính:**
      >
      > `Điểm chuyên cần = [ S_đúng_hạn + (S_muộn × K_phạt) ] / S_tổng × 10`

      **Trong đó:**
      - **S_đúng_hạn**: Số lượng slide sinh viên hoàn thành trước deadline.
      - **S_muộn**: Số lượng slide hoàn thành sau deadline (nhưng trước khi kết thúc học phần).
      - **K_phạt**: Hệ số phạt cho việc học muộn (Ví dụ: `0.5` nghĩa là chỉ được tính 50% điểm cho slide đó).
      - **S_tổng**: Tổng số slide bắt buộc của bài học.
  
- **Hướng dẫn sử dụng**:
  1. Truy cập danh sách **Trợ giảng** từ giao diện Quản lý Học phần.
  2. Chọn bài giảng mong muốn từ danh sách hoặc tìm kiếm bằng từ khóa.
  3. Nhấp vào **Bài giảng AI** để xem nội dung hoặc bắt đầu tương tác với AI.
  4. Sử dụng ô nhập liệu để đặt câu hỏi hoặc yêu cầu tóm tắt nội dung.
  5. Bật audio để nghe trực tiếp nội dung bài giảng.
  6. Trả lời câu hỏi ôn tập để chuyển sang slide kế tiếp.


---
sidebar_position: 3
---
# Chức năng của Giảng viên/Giáo viên

import GoalBox from '@site/src/components/GoalBox';

<GoalBox>
Hệ thống Trợ giảng AI được thiết kế để **hỗ trợ Giảng viên nâng cao hiệu quả giảng dạy mà không tăng thêm gánh nặng thao tác**, với các chức năng thiết thực như:
  - **Tổ chức dạy học linh hoạt, hiệu quả:**
    - Dễ dàng upload hoặc nhúng tài liệu bài giảng (Docx, PDF, Markdown)
    - Giao bài học trước để sinh viên tự học – thời gian trên lớp tập trung giải đáp, thảo luận, và luyện tập nâng cao
    - Dashboard tổng quan giúp nắm bắt tình hình lớp học trước buổi dạy
  - **Tạo hoạt động giảng dạy tương tác ngay tại lớp:**
    - Tạo nhanh bài kiểm tra hoặc hoạt động học tập thông qua Trợ giảng AI
    - Hỗ trợ tạo câu hỏi đa dạng, phù hợp trình độ và mục tiêu bài học
  - **Tái sử dụng và điều chỉnh học liệu linh hoạt:**
    - Lưu trữ và nhân bản bài giảng, học liệu, trợ giảng AI từ các học kỳ trước
    - Dễ dàng chỉnh sửa và áp dụng lại cho lớp học mới mà không cần soạn từ đầu
  - **Hợp tác và chia sẻ giữa giảng viên:**
    - Có không gian chia sẻ học liệu, bài giảng, và kinh nghiệm giảng dạy giữa các giảng viên cùng bộ môn hoặc liên ngành
</GoalBox>

:::info

Tài khoản Giảng viên/Giáo viên được thiết kế để hỗ trợ giảng viên/giáo viên trong việc quản lý lớp học và trợ lý tương ứng mà họ phụ trách. Các tính năng bao gồm:

- **Quản lý Học phần**
- **Quản lý Lớp học**
- **Phân tích**

:::
## 1. Quản lý Học phần

Xem danh sách các **`Học phần`** giảng viên/giáo viên được giao có trong hệ thống.

Tìm kiếm thông tin chương trình đào tạo theo tên, bộ lọc theo Học kỳ hoặc theo Chương trình đào tạo.

![Giao diện danh sách Học phần](/img/png/GV_dshocphan.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện danh sách Học phần.</em>
</p>

### 1.1. Trợ giảng

Giảng viên/Giáo viên có thể xem danh sách các **`Trợ giảng`** có trong hệ thống và tìm kiếm thông tin **`Trợ giảng`** theo tên.

![Giao diện quản trị danh sách Trợ giảng](/img/png/GV_dstrogiang.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách Trợ giảng.</em>
</p>

#### 1.1.1. Tạo mới, chỉnh sửa trợ giảng

Bao gồm các thông tin: cơ bản, nâng cao, bài giảng
  - Phần **Cơ bản** bao gồm các thông tin:
    - Tên trợ giảng *(bắt buộc)*: Tên có thể phản ánh mục tiêu sử dụng hoặc học phần liên quan.
    - Mô hình gốc *(bắt buộc)*: Mô hình AI sẽ được dùng làm nền tảng. Ví dụ: Grok, có thể phù hợp với mục đích dạy học và xử lý nhanh.
    - Quyền truy cập:
      - **Chỉ những sinh viên thuộc CTĐT** (mặc định): Chỉ các sinh viên thuộc chương trình đào tạo liên quan mới truy cập được.
      - **Công khai với mọi người**: Mọi người đều có thể truy cập và sử dụng trợ giảng này.
    - Mô tả *(tuỳ chọn)*: Thêm thông tin để người dùng khác hiểu rõ về mục đích, nội dung hoặc phạm vi của trợ giảng.

  - Phần **Nâng cao** bao gồm các thông tin:
    - Học liệu có sẵn *(tuỳ chọn)*: Chọn Học liệu đã được tạo trước đó để cung cấp dữ liệu cho mô hình trợ giảng
    - Ngữ cảnh hệ thống *(tuỳ chọn)*: Người dùng có thể cung cấp ngữ cảnh cụ thể mà trợ giảng cần hiểu – ví dụ: môn học, cấp độ sinh viên, các quy định học thuật.

    ***Prompt mẫu:***

    ```
    Bạn là một trợ giảng AI cho giảng viên/giáo viên môn "Cấu trúc dữ liệu và giải thuật" tại một trường đại học.
    Môn học này được giảng dạy cho sinh viên năm hai ngành Công nghệ thông tin.
    Mục tiêu là giúp sinh viên nắm vững các khái niệm như: danh sách liên kết, cây nhị phân, đồ thị, thuật toán tìm kiếm và sắp xếp, phân tích độ phức tạp thuật toán.

    Sinh viên có kiến thức cơ bản về lập trình Python, nhưng còn yếu về tư duy thuật toán.
    Họ cần được giải thích chi tiết, có ví dụ minh hoạ cụ thể, so sánh giữa các thuật toán và tình huống áp dụng thực tế.

    Khi trả lời, bạn cần sử dụng ngôn ngữ thân thiện, dễ hiểu, tránh từ ngữ quá học thuật.
    Nếu có thể, hãy đưa ra ví dụ bằng Python, biểu đồ hoặc sơ đồ cấu trúc dữ liệu. Luôn khuyến khích sinh viên đặt câu hỏi tiếp theo.

    Nếu sinh viên hỏi ngoài phạm vi môn học, hãy từ chối nhẹ nhàng và hướng họ quay lại nội dung liên quan.
    ```
    - Gợi ý hệ thống *(tuỳ chọn)*: Là câu hỏi hướng dẫn có sẵn cho sinh viên khi truy cập vào chat học tiếp và chat với trợ giảng.

![Giao diện tạo mới trợ giảng](/img/gif/GV_taotrogiang.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Tạo mới trợ giảng.</em>
</p>

- Phần **Bài đọc**: Hỗ trợ soạn nội dung bằng `Markdown` — giúp định dạng văn bản, chèn code, liên kết, bảng biểu,... *(Lưu ý chỉ có thể thêm Bài đọc sau khi tạo Trợ giảng).*

![Giao diện thêm nội dung Bài đọc](/img/gif/GV_taobaigiang.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Thêm nội dung Bài đọc.</em>
</p>

#### 1.1.2. Chức năng Kiểm tra
- Tạo, chỉnh sửa, xóa Thông tin cấu hình Bài kiểm tra: Tiêu đề, thời gian làm bài (phút), mô tả, bố cục câu hỏi (trắc nghiệm, điền từ, tự luận), mô hình AI, hạn nộp bài kiểm tra, Prompt tùy chỉnh nâng cao.
- Tạo bộ đề tự động theo cấu hình Bài kiểm tra.
- Chỉnh sửa nội dung câu hỏi bộ đề kiểm tra:
    - Trắc nghiệm: Nội dung câu hỏi, điểm số, nội dung đáp án, đáp án đúng.
    - Điền từ: Nội dung câu hỏi, điểm số, đáp án đúng.
    - Trắc nghiệm: Nội dung câu hỏi, điểm số, đáp án mẫu, tiêu chí chấm điểm.
- Xóa bộ đề kiểm tra

 ![Giao diện cấu hình bài kiểm tra](/img/gif/GV_Cauhinhbaikiemtra.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Cấu hình đề kiểm tra.</em>
</p>

- Prompt tùy chỉnh nâng cao: Cho phép giảng viên định nghĩa yêu cầu chi tiết để AI tạo bộ đề kiểm tra bám sát mục tiêu giảng dạy. Chức năng này giúp điều chỉnh sâu hơn về nội dung và mức độ khó của câu hỏi, bao gồm:

  - Thiết lập đầu ra: Xác định rõ mức độ khó và tiêu chí chấm điểm.
  - Tập trung vào chủ đề cụ thể: Giới hạn phạm vi sinh câu hỏi xoay quanh một nội dung, bài học, kỹ năng hoặc năng lực nhất định.
  - Điều chỉnh ngôn ngữ và phong cách: Chỉ định ngôn ngữ tạo câu hỏi, giọng văn, mức độ học thuật, hoặc yêu cầu về cấu trúc trình bày.
  - Kết hợp nhiều điều kiện: Có thể đồng thời áp dụng giới hạn về chủ đề, yêu cầu về ngôn ngữ, định dạng và tiêu chí đánh giá.

 ![Giao diện Cấu hình nâng cao bài kiểm tra](/img/png/demo_kiemtra_cauhoi.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Cấu hình nâng cao bài kiểm tra.</em>
</p>

  - *Ví dụ minh họa từ giao diện*: Giảng viên nhập yêu cầu ngôn ngữ đầu ra của bộ đề kiểm tra: `Nội dung câu hỏi bằng tiếng Đức.`
  - Khi lưu cấu hình, hệ thống sẽ:
      - Tự động tạo các câu hỏi trắc nghiệm đúng số lượng và định dạng đã cấu hình.
      - Sinh toàn bộ nội dung câu hỏi, lựa chọn đáp án và đáp án đúng bằng tiếng Đức.
      - Giữ nguyên cấu trúc bộ đề và chấm điểm theo thông số đã thiết lập trước.

 ![Giao diện Ví dụ minh họa](/img/png/demo_kiemtra.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Cấu hình đề kiểm tra.</em>
</p>

- Làm bài kiểm tra (đánh giá hoạt động).
- Xem lịch sử làm bài của Sinh viên.

 ![Giao diện Lịch sử làm bài](/img/gif/GV_lichsudiem.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Lịch sử làm bài.</em>
</p>

#### 1.1.3. Chức năng Bài giảng AI

- **Tạo và quản lý Bài giảng AI**: Hệ thống hỗ trợ người dùng tạo mới, chỉnh sửa và xóa các bài giảng được hỗ trợ bởi trí tuệ nhân tạo (AI). Các thông tin cấu hình bao gồm tiêu đề, nội dung bài giảng, .

- **Tùy chỉnh nội dung**: Người dùng có thể để AI tự động tạo bài giảng phù hợp, bao gồm văn bản, câu hỏi tương tác và ví dụ minh họa thông qua hình ảnh hoặc nhập nội dung chi tiết.

- **Hướng dẫn sử dụng**:

  **1.** Truy cập giao diện Bài giảng AI và nhấp vào nút **`Thêm bài giảng mới`** hoặc **`Tải ảnh lên`**.
      ![Giao diện Tạo mới Bài giảng AI](/img/png/GV_TaoBaigiangAI.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện Tạo mới Bài giảng AI.</em>
      </p>
  **2.** Tải lên **Hình ảnh** hoặc **file PowerPoint** (định dạng `JPEG, JPG, PNG, PPTX` tối đa 10 MB).

   ![Giao diện Upload file PowerPoint](/img/png/upload_pptx.png)

    <p style={{ textAlign: 'center' }}>
      <em>Giao diện Upload file PowerPoint.</em>
    </p>

  **3.** Chỉnh sửa **Tiêu đề** cho bài giảng trong trường tương ứng.

  **4.** Chỉnh sửa **Nội dung** bằng cách nhập trực tiếp hoặc sử dụng công cụ Markdown để định dạng.
      ![Giao diện chỉnh sửa Bài giảng AI](/img/png/GV_ChinhsuaTrogiang.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện Chỉnh sửa Bài giảng AI.</em>
      </p>
  **5.** Nhấp **Tạo mới** để lưu bài giảng hoặc **Xem trước** để kiểm tra trước khi hoàn tất.

### 1.2. Học liệu
Giảng viên/Giáo viên có thể xem các **`Học liệu`** có trong hệ thống và tìm kiếm thông tin **`Học liệu`** theo tên.

![Giao diện danh sách Học liệu](/img/png/GV_dshoclieu.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện danh sách Học liệu.</em>
</p>

Giảng viên/Giáo viên có thể tạo học liệu mới, bao gồm: tên học liệu và file học liệu (hỗ trợ file `pdf`, `word`, `powerpoint`).

![Giao diện danh sách Tạo học liệu mới](/img/png/GV_taohoclieu.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Tạo học liệu mới.</em>
</p>

Giảng viên/Giáo viên có thể xem chi tiết Học liệu và chọn vào tên file để tải xuống tài liệu.

![Giao diện chi tiết Học liệu](/img/png/GV_chitiethoclieu.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện chi tiết Học liệu.</em>
</p>

### 1.3. Phân tích

- Giao diện **Phân tích học phần** cung cấp các báo cáo trực quan giúp quản trị viên hoặc giảng viên đánh giá kết quả học tập và tiến độ của sinh viên đối với từng học phần.

![Giao diện Phân tích học phần](/img/png/hocphan_phantich.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Phân tích học phần.</em>
</p>

#### 1.3.1. Bộ lọc và tìm kiếm
- **Mã phân tích**: Cho phép chọn mã phân tích cụ thể.
- **Nhóm**: Lọc theo nhóm sinh viên.
- **Mã học phần**: Lọc theo học phần.
- **Lớp**: Lọc dữ liệu theo từng lớp học.
- **Trợ giảng**: Lọc dữ liệu theo trợ giảng AI được gán cho học phần.

#### 1.3.2. Biểu đồ phân bổ điểm
- Biểu đồ đường thể hiện **phân bố điểm của sinh viên** theo thang điểm 1–10.
- Trục ngang: Thang điểm.
- Trục dọc: Số lượng sinh viên đạt mức điểm tương ứng.
- Giúp đánh giá tổng quan mức độ phân hóa điểm số.

#### 1.3.3. Tiến độ học theo trợ giảng
- Biểu đồ thanh ngang thể hiện phần trăm hoàn thành các chương hoặc nội dung của học phần.
- Các mục bao gồm: Các trợ giảng có trong Học phần
- Màu đậm thể hiện tỷ lệ hoàn thành, màu xám thể hiện phần chưa hoàn thành.

#### 1.3.4. Tỷ lệ sinh viên làm bài
- Biểu đồ thanh thể hiện tỷ lệ **Đã làm** và **Chưa làm** bài tập/kiểm tra theo từng lớp.
- Màu xanh lá: Đã làm.
- Màu xám: Chưa làm.

#### 1.3.5. Điểm trung bình các lớp
- Biểu đồ cột thể hiện **điểm trung bình** của từng lớp trong học phần.
- Giúp so sánh kết quả học tập giữa các lớp.

## 2. Quản lý Lớp học
Giảng viên/Giáo viên có thể xem danh sách các **`Lớp học`** có trong hệ thống và tìm kiếm thông tin Lớp theo tên.

![Giao diện danh sách Lớp](/img/png/GV_dslop.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện danh sách Lớp.</em>
</p>

### a. Phân tích
Giảng viên/Giáo viên có thể xem báo cáo chi tiết về tiến độ và kết quả học tập của từng lớp và tìm kiếm thông tin sinh viên trong lớp học theo tên.

### b. Thành viên
Xem thông tin các sinh viên thuộc lớp học có trong hệ thống.

![Giao diện quản trị danh sách sinh viên trong lớp học](/img/png/GV_dsthanhvienlop.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách sinh viên trong lớp học.</em>
</p>

## 3. Phân tích

### Thống kê toàn bộ hội thoại của sinh viên theo từng trợ lý có trong lớp học
Tổng hợp dữ liệu từ tất cả các lớp học và trợ lý giảng viên/giáo viên phụ trách.

<!-- ![Giao diện thống kê Hội thoại của sinh viên](/img/png/thongkehoivao.png) -->

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thống kê Hội thoại của sinh viên.</em>
</p>

### Thống kê theo từng lớp học
Hiển thị thông tin chi tiết số lượng sinh viên của từng lớp, số lượng người đã tương tác của từng lớp.

<!-- ![Giao diện thống kê Lớp](/img/png/thongkelophoc.png) -->

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thống kê Lớp.</em>
</p>

### Thống kê theo từng học phần
Hiển thị thông tin số lượng người tương tác.

<!-- ![Giao diện thống kê Học phần](/img/png/thongkehocphan.png) -->

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thống kê Học phần.</em>
</p>


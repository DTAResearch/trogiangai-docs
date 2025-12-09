---
sidebar_position: 3
---
# Chức năng của Giảng viên

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

Tài khoản Giảng viên được thiết kế để hỗ trợ giảng viên trong việc quản lý lớp học và trợ lý tương ứng mà họ phụ trách. Các tính năng bao gồm:

- **Quản lý Học phần**
- **Quản lý Lớp học**
- **Phân tích**

**Lưu ý**

Tài khoản giảng viên gồm có 2 nhóm phân quyền là giảng viên chỉnh sửa và giảng viên giảng dạy. Trong đó:
- **Giảng viên chỉnh sửa**: có quyền chỉnh sửa các học phần mình được phân quyền chỉnh sửa, được phép thêm, sửa, xóa các học phần và trợ giảng thuộc học phần đó.
- **Giảng viên giảng dạy**: giảng viên giảng dạy được thiết lập giờ học tập cho các bài giảng và các học phần mình được phân quyền, gồm có thiết lập deadline cho toàn bộ học phần và cho từng trợ giảng, với hai điều kiện bắt buộc là: giảng viên phải được phân quyền để thiết lập và thứ hai là lớp học mà giảng viên muốn thiết lập deadline phải tham gia vào học phần đó.

:::


## 1. Giới thiệu phần chung

Giảng viên truy cập vào hệ thống sẽ thấy danh sách các **`Học phần`** được phân công. Tại đây có thể tìm kiếm chương trình đào tạo, lọc theo học kỳ.

![Giao diện danh sách Học phần](/img/GV_img/GV_dshocphan.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện danh sách Học phần.</em>
</p>

Giảng viên có thể xem danh sách các **`Trợ giảng`** có trong học phần và tìm kiếm thông tin **`Trợ giảng`** theo tên.

![Giao diện quản trị danh sách Trợ giảng](/img/GV_img/GV_dstrogiang.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện quản trị danh sách Trợ giảng.</em>
</p>

Khi truy cập vào chi tiết một Học phần và chọn một Trợ giảng cụ thể, giao diện sẽ hiển thị 3 thẻ (tab) chức năng chính phục vụ cho việc dạy và học:

![Thẻ trợ giảng sau khi tạo thành công](/img/GV_img/kiemtrathongtin.png)

<p style={{ textAlign: 'center' }}>
  <em>Thẻ trợ giảng với 3 tab chức năng: Trợ giảng AI, Bài đọc, Bài tập.</em>
</p>


1.  **Trợ giảng AI (Bài giảng):** Chứa slide bài giảng, nội dung tóm tắt và câu hỏi tương tác.
![Slide bài giảng AI](/img/GV_img/GV_slide.png)

<p style={{ textAlign: 'center' }}>
  <em>Slide bài giảng AI.</em>
</p>

![Câu hỏi cho từng slide](/img/GV_img/GV_cauhoislide.png)

<p style={{ textAlign: 'center' }}>
  <em>Câu hỏi cho từng slide.</em>
</p>

2.  **Bài đọc:** Tài liệu dạng văn bản để sinh viên đọc thêm.

3.  **Bài tập (Bài kiểm tra):** Các bộ đề để đánh giá kiến thức.

![Giao diện sau khi click chọn nút bài tập](/img/GV_img/GV_baitapmoi.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện sau khi click chọn nút bài tập (click chọn bắt đầu làm bài để kiểm tra bài tập vừa tạo).</em>
</p>

![Phần câu hỏi bài tập](/img/GV_img/GV_checkbaitap.png)

<p style={{ textAlign: 'center' }}>
  <em>Phần câu hỏi bài tập vừa tạo với số câu hỏi và ngôn ngữ đã được chọn từ trước.</em>
</p>


---

## 2. Giảng viên chỉnh sửa

Phân hệ này dành cho việc xây dựng nội dung, cấu hình trợ giảng và chuẩn bị học liệu trước khi lớp học bắt đầu.

### 2.1. Tạo Trợ giảng
Để tạo một trợ giảng mới, giảng viên thực hiện cấu hình các thông tin chi tiết như sau:

#### A. Thiết lập thông tin
Bao gồm các thông tin cơ bản và nâng cao:
- **Tên trợ giảng** *(bắt buộc)*: Tên phản ánh mục tiêu sử dụng hoặc môn học.
- **Mô hình gốc**: Chọn mô hình AI nền tảng (Ví dụ: Grok).
- **Quyền truy cập**: Giới hạn cho sinh viên thuộc CTĐT hoặc Công khai.
- **Mô tả & Ngữ cảnh hệ thống**: Cấu hình để AI hiểu vai trò của mình (Ví dụ: "Bạn là trợ giảng môn Cấu trúc dữ liệu...").

#### B. Quy trình tạo và nạp dữ liệu
**Bước 1: Nhập tên trợ giảng**

**Bước 2: Lựa chọn học liệu**
Giảng viên tải lên file tài liệu nguồn để AI học (hỗ trợ các định dạng: PDF, PPTX, DOCX...) hoặc chọn từ kho Học liệu có sẵn.

**Bước 3: Cấu hình bài kiểm tra (tự động)**
Tại bước này, giảng viên thiết lập để hệ thống tự sinh đề kiểm tra từ tài liệu:
- Số câu hỏi cho từng nhóm câu.
- Điểm số của mỗi câu hỏi.
- Ngôn ngữ sử dụng trong bài tập.
- Số đề muốn tạo.
> **Lưu ý:** Nếu chưa muốn tạo bài kiểm tra ngay, hãy bỏ dấu tick ở ô **“Tạo đề kiểm tra”**.

**Bước 4: Cấu hình phần sinh nội dung slide**
- Chọn tài liệu nguồn (từ học liệu đã chọn hoặc tải mới).
- Chọn ngôn ngữ để tạo slide.

**Bước 5: Hoàn tất**
Click nút **“Tạo mới”**. Hệ thống sẽ xử lý và tạo ra trợ giảng với đầy đủ slide và bài tập theo cấu hình.

![Giao diện tạo mới trợ giảng](/img/gif-new/taotrogiang.gif)

<p style={{ textAlign: 'center' }}>
  <em>Quy trình Tạo mới trợ giảng.</em>
</p>

### 2.2. Hướng dẫn tạo Bài đọc
Sau khi tạo trợ giảng xong, giảng viên vào tab **"Bài đọc"** để soạn thảo nội dung chuyên sâu.
- Hệ thống hỗ trợ định dạng **Markdown**: Giúp trình bày văn bản khoa học, chèn code, bảng biểu, liên kết,...
- Đây là nơi cung cấp kiến thức nền tảng bổ sung cho slide bài giảng.

![Giao diện thêm nội dung Bài đọc](/img/gif-new/suabaidoc.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Thêm nội dung Bài đọc.</em>
</p>
    **Giảng viên có thể sử dụng gemini và các đoạn prompt phù hợp để sinh các đoạn bài đọc** ([Gemini](https://gemini.google.com/)).
    #### Gợi ý Prompt mẫu để xây dựng Bài đọc hiệu quả

    Để giúp thầy cô tiết kiệm thời gian soạn thảo mà vẫn có nội dung chất lượng, dưới đây là một số mẫu Prompt (câu lệnh) gợi ý để yêu cầu AI viết bài đọc:

    **Mẫu 1: Mở rộng nội dung từ Slide bài giảng**  
    Dùng khi thầy cô muốn biến các gạch đầu dòng khô khan trên slide thành một bài văn hoàn chỉnh, dễ hiểu.

    Dựa trên các ý chính sau đây của bài học về [Tên chủ đề]:
    - [Ý chính 1 trên slide]
    - [Ý chính 2 trên slide]
    - [Ý chính 3 trên slide]

    Hãy viết một tài liệu đọc thêm chi tiết, giải thích rõ từng ý một. Sử dụng văn phong sư phạm, dễ hiểu. Hãy bổ sung thêm 1 ví dụ minh họa cụ thể cho mỗi ý để sinh viên dễ hình dung. Trình bày dưới dạng Markdown.

    ---

    **Mẫu 2: Giải thích chuyên sâu về một khái niệm khó**  
    Dùng khi trong bài có một khái niệm trừu tượng mà slide không thể diễn giải hết.

    Hãy đóng vai một giáo sư chuyên ngành [Tên chuyên ngành]. Hãy viết một bài đọc chuyên sâu giải thích về khái niệm [Tên khái niệm].  
    Bài viết cần đi từ định nghĩa cơ bản đến phân tích chuyên sâu, so sánh với các khái niệm tương đồng và nêu rõ ưu/nhược điểm.  
    Cuối bài hãy tóm tắt lại bằng một bảng so sánh để sinh viên dễ ôn tập.

    ---

    **Mẫu 3: Liên hệ thực tế và Case Study**  
    Dùng để tăng tính hấp dẫn, giúp sinh viên thấy được ứng dụng thực tế của bài học.

    Viết một bài đọc về ứng dụng của [Tên bài học/Công nghệ/Lý thuyết] trong thực tế hiện nay.  
    Hãy đưa ra 2–3 case study (tình huống nghiên cứu) cụ thể tại các doanh nghiệp hoặc dự án thực tế.  
    Phân tích xem họ đã áp dụng lý thuyết này như thế nào và kết quả đạt được ra sao.

    ---

    **Mẫu 4: Tổng hợp kiến thức và Câu hỏi tư duy**  
    Dùng cho bài đọc tổng kết chương.

    Hãy tổng hợp lại toàn bộ kiến thức quan trọng của chương [Tên chương].  
    Sau đó, hãy gợi ý 5 câu hỏi tư duy (không phải câu hỏi trắc nghiệm) để sinh viên tự suy ngẫm và trả lời nhằm hiểu sâu hơn về bài học.  
    Kèm theo gợi ý trả lời ngắn gọn cho từng câu hỏi.

    


### 2.3. Hướng dẫn chỉnh sửa Bài kiểm tra
Sau khi tạo xong, giảng viên vào tab **"Bài tập"** để kiểm tra và tinh chỉnh lại bộ đề.

#### A. Chỉnh sửa cấu hình
- Tạo, chỉnh sửa, xóa thông tin cấu hình: Tiêu đề, thời gian làm bài (phút), mô tả, hạn nộp.
- **Prompt tùy chỉnh nâng cao**: Giảng viên có thể viết lệnh chi tiết để AI sinh lại câu hỏi sát với nhu cầu hơn (Ví dụ: "Nội dung câu hỏi bằng tiếng Đức", "Tập trung vào kỹ năng phân tích").

![Giao diện Cấu hình nâng cao bài kiểm tra](/img/GV_img/GV_cauhinhkiemtranangcao.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Cấu hình nâng cao bài kiểm tra.</em>
</p>

#### B. Kiểm tra câu hỏi và đáp án
Giảng viên cần click vào chi tiết bộ đề để rà soát nội dung của 3 dạng câu hỏi:


**1. Câu hỏi Trắc nghiệm**
- **Nội dung**: Chỉnh sửa câu hỏi và nội dung các phương án lựa chọn (A, B, C, D).
- **Đáp án đúng**: Chọn đáp án đúng bằng cách click vào nút ký tự tương ứng (A, B, C, D) màu xanh lá.
- **Điểm số**: Thiết lập điểm số cụ thể cho câu hỏi.

![Giao diện chỉnh sửa câu hỏi trắc nghiệm](/img/GV_img/GV_tracnghiem.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện chỉnh sửa câu hỏi Trắc nghiệm.</em>
</p>

**2. Câu hỏi Điền từ**
- **Nội dung**: Chỉnh sửa câu dẫn nhập hoặc đoạn văn bản chứa chỗ trống.
- **Đáp án đúng**: Nhập từ khóa chính xác mà sinh viên cần điền. Hệ thống sẽ so khớp chính xác câu trả lời của sinh viên với từ khóa này để chấm điểm.

![Giao diện chỉnh sửa câu hỏi điền từ](/img/GV_img/GV_dientu.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện chỉnh sửa câu hỏi Điền từ.</em>
</p>

**3. Câu hỏi Tự luận**
Đây là dạng câu hỏi được AI hỗ trợ chấm điểm dựa trên ý nghĩa và tiêu chí.
- **Đáp án mẫu**: Cung cấp câu trả lời chuẩn hoặc các ý chính cần có để AI làm cơ sở tham chiếu.
- **Tiêu chí chấm điểm (Quan trọng)**: Giảng viên định nghĩa các tiêu chí chấm điểm, mỗi tiêu chí một dòng kèm theo trọng số phần trăm (%).
> **Cơ chế tính điểm:** Tổng điểm thực tế của sinh viên bằng tổng trọng số của các tiêu chí đạt được nhân với điểm số của câu hỏi.
> *Ví dụ:* Câu hỏi có điểm số là **0.6**. Sinh viên trả lời đạt được tiêu chí *"Clarity of explanation (40%)"*. Số điểm sinh viên nhận được cho tiêu chí này là: `40% x 0.6 = 0.24 điểm`.

![Giao diện chỉnh sửa câu hỏi tự luận](/img/GV_img/GV_tuluan.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện chỉnh sửa câu hỏi Tự luận và cấu hình Tiêu chí chấm điểm.</em>
</p>

**4. Duyệt câu hỏi (Hoàn tất)**
Sau khi kiểm tra hoặc chỉnh sửa xong, giảng viên cần thực hiện thao tác duyệt:
- Click vào **nút màu vàng (biểu tượng chiếc khiên)** ở góc trên bên phải mỗi câu hỏi để đánh dấu là **Đã kiểm duyệt**.
- Chỉ những câu hỏi đã qua kiểm duyệt mới được lưu chính thức vào ngân hàng đề.
- Sử dụng nút màu đỏ (thùng rác) nếu muốn xóa bỏ câu hỏi đó.
![Giao diện Chỉnh sửa đề](/img/Admin_img/Ad_chinhsuade.png)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện Kiểm tra và chỉnh sửa chi tiết câu hỏi.</em>
</p>

![Ví dụ câu hỏi đã được kiểm duyệt](/img/GV_img/GV_cauhoikiemduyet.png)

<p style={{ textAlign: 'center' }}>
  <em>Ví dụ câu hỏi đã được kiểm duyệt.</em>
</p>

#### C. Kiểm tra chấm điểm
Hệ thống cho phép giảng viên can thiệp thủ công để xem xét và điều chỉnh lại điểm số của sinh viên trong trường hợp phát hiện AI chấm chưa chính xác hoặc cần chấm lại theo yêu cầu.

**Quy trình thực hiện:**

1.  **Truy cập danh sách bài làm**:
    - Tại giao diện thẻ trợ giảng, click chọn tab **"Bài tập"**.
    - Tìm đến mục **Lịch sử làm bài** (hoặc danh sách nộp bài) để xem kết quả của sinh viên.

2.  **Chọn lượt làm bài cần sửa**:
    - Tìm sinh viên cần kiểm tra.
    - Tại dòng hiển thị lượt làm bài tương ứng, click chọn nút **Chỉnh sửa** (nút chức năng nằm ở vị trí ngoài cùng bên phải).

3.  **Thực hiện sửa điểm**:
    - Giao diện sẽ hiển thị chi tiết bài làm của sinh viên kèm theo đáp án và điểm số AI đã chấm.
    - Giảng viên tìm đến câu hỏi có sai sót, nhập lại điểm số chính xác vào ô điểm.
    - Xác nhận lưu lại để cập nhật điểm số mới cho sinh viên.

![Giao diện sửa điểm sinh viên](/img/gif-new/suadiemsvien.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện minh họa thao tác sửa điểm sinh viên.</em>
</p>

### 2.4. Hướng dẫn chỉnh sửa Bài giảng AI
Giảng viên vào tab **"Trợ giảng AI"** để rà soát lại nội dung slide và các câu hỏi tương tác đi kèm.

- **Kiểm tra nội dung Slide**: Chỉnh sửa text, tiêu đề, hoặc tải lại hình ảnh/file slide mới nếu nội dung AI sinh chưa chính xác.
- **Kiểm tra câu hỏi (Check Questions)**:
    - Click vào nút **"Danh sách câu hỏi"** trên thanh công cụ.
    - Tại đây, giảng viên kiểm tra danh sách câu hỏi trắc nghiệm ngắn đi kèm mỗi slide.
- **Cấu hình điều kiện qua bài**:
    - Giảng viên có thể **đặt số câu hỏi bắt buộc phải trả lời đúng** để sinh viên được phép chuyển sang slide tiếp theo. Điều này giúp đảm bảo sinh viên thực sự nắm được nội dung trước khi học phần mới.

  ![Giao diện trang chỉnh sửa slide bài giảng AI](/img/GV_img/GV_chinhsuaslide.png)
      <p style={{ textAlign: 'center' }}>
        <em>Giao diện trang chỉnh sửa slide bài giảng AI.</em>
      </p>
  - Giảng viên có thể kiểm tra danh sách câu hỏi của slide bài giảng bằng cách click vào nút “Danh sách câu hỏi”.
  ![Danh sách câu hỏi của slide bài giảng](/img/GV_img/GV_listcauhoislide.png)
      <p style={{ textAlign: 'center' }}>
        <em>Danh sách câu hỏi của slide bài giảng.</em>
      </p>

  - Trong phần chỉnh sửa giảng viên có thể thay đổi số câu hỏi sinh viên cần trả lời để qua slide ở phần **Số câu hỏi cần trả lời để qua bài giảng**.
  ![Số câu hỏi sinh viên cần trả lời](/img/GV_img/GV_thaydoisocauhoi.png)
      <p style={{ textAlign: 'center' }}>
        <em>Thay đổi số câu hỏi sinh viên cần trả lời.</em>
      </p>


---

## 3. Giảng viên giảng dạy

Phân hệ này dành cho việc vận hành lớp học, giao nhiệm vụ và quản lý tiến độ.

### 3.1. Thiết lập deadline cho Học phần
Thay vì thiết lập lẻ tẻ, giảng viên có thể áp dụng deadline đồng loạt cho tất cả các lớp thuộc học phần đó.
- Chọn học phần muốn thiết lập.
- Cài đặt thời gian bắt đầu và kết thúc.
- Áp dụng cho toàn bộ các lớp đang tham gia học phần này.

![Giao diện thiết lập deadline cho học phần](/img/gif-new/deadlinehp.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thiết lập deadline cho toàn bộ học phần.</em>
</p>

### 3.2. Thiết lập deadline cho Trợ giảng (Từng lớp)
Cho phép linh hoạt thời gian với từng đối tượng lớp học cụ thể:
- Chọn lớp học cụ thể.
- Thiết lập deadline cho từng trợ giảng (bài học) trong lớp đó.
- Có thể sử dụng tính năng **tự động lên lịch** để hệ thống tự chia thời gian cho các chương/bài tiếp theo mà không cần làm thủ công từng cái.

![Giao diện thiết lập deadline cho lớp học](/img/gif-new/deadlinetg.gif)

<p style={{ textAlign: 'center' }}>
  <em>Giao diện thiết lập deadline chi tiết cho từng lớp.</em>
</p>

## 4. Phân tích, Quản lý Lớp học và Học phần



Chức năng này cung cấp cho giảng viên cái nhìn toàn diện từ danh sách lớp học, báo cáo tổng quan về học phần cho đến chi tiết tiến độ học tập của từng sinh viên.



### 4.1. Quản lý Lớp học và Thành viên

Giảng viên có thể xem danh sách các **`Lớp học`** có trong hệ thống, tìm kiếm lớp theo tên và quản lý thành viên trong lớp.



![Giao diện danh sách Lớp](/img/GV_img/GV_lophoc.png)



<p style={{ textAlign: 'center' }}>

  <em>Giao diện danh sách Lớp học.</em>

</p>



- **Danh sách thành viên**: Xem thông tin chi tiết các sinh viên thuộc lớp học, bao gồm các thông tin định danh cần thiết.



![Giao diện quản trị danh sách sinh viên trong lớp học](/img/GV_img/GV_dsachlop.png)



<p style={{ textAlign: 'center' }}>

  <em>Giao diện quản trị danh sách sinh viên trong lớp học.</em>

</p>



### 4.2. Phân tích số liệu (Analytics)

Giao diện cung cấp các báo cáo trực quan dưới dạng biểu đồ, giúp giảng viên đánh giá hiệu quả giảng dạy và mức độ tiếp thu kiến thức của sinh viên theo Học phần hoặc theo từng Lớp.



![Giao diện Phân tích học phần](/img/GV_img/GV_phantichhocphan.png)



<p style={{ textAlign: 'center' }}>

  <em>Dashboard Phân tích học phần.</em>

</p>



#### A. Bộ lọc dữ liệu

Hệ thống hỗ trợ lọc dữ liệu đa chiều để xem báo cáo chính xác:

- **Mã phân tích**: Chọn mã phân tích cụ thể.

- **Phạm vi lọc**: Theo Nhóm sinh viên, Mã học phần, Lớp học cụ thể, hoặc theo từng Trợ giảng AI.



#### B. Các biểu đồ phân tích quan trọng

1.  **Phân bổ điểm số (Biểu đồ đường)**:

    - Thể hiện sự phân bố điểm của sinh viên trên thang điểm 1–10.

    - Giúp giảng viên nhận biết mức độ phân hóa trình độ trong lớp (lệch trái, lệch phải hay phân phối chuẩn).



2.  **Tiến độ học theo trợ giảng (Biểu đồ thanh ngang)**:

    - Thể hiện phần trăm hoàn thành nội dung của các trợ giảng trong học phần.

    - Màu đậm: Tỷ lệ hoàn thành; Màu xám: Phần chưa hoàn thành.



3.  **Tỷ lệ tham gia làm bài (Biểu đồ thanh)**:

    - So sánh tỷ lệ **Đã làm** (xanh lá) và **Chưa làm** (xám) bài tập/kiểm tra giữa các lớp.



4.  **Điểm trung bình (Biểu đồ cột)**:

    - So sánh điểm trung bình giữa các lớp trong cùng một học phần để đánh giá chênh lệch năng lực.



5.  **Phân tích chi tiết theo Lớp**:

    - Hiển thị số lượng sinh viên, số lượng người tương tác và điểm số trung bình chi tiết cho từng lớp học cụ thể.



![Giao diện Phân tích Lớp](/img/GV_img/GV_phantichlop.png)



<p style={{ textAlign: 'center' }}>

  <em>Giao diện Phân tích chi tiết theo Lớp.</em>

</p>



### 4.3. Giám sát chi tiết (Monitoring)

Khác với Phân tích (dạng biểu đồ tổng quan), giao diện **Giám sát** cung cấp dữ liệu chi tiết dạng danh sách (Table) về tiến độ, điểm số và trạng thái làm bài của từng sinh viên cụ thể.



![Giao diện Giám sát cho giảng viên](/img/GV_img/GV_giamsat.png)

![Giao diện Giám sát cho giảng viên](/img/GV_img/GV_giamsat2.png)



<p style={{ textAlign: 'center' }}>

  <em>Giao diện Giám sát tiến độ và điểm số.</em>

</p>



#### A. Công cụ lọc tìm kiếm

Giảng viên có thể tìm kiếm sinh viên hoặc nhóm sinh viên cụ thể thông qua: Tên, Email, Lớp, Trợ giảng, Học phần.



#### B. Giám sát kết quả bài tập

Hệ thống phân loại và hiển thị chi tiết:

1.  **Danh sách sinh viên đã làm bài**:

    - Hiển thị: Họ tên, Email, Lớp.

    - Kết quả: Điểm cao nhất, Tổng hợp điểm các lần làm.

    - Trạng thái: Đã hoàn thành hoặc Đang làm.

2.  **Danh sách sinh viên chưa làm bài**:

    - Giúp giảng viên nhanh chóng nhắc nhở các sinh viên chưa tham gia hoạt động.

3.  **Bảng tổng kết điểm môn học**:

    - Cung cấp cái nhìn toàn cảnh về điểm số của sinh viên qua tất cả các bài tập.

    - Cột **avg_score_overall**: Điểm trung bình tất cả các bài.

    - Các cột chi tiết: Điểm số của từng bài tập thành phần.



#### C. Giám sát quá trình Tự học

Tính năng này giúp giảng viên theo dõi nỗ lực tự học của sinh viên ngoài giờ lên lớp.

- Dữ liệu được tính toán dựa trên: Số slide đã xem, thời gian học thực tế so với deadline.

- Giảng viên có thể xem tiến độ này theo từng sinh viên hoặc trung bình của cả lớp.

    

![Giao diện Giám sát tự học](/img/GV_img/GV_giamsattuhoc.png)
<p style={{ textAlign: 'center' }}>

  <em>Giao diện Giám sát hoạt động tự học.</em>

</p>

  **Công thức tính điểm chuyên cần**

      Hệ thống tự động tính toán điểm chuyên cần của sinh viên dựa trên tiến độ xem slide và thời hạn (deadline) đã được thiết lập. Công thức áp dụng hệ số giảm điểm đối với các nội dung hoàn thành muộn.

      ![Công thức tính điểm chuyên cần](/img/GV_img/image.png)



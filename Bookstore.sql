create database Bookstore	
go

use Bookstore
go

create table Category
(
	categoryID int primary key,
	categoryName nvarchar(30)
);

create table Book
(
   id int primary key,
   img ntext,
   name ntext ,
   categoryID int,
   decription ntext,
   price money,
   sale float,
   quantity int,
   constraint FK_Book_Category foreign key(categoryID)
	references Category(categoryID)
);



insert into Category values (1,N'Sách thiếu nhi')
insert into Category values (2,N'Sách Khoa học')
insert into Category values (3,N'Tâm lý đời sống')

select * from Category
go

insert into Book values (1,'https://product.hstatic.net/1000219449/product/ok_bia_1_mat_ngot_cho_tam_hon_tre_tho_44ac504f6655461ba792ab9f184950cf_master.jpg',N'Mật ngọt cho tâm hồn trẻ thơ',1,N'Được minh họa bằng hình vẽ từ nhiều cuốn sách được trẻ em yêu thích, Mật ngọt cho tâm hồn trẻ thơ còn được mở rộng, bao gồm danh sách sách cập nhật không chỉ phù hợp với lứa tuổi của con bạn, mà còn liệt kê gần 1.000 cuốn sách được yêu thích trong nhiều năm, tác phẩm kinh điển, sách mới tuyệt vời, thậm chí cả sách nói, làm phong phú thêm cuộc sống của con bạn.',160000,0.2,30)
insert into Book values(2,'https://product.hstatic.net/1000219449/product/bia_1_mat_ngot_cho_tam_hon_thanh_thieu_nien_11a33d195dde47e0a77c7b4c8b1ae448_master.jpg',N'Mật ngọt cho tâm hồn thanh thiếu niên',1,N'Vốn tài sản quý nhất, quan trọng nhất đối với các em thanh thiếu niên chính là niềm tin của các em về giá trị của chính mình. \“Bạn đặc biệt bởi vì bạn là bạn; không phải ai khác mà là chính bạn.\” Và sự ra đời của cuốn sách Mật ngọt cho tâm hồn thanh thiếu niên sẽ giúp bạn tìm ra giá trị của mình.',185000,0.2,27)
insert into Book values(3,'https://product.hstatic.net/1000219449/product/bia_1_mat_ngot_cho_tam_hon_phu_nu_4c8c5daa63144af9ba30c27444246d59_master.jpg',N'Mật ngọt cho tâm hồn phụ nữ',1,N'Được minh họa bằng hình vẽ từ nhiều cuốn sách được trẻ em yêu thích, Mật ngọt cho tâm hồn trẻ thơ còn được mở rộng, bao gồm danh sách sách cập nhật không chỉ phù hợp với lứa tuổi của con bạn, mà còn liệt kê gần 1.000 cuốn sách được yêu thích trong nhiều năm, tác phẩm kinh điển, sách mới tuyệt vời, thậm chí cả sách nói, làm phong phú thêm cuộc sống của con bạn.',135000,0.2,17)
insert into Book values(4,'https://product.hstatic.net/1000219449/product/34586607_2129629913718637_2141710666493329408_n_master.jpg',N'Giáo dục giới tính - Không phải lỗi của con',3,N'Với sự việc hàng loạt vụ xâm hại tình dục trẻ em được phanh phui trên truyền thông, phụ huynh ngày nay thật sự hoang mang và lo lắng. Điều này đặt ra một thách thức đối với người lớn là làm như thế nào để cung cấp thông tin về giới tính để con em biết cách tự bảo vệ bản thân mà không phải \"vẽ đường cho hươu chạy\".',50000,0.2,23)
insert into Book values(5,'https://product.hstatic.net/1000219449/product/cha_me_lam_gi_de_tao_hung_thu_cho_con-01_100fd2ea1bde4910882d49fbfce768d1_master.jpg',N'Cha mẹ làm gì để tạo hứng thú cho con?',1,N'Cuốn sách \"Cha mẹ làm gì để tạo hứng thú cho con?\" giới thiệu với bạn đọc những câu cha mẹ nên nói để khích lệ con. Có thể nói đây là những câu nói vàng, giúp điều hòa mối quan hệ giữa cha mẹ và con cái trong thời hiện đại. Khi cha mẹ nói những lời động viên, khen ngợi và khẳng định khả năng của con cũng chính là lúc cha mẹ thắp ngọn lửa tự tin trong con, giúp con vững vàng và trưởng thành hơn trên mỗi bước đường tương lai sau này.',75000,0.2,10)
insert into Book values(6,'https://product.hstatic.net/1000219449/product/bia_1_tri_thuc_la_suc_manh_a683273d27cc454e8f4792dc0aad6a4b_master.jpg',N'Tri Thức Là Sức Mạnh',2,N'\"Tri thức là sức mạnh\"là câu nói nổi tiếng của lãnh tụ Lênin vĩ đại. Đó cũng là lời khẳng định mạnh mẽ, là chân lý đã được kiểm chứng qua thời gian. Chính việc không ngừng bồi đắp, tích lũy tri thức qua hàng triệu năm lịch sử mà con người đã trở thành lực lượng thống trị và thay đổi thế giới này, bởi \"ai có tri thức, người đó có sức mạnh\".',175000,0.2,27)
insert into Book values(7,'https://product.hstatic.net/1000219449/product/bia_1_day_con_doc_sach_efadb0150b954c9aa5012992a3c3f59d_master.jpg',N'Dạy Con Đọc Sách',1,N'Cuốn Dạy con đọc sách kết hợp những lời khuyên dễ hiểu, thực tế, cùng với niềm cảm hứng, sự dí dỏm, những bí quyết thú vị và danh sách đọc được chọn lọc kĩ lưỡng bởi hai biên tập viên chuyên mục đánh giá sách hàng đầu của tờ New York Times, Pamela Paul & Maria Russo. Cuốn sách sẽ chỉ cho bạn cách tạo sự thích thú và niềm vui quên thời gian cho con trẻ từ việc đọc sách.',160000,0.2,18)
insert into Book values(8,'https://product.hstatic.net/1000219449/product/bia_nhung_thoi_quen_tot_ban_gai_can_ren_luyen_truoc_tuoi_13_4acf7a8d7b1243aa85301473c2b4081c_master.jpg',N'Những Thói Quen Tốt Bạn Gái Cần Rèn Luyện Trước Tuổi 13',1,N'Tuổi 13 là giai đoạn quan trọng trong quá trình trưởng thành, bởi hầu hết thói quen của một con người về cơ bản đều được hình thành trong giai đoạn này. Vì vậy, những điều các bạn gái trải qua trong độ tuổi này đều có ảnh hưởng lớn đến con đường tương lai mai sau.',120000,0.2,15)
insert into Book values(9,'https://product.hstatic.net/1000219449/product/bia_1_cau_chuyen_cua_barbie_va_nguoi_phu_nu_sang_tao_nen_co_ay_30d5ba618c71447aa61bd54fd366cd99_master.jpg',N'Câu chuyện của Barbie và người phụ nữ sáng tạo nên cô ấy',1,N'Lật mở từng trang sách, cuốn Câu chuyện của Barbie và người phụ nữ sáng tạo nên cô ấy sẽ đưa người đọc đến gần hơn với triết lý của bà Ruth Handler về “đứa con cưng” của mình.',85000,0.2,7)
insert into Book values(10,'https://product.hstatic.net/1000219449/product/z4234385122404_513cf1398cbf1a5c89e781778ea0a729_c3c761c95eca49a1994bb67d01be7f57_master.jpg',N'Giỏ đồ vui nhộn - Bãi biển',1,N'Những cuốn sách có thiết kế túi độc đáo và dễ thương sẽ thu hút trẻ em đoán xem các nhân vật trong cuốn sách sẽ cần gì trong các tình huống khác nhau. Ngoài ra, trẻ sẽ vô cùng thích thú khi mở những trang minh họa đẹp mắt và chiêm ngưỡng những người bạn động vật dễ thương.',95000,0.2,18)

drop table Book

go
select * from Book

go
create table Account
(
      Username varchar(20) primary key,
      Password varchar(20),
	  role    int
)
go
insert into Account values('sa','123',1)
insert into Account values('admin','admin',1)
insert into Account values('123','123',2)
insert into Account values('manhvann','manhvann',2)

select * from Account


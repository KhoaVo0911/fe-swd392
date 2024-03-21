export const Users = [
    {
        userId: 'U123',
        role: 0, // 0: CUSTOMER, 1: STAFF, 2: ADMIN
        mail: 'nguyenvana@gmail.com',
        password: '123456789',
        name: 'Nguyễn Văn A',
        phone: '+1234567890',
        address: '123 Main St, Anytown, AT 12345',
        isActice: true,
        token: '123456'
    },
    {
        userId: 'U124',
        role: 1,
        mail: 'nguyenvanb@gmail.com',
        password: '123456789',
        name: 'Nguyễn Văn B',
        phone: '+1234567890',
        address: '123 Main St, Anytown, AT 12345',
        isActice: true,
        token: '345678'
    },
    {
        userId: 'U125',
        role: 2,
        mail: 'nguyenvanc@gmail.com',
        password: '123456789',
        name: 'Nguyễn Văn C',
        phone: '+1234567890',
        address: '123 Main St, Anytown, AT 12345',
        isActice: true,
        token: '567890'
    }
];

export const Customer = [
    {
        customerId: 'C123',
        userId: 'U123',
        customerName: 'Nguyễn Văn A',
        phone: '+1234567890',
        address: '123 Main St, Anytown, AT 12345',
        quotationRequest: [
            {
                requestId: 'REQ456',
                customerId: 'C123',
                status: 0, // 0: DRAFTING, 1: CREATED, 2: PENDING, 3: CLOSED
                packageList: [
                    {
                        packageId: 'P789',
                        packageName: 'Bộ phòng khách',
                        description: 'Bao gồm sàn nhà, tường và trần nhà',
                        packageArea: 20.0,
                        packagePrice: 2500.00, // 'VND'
                        image: 'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/5454326d4c31446c62457544634b6f70514336524b.jpg',
                        itemList: [
                            {
                              itemId: "I104",
                              itemName: "Sàn gạch",
                              itemArea: 15.0,
                              itemPrice: 2000.00,
                              materialId: "M237"
                            },
                            {
                              itemId: "I105",
                              itemName: "Trần thạch cao giật cấp",
                              itemArea: 20.0,
                              itemPrice: 2500.00,
                              materialId: "M239"
                            },
                            {
                              itemId: "I106",
                              itemName: "Gạch ốp tường",
                              itemArea: 15.0,
                              itemPrice: 2500.00,
                              materialId: "M241"
                            }
                        ]
                    },
                    {
                        packageId: 'P790',
                        packageName: 'Bộ phòng ngủ',
                        description: 'Bao gồm sàn nhà, tường và trần nhà',
                        packageArea: 20.0,
                        packagePrice: 2500.00, // 'VND'
                        image: 'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/5454326d4c31446c62457544634b6f70514336524b.jpg',
                        itemList: [
                            {
                              itemId: "I107",
                              itemName: "Sàn gạch",
                              itemArea: 15.0,
                              itemPrice: 2000.00,
                              materialId: "M237"
                            },
                            {
                              itemId: "I108",
                              itemName: "Trần thạch cao giật cấp",
                              itemArea: 20.0,
                              itemPrice: 2500.00,
                              materialId: "M239"
                            },
                            {
                              itemId: "I109",
                              itemName: "Gạch ốp tường",
                              itemArea: 15.0,
                              itemPrice: 2500.00,
                              materialId: "M241"
                            }
                        ]
                    },
                    {
                        packageId: 'P791',
                        packageName: 'Bộ phòng bếp',
                        description: 'Bao gồm sàn nhà, tường và trần nhà',
                        packageArea: 20.0,
                        packagePrice: 2500.00, // 'VND'
                        image: 'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/5454326d4c31446c62457544634b6f70514336524b.jpg',
                        itemList: [
                            {
                              itemId: "I110",
                              itemName: "Sàn gạch",
                              itemArea: 15.0,
                              itemPrice: 2000.00,
                              materialId: "M237"
                            },
                            {
                              itemId: "I111",
                              itemName: "Trần thạch cao giật cấp",
                              itemArea: 20.0,
                              itemPrice: 2500.00,
                              materialId: "M239"
                            },
                            {
                              itemId: "I112",
                              itemName: "Gạch ốp tường",
                              itemArea: 15.0,
                              itemPrice: 2500.00,
                              materialId: "M241"
                            }
                        ]
                    },
                    {
                        packageId: 'P792',
                        packageName: 'Bộ phòng tắm',
                        description: 'Bao gồm sàn nhà, tường và trần nhà',
                        packageArea: 20.0,
                        packagePrice: 2500.00, // 'VND'
                        image: 'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/5454326d4c31446c62457544634b6f70514336524b.jpg',
                        itemList: [
                            {
                              itemId: "I113",
                              itemName: "Sàn gạch",
                              itemArea: 15.0,
                              itemPrice: 2000.00,
                              materialId: "M237"
                            },
                            {
                              itemId: "I114",
                              itemName: "Trần thạch cao giật cấp",
                              itemArea: 20.0,
                              itemPrice: 2500.00,
                              materialId: "M239"
                            },
                            {
                              itemId: "I115",
                              itemName: "Gạch ốp tường",
                              itemArea: 15.0,
                              itemPrice: 2500.00,
                              materialId: "M241"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export const Staff = [
    {
        staffId: 'S123',
        userId: 'U123',
        staffName: 'Nguyễn Văn B',
        mail: 'nguyenvanb@gmail.com',
        phone: '+1234567890'
    }
];

export const Blogs = [
    {
        blogId: 'B567',
        requestId: 'REQ456',
        title: 'Thiết kế nội thất theo phong cách Nhật Bản - Mở ra không gian đầy tinh tế',
        subTitle: 'Tokyo | vinhomes grand park',
        description: 'Chỉ với 100 triệu, bạn hoàn toàn có thể thiết kế nội thất theo phong cách Nhật Bản, mang nét tinh tế vào không gian sống',
        price: 113000000,
        area: 50.0,
        style: 'Modern',
        content: `<p class='text-left' id='thiet-ke-noi-that-theo-phong-cach-nhat-ban---mo-ra-khong-gian-day-tinh-te' style='line-height: 26px; margin: 0rem 0rem 20px; font-weight: 600; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-style: normal; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Anh C. - khách hàng người nước ngoài đầu tiên của dghome, đã tìm hiểu khá rõ về các dịch vụ của dghome qua Zalo OA và tìm đến chúng mình với hi vọng: “tư vấn viên có thể nói tiếng Anh”, anh cười lớn. Do đã chủ động tham khảo các dự án của dghome và dịch vụ trọn gói của dghome nên mọi quy trình diễn ra rất thuận lợi và nhanh chóng bởi anh dành trọn niềm tin cho chúng mình.</span></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/5454326d4c31446c62457544634b6f70514336524b.jpg' alt='Thiết kế nội thất theo phong cách Nhật Bản ấm cúng và thanh lịch.' title='Thiết kế nội thất theo phong cách Nhật Bản ấm cúng và thanh lịch.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span style='line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 10pt; font-style: italic;'>Thiết kế nội thất theo phong cách Nhật Bản ấm cúng và thanh lịch.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Sau khi tư vấn thêm về các phong cách thiết kế và cùng anh đi tham quan nhà mẫu, anh C. đã chọn thiết kế nội thất theo phong cách Nhật Bản bởi sự tinh tế và đơn giản mang đến cho không gian.</span></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/71675f66524a6547384d6f4a504d766c494a4c6c2d.jpg' alt='Màu gỗ sáng kết hợp với màu trắng cho căn bếp tinh tế.' title='Màu gỗ sáng kết hợp với màu trắng cho căn bếp tinh tế.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span style='line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 10pt; font-style: italic;'>Màu gỗ sáng kết hợp với màu trắng cho căn bếp tinh tế.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Anh chia sẻ với chúng mình: “Công việc của anh bận rộn và căng thẳng nên muốn chọn phong cách nào đơn giản và khiến bản thân thư thái hơn”. Khi lần đầu nhận bản thiết kế nội thất chung cư phong cách Nhật Bản, anh C. đã nhanh chóng gật đầu đồng ý mà chẳng cần chỉnh sửa gì thêm. Và chỉ sau 14 ngày, dghome đã hoàn thiện dự án và bàn giao căn hộ cho anh C.</span></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/6d5f4745466165486a67336c3041424257426e5779.jpg' alt='Phòng ngủ tối giản nhưng vẫn ấm cúng' title='Phòng ngủ tối giản nhưng vẫn ấm cúng' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span style='line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 10pt; font-style: italic;'>Phòng ngủ tối giản nhưng vẫn ấm cúng</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Bằng cách sử dụng màu gỗ nhạt kết hợp với tông màu trắng, dghome đã giúp căn hộ trở nên rộng rãi, thoải mái và tận dụng được ánh sáng thiên nhiên. Chúng mình cũng sử dụng ván gỗ chống ẩm cao cấp cho toàn bộ nội thất để căn hộ được bền đẹp và đúng với đặc điểm khi thiết kế nội thất theo phong cách Nhật Bản.</span></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/315a57306c6d78336d4f6876366235704c34463544.jpg' alt='Nội thất đặt đóng riêng nên rất đồng bộ.' title='Nội thất đặt đóng riêng nên rất đồng bộ.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span style='line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 10pt; font-style: italic;'>Nội thất đặt đóng riêng nên rất đồng bộ.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Chúng mình cũng khéo léo sử dụng đảo bếp nhỏ kết hợp với tủ trang trí thiết kế nội thất chung cư phong cách Nhật Bản. Nhờ vậy mà không gian bếp và khu vực phòng khách được ngăn tách; cũng tạo điểm nhấn đẹp mắt cho không gian.</span></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/53316f67794b683467334e344a743764626a2d726f.jpg' alt='Tủ trang trí và đảo bếp là điểm nhấn cho phòng khách' title='Tủ trang trí và đảo bếp là điểm nhấn cho phòng khách' style='line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span style='line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 10pt; font-style: italic;'>Tủ trang trí và đảo bếp là điểm nhấn cho phòng khách</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Đối với không gian phòng ngủ, dghome thiết kế tủ quần áo và giường ngủ tối giản để phù hợp với căn hộ được thiết kế nội thất theo phong cách Nhật Bản. Khu vực phòng ngủ cũng được chúng mình đồng bộ bằng màu gỗ sáng. Để căn phòng không đơn điệu, chúng mình sử dụng họa tiết mây đan mắt cáo cho cửa tủ quần áo để tạo điểm nhấn.</span></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/4d44686f315a77614d50386148455f73445941594d.jpg' alt='Tủ quần áo nổi bật với họa tiết mắt cáo.' title='Tủ quần áo nổi bật với họa tiết mắt cáo.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span style='line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 10pt; font-style: italic;'>Tủ quần áo nổi bật với họa tiết mắt cáo.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: 10pt;'>Vào ngày nhận bàn giao, anh C. tâm sự: “Việc không thể giao tiếp bằng tiếng Việt khiến anh rất lo lắng sẽ không thể sở hữu căn hộ trong mơ. Nhưng khi gặp được dghome thì anh hoàn toàn tin tưởng vào dịch vụ của công ty, các bạn tư vấn cũng rất nhiệt tình giúp anh giải quyết vấn đề để căn hộ được hoàn thiện nhanh và đúng ý của anh nhất”</span></p>`,
        image: [
            'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/314a682d32616b366633516835573641545742596a.jpg',
            'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/777846397742557365317632526a4d786354446261.jpg',
            'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/75384358587569416a353733736c44514879557449.jpg',
            'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/534c565f43734951347761547052685a756248664f.jpg',
            'https://data.dghome3d.com/completed_apartments/caGo2iebrW/pictures/78516a49676b74777835333877515a6f3444394742.jpg'
        ],
        date: '2024-03-15T09:00:00'
    },
    {
        blogId: 'B568',
        title: 'Phong cách Modern Luxury - Ngắm nhìn tận mắt căn hộ đẳng cấp 5 sao',
        subTitle: 'Dubai | vinhomes grand park',
        description: 'Phong cách Modern Luxury được xem là sự lựa chọn hoàn hảo cho những gia chủ tìm kiếm sự sang trọng và đẳng cấp cho không gian sống',
        requestId: 'REQ456',
        price: 223000000,
        area: 50.0,
        style: 'Modern',
        content: `
        <p class='text-left' id='phong-cach-modern-luxury---ngam-nhin-tan-mat-can-ho-dang-cap--sao' style='line-height: 26px; margin: 0rem 0rem 20px; font-weight: 600; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-style: normal; text-indent: 0px; text-transform: none; white-space: normal;'>Chúng một lần nữa khẳng định được tầm quan trọng của đơn vị cung cấp dịch vụ trọn gói về thiết kế và kết nối chủ nhà với đơn vị thi công nội thất, khi anh chị chủ nhà không tiếc lời khen ngợi dành cho dghome sau khi hoàn thiện nội thất cho một trong những căn hộ Masteri Centre Point đầu tiên nhận bàn giao từ chủ đầu tư.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/446471514e4631784f76793777457a4b3132625747.png' alt='Không gian phòng khách và phòng ăn sang trọng với phong cách Modern Luxury' title='Không gian phòng khách và phòng ăn sang trọng với phong cách Modern Luxury' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Không gian phòng khách và phòng ăn sang trọng với phong cách Modern Luxury</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Chủ nhà được một đơn vị môi giới bất động sản tin tưởng giới thiệu dghome, nên đã dành thời gian đến cửa hàng trải nghiệm để được tư vấn cụ thể.</p><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Sau chuyến tham quan cửa hàng và được đội ngũ dghome hỗ trợ khảo sát căn hộ để đưa ra giải pháp bố trí nội thất tối ưu, anh T. nhanh chóng tiến hành ký hợp đồng hợp tác cùng chúng mình: “Anh thích sự đơn giản, tinh tế, nhưng vẫn có điểm nhấn sang trọng và đẳng cấp, nên nhờ dghome thiết kế sao mà vừa vào nhà liền cảm nhận được sự thanh lịch, sang trọng là được”</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/5632787834767768726157394e416b587750436f50.png' alt='Thiết kế nội thất Modern Luxury ấn tượng.' title='Thiết kế nội thất Modern Luxury ấn tượng.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Thiết kế nội thất Modern Luxury ấn tượng.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Nói qua một chút về dự án lần này, căn hộ nằm trong phân khu Masteri Centre Point - được cho là một trong những phân khu cao cấp nhất tại Vinhomes Grand Park. Để căn hộ toát lên vẻ đẹp đẳng cấp quốc tế phù hợp với phân khu thì dghome đã gợi ý mẫu thiết kế Dubai, phong cách Modern Luxury sang trọng và hiện đại. Mẫu thiết kế này sử dụng nhiều chất liệu cao cấp để mang đến vẻ đẹp xứng tầm với vẻ ngoài thượng lưu của phân khu này.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/6f3552343755415833654933642d71395a426a706e.png' alt='Không gian căn hộ thoáng đãng và tràn ngập ánh sáng' title='Không gian căn hộ thoáng đãng và tràn ngập ánh sáng' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Không gian căn hộ thoáng đãng và tràn ngập ánh sáng</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Anh chị khách hàng rất tin tưởng dghome và giao cho chúng mình toàn quyền quyết định: “Miễn sao bàn giao cho anh căn hộ y chang bản thiết kế là được” anh T. cười nói.</p><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Để thể hiện được sự sang trọng của phong cách Modern Luxury, dghome đã sử dụng nhiều họa tiết kim loại ánh kim để trang trí nhiều không gian trong căn hộ. Đối với khu vực phòng khách - nơi được gia chủ chú trọng nhất trong căn hộ; dghome đã sử dụng ốp vách tivi nhựa giả gỗ màu nâu be để tạo điểm nhấn ấn tượng.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/654f6442517a4b527a427873745a46774b5072516c.png' alt='Tường được ốp vách giả gỗ sang trọng.' title='Tường được ốp vách giả gỗ sang trọng.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Tường được ốp vách giả gỗ sang trọng.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Đa số các căn hộ tại phân khu Masteri Centre Point đã được chủ đầu tư đã trang bị bếp, vậy nên khi chọn phong cách thiết kế, anh chị chủ nhà cũng yêu cầu dghome tư vấn những màu sắc và vật liệu phù hợp với góc bếp hiện hữu.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/69575a545f6170713236396b6848566d4576587937.png' alt='Khu bếp được chủ đầu tư trang bị.' title='Khu bếp được chủ đầu tư trang bị.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Khu bếp được chủ đầu tư trang bị.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>dghome cũng tận dụng tối đa nguồn sáng tự nhiên bên ngoài nhờ thiết kế cửa sổ lớn khu vực phòng khách và phòng ngủ. Bằng hệ thống đèn led âm trần, đèn khe tường chúng mình đã biến căn hộ phong cách Modern Luxury trở nên thời thượng, ấn tượng nhưng không kém phần đẳng cấp.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/677331636d43436472316c5159375234324a34516c.png' alt='Đèn Led âm trần ấn tượng và hiện đại.' title='Đèn Led âm trần ấn tượng và hiện đại.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Đèn Led âm trần ấn tượng và hiện đại.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>dghome đã sử dụng ván gỗ chống ẩm cho toàn bộ nội thất đặt đóng trong 3 phòng ngủ. Với nội thất đặt đóng, dghome có thể tùy chỉnh kích thước và thiết kế sao cho phù hợp nhất với phong cách và sở thích của anh chị chủ nhà. Ngoài ra, ván gỗ chống ẩm còn có khả năng chống lại sự phát triển của nấm mốc, giúp bảo vệ không gian sống và sức khỏe của các thành viên trong gia đình.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/4850793771675037347744477078754d4c56593879.png' alt='Thiết kế nội thất Modern Luxury sang trọng cho phòng ngủ Master' title='Thiết kế nội thất Modern Luxury sang trọng cho phòng ngủ Master' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Thiết kế nội thất Modern Luxury sang trọng cho phòng ngủ Master</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Ngoài ra, anh chủ nhà còn yêu cầu dghome thiết kế tủ quần áo kịch trần và ốp kính bên ngoài để “chiều lòng” vợ. Phòng ngủ Master cũng được dghome chăm chút với vách trang trí đầu giường bọc vải nỉ kết hợp với các họa tiết trang trí ánh kim, giúp không gian nghỉ ngơi đầy sang trọng</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/5f764f6e332d7349336875714552504c565477696c.png' alt='Tủ quần áo kịch trần rộng rãi.' title='Tủ quần áo kịch trần rộng rãi.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Tủ quần áo kịch trần rộng rãi.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Không gian 2 phòng ngủ còn lại tuy không quá cầu kỳ nhưng dghome vẫn tạo điểm nhấn bằng những chiếc giường có thiết kế phù hợp với phong cách Modern Luxury và đồng bộ với sự sang trọng của căn hộ.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/494c4e43527a4f777579487563677947665a315954.png' alt='Phòng ngủ phụ có thiết kế đơn giản mà tinh tế' title='Phòng ngủ phụ có thiết kế đơn giản mà tinh tế' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Phòng ngủ phụ có thiết kế đơn giản mà tinh tế</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Dự án lần này được “chốt” vào những ngày cận Tết nên dghome đã rất cố gắng để có hoàn thiện và bàn giao căn hộ càng sớm càng tốt cho anh chị chủ nhà. Vì giai đoạn này anh chị đều bận rộn nên đã giao hết nhiệm vụ giám sát cho dghome. Ngày bàn giao nhà là lần đầu tiên gia chủ được nhìn thấy căn hộ và chúng mình cảm thấy rất hạnh phúc khi nhìn thấy nụ cười hài lòng của anh chị.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/456f47304b5630374167317059386f3474785a7778.png' alt='Phòng ngủ được thiết kế sang trọng với phong cách Modern Luxury' title='Phòng ngủ được thiết kế sang trọng với phong cách Modern Luxury' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Phòng ngủ được thiết kế sang trọng với phong cách Modern Luxury</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Anh chủ nhà chia sẻ “Từ lúc quyết định chọn dghome thì anh đã rất tin tưởng rồi, kết quả đúng là không làm anh thất vọng. Nhà như này thì có khác gì khách sạn hạng sang đâu, anh ưng ý lắm”</p><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Mỗi căn hộ thực tế là một thử thách với dghome, nhưng qua đó cũng là một lần chúng mình có dịp nỗ lực hết sức để mang đến những giá trị cao nhất cho khách hàng. Và hãy tiếp tục theo dõi chuyên mục Dự án thực tế của dghome để đón chờ thêm các dự án ấn tượng khác nhé!</p>
        `,
        image: [
            'https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/7671506b46316a5257704e5a4a4a6e495352754752.png',
            'https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/4d47366b303567704e4f324450546c70567944384e.png',
            'https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/5a68633534304f666443654a58536b70596a35655f.png',
            'https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/4241324330534d4d77466648334f5f75694e303030.png',
            'https://data.dghome3d.com/completed_apartments/caohYVtwdX/pictures/6b52712d4261707539775a38566f666135646e4c65.png'
        ],
        date: '2024-03-20T09:00:00'
    },
    {
        blogId: 'B569',
        title: 'Phong cách Japandi - Nhận nhà hết hồn… vì quá đẹp',
        subTitle: 'Copenhagen | vinhomes grand park',
        description: `Phong cách Japandi - Sự hòa quyện giữa hai phong cách tạo nên không gian sống thanh lịch, hiện đại nhưng vẫn đầy ấm áp.`,
        requestId: 'REQ456',
        price: 250000000,
        area: 50.0,
        style: 'Modern',
        content: `
        <p class='text-left' id='phong-cach-japandi---nhan-nha-het-hon…-vi-qua-dep' style='line-height: 26px; margin: 0rem 0rem 20px; font-weight: 600; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-style: normal; text-indent: 0px; text-transform: none; white-space: normal;'><span style='font-size: medium; font-weight: 400; background-color: unset;'>Không chỉ là nơi ở, căn hộ phong cách Japandi mà dghome vừa hoàn thiện đã trở thành tổ ấm lý tưởng cho cả gia đình. Chị khách hàng cảm thấy vô cùng ấn tượng với thiết kế độc đáo và sự kết hợp hài hòa giữa</span><span style='font-size: medium; font-weight: 400; background-color: unset;'>&nbsp;</span><a href='https://dghome3d.com/vinhomes/original/tokyo/2-phong-ngu-cong-1' style='font-size: medium; font-weight: 400; line-height: normal; color: rgba(216,43,43,var(--un-text-opacity)); text-decoration-line: underline;'>phong cách Japan</a><span style='font-size: medium; font-weight: 400; background-color: unset;'>&nbsp;</span><span style='font-size: medium; font-weight: 400; background-color: unset;'>và</span><span style='font-size: medium; font-weight: 400; background-color: unset;'>&nbsp;</span><a href='https://dghome3d.com/vinhomes/original/copenhagen/2-phong-ngu-cong-1' style='font-size: medium; font-weight: 400; line-height: normal; color: rgba(216,43,43,var(--un-text-opacity)); text-decoration-line: underline;'>Scandinavian</a><span style='font-size: medium; font-weight: 400; background-color: unset;'>: “Ý tưởng về căn hộ của chị được phác họa rõ nét hơn khi xem bản thiết kế từ dghome, chị rất hào hứng đợi đến ngày nhận bàn giao”</span><br></p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/57575f34766c385a48545238525f6c615037485047.png' alt='Sự kết hợp hài hòa giữa hai phong cách' title='Sự kết hợp hài hòa giữa hai phong cách' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Sự kết hợp hài hòa giữa hai phong cách</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Phong cách Japandi là sự kết hợp tinh tế giữa nét đẹp truyền thống Nhật Bản và sự đơn giản, ấm cúng của phong cách Scandinavian. Ngoài ra, phong cách Japandi cũng rất chú trọng vào việc tận dụng ánh sáng, nên đội ngũ thiết kế của dghome đã cố gắng khai thác tối đa nguồn sáng tự nhiên vào căn hộ.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/37552d4b694f7461726b307541524e376c37647a52.png' alt='Nét đẹp hiện đại nhưng đầy ấm cúng' title='Nét đẹp hiện đại nhưng đầy ấm cúng' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Nét đẹp hiện đại nhưng đầy ấm cúng</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Vừa là khu vực để đón tiếp khách, cũng là nơi mà cả gia đình cùng nhau tụ họp trò chuyện nên không gian phòng khách được gia chủ dành sự chăm chút đặc biệt. Dựa theo ý tưởng của chị, dghome đã thiết kế khu vực đón khách của gia đình thành phòng trà mang đậm nét truyền thống Nhật Bản. Với bố trí sáng tạo nhưng tận dụng tối đa không gian, chúng mình đã sử dụng vách gỗ cắt CNC để ngăn cách khu vực phòng trà và phòng ăn một cách thẩm mỹ.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/715738436c76346173306c49512d4c416d39496171.png' alt='Khu vực phòng trà cổ điển' title='Khu vực phòng trà cổ điển' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Khu vực phòng trà cổ điển</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Không chỉ vậy, khu vực bếp kết hợp với quầy bar-mini cũng mang đến nét đẹp hiện đại hơn cho căn hộ phong cách thiết kế Japandi. Góc bếp được thiết kế chữ L để tận dụng tối đa diện tích, giúp gia chủ có nhiều không gian hơn khi nấu nướng. Khu vực tủ bếp còn được lắp đặt thêm hệ thống đèn led phía trong, để đảm bảo ánh sáng cho người sử dụng.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/6f7475446265416768523346453172687778337350.png' alt='Góp bếp hiện đại và tiện nghi' title='Góp bếp hiện đại và tiện nghi' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Góp bếp hiện đại và tiện nghi</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Chị khách hàng lựa chọn giường Tatami cho phòng ngủ Master, chị cũng yêu cầu hệ tủ có chức năng biến thành ghế dựa để có thể ngồi ngắm nhìn khung cảnh thành phố.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/454772492d4b6c454d7757334d564b526935736e4e.png' alt='Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.' title='Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.</p><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Trong phòng ngủ Master phong cách Japandi, dghome đã sử dụng tông màu trắng kết hợp với màu gỗ tự nhiên để không gian được tươi sáng và hài hòa.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/6764624477637a51467356744841336a775a467a6e.png' alt='Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.' title='Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Giường ngủ Tatami kết hợp với hệ tủ ấn tượng.</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Đối với phòng ngủ phụ, chị khách hàng thiết kế thành phòng ngủ cho 2 con nên màu sắc cũng tươi tắn hơn hẳn. Chị chia sẻ: “Chị muốn căn phòng sinh động, bắt mắt nhưng mà phải tinh tế và khiến con chị thích”.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/5654766643617879387451394c644c773376596c52.png' alt='Phòng ngủ phụ tràn ngập sắc màu' title='Phòng ngủ phụ tràn ngập sắc màu' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Phòng ngủ phụ tràn ngập sắc màu</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Bằng cách sử dụng màu xanh mint, màu kem, màu trắng, cùng những họa tiết đẹp mắt; dghome đã giúp phòng ngủ với phong cách thiết kế Japandi trở nên tràn đầy sức sống. Chúng mình cũng thiết kế khu vực bàn học rộng rãi hơn để 2 bé có thể học cùng nhau.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/6e46556c44417964786c686d7a6f5f5647446b436a.jpg' alt='Bàn học “đôi” rộng rãi và đẹp mắt' title='Bàn học “đôi” rộng rãi và đẹp mắt' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Bàn học “đôi” rộng rãi và đẹp mắt</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Do nhà chị khách hàng ở xa, nên mọi giai đoạn hoàn thiện chúng mình đều chụp hình gửi cho chị và chị cũng rất mong chờ đến ngày nhận bàn giao. Khi chị lên căn hộ phong cách Japandi của mình lần đầu tiên, dghome đã nhìn thấy được sự hài lòng trên gương mặt chị.</p><div class='text-center ej-alignment' style='line-height: normal; text-align: justify; color: rgb(0, 0, 0); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'><img src='https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/443551693475716f63725a574a68306d67414b3538.png' alt='Quầy bar-mini “cực chill” tại nhà' title='Quầy bar-mini “cực chill” tại nhà' style=' line-height: normal; display: inline-block; max-width: 800px; width: 800px;' class='e-rte-image e-imginline'><span class='title-img' style=' line-height: normal; margin-bottom: 20px; margin-top: 10px; display: flex; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 0.9rem; font-style: italic;'>Quầy bar-mini “cực chill” tại nhà</span></div><p class='text-left' style='line-height: normal; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; text-align: justify; margin-top: 20px; margin-bottom: 20px; color: rgb(0, 0, 0); font-size: medium; font-style: normal; font-weight: 400; text-indent: 0px; text-transform: none; white-space: normal;'>Chị nói: “Đúng là căn hộ trong mơ mà vợ chồng chị luôn mong muốn. Không gian vừa ấm cúng vừa tinh tế như thế này thì bạn bè của chị sẽ trầm trồ lắm cho xem. Điều chị ưng ý nhất là chị còn chẳng phải lên căn hộ để xem lần nào mà thành quả vẫn rất ưng ý”</p>
        `,
        image: [
            'https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/46444d664b365865614c7a50786d77354d58464e63.webp',
            'https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/696371535270583033556c4c4952784a5274414e67.png',
            'https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/5973415a44617558314f6332716a3069744e30356a.png',
            'https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/6b3661574770624269584350446964565030787839.png',
            'https://data.dghome3d.com/completed_apartments/caVjWNabOa/pictures/7a664e34346472754c657256693746644234507959.png'
        ],
        date: '2024-03-15T09:00:00'
    }
];

export const TemplateRequest = {
    requestId: 'REQ456',
    totalPrice: 5000.00,
    totalArea: 50.0,
    style: 'Modern',
    packageList: [
        {
            packageId: 'P789',
            packageName: 'Bộ phòng khách',
            description: 'Bao gồm sàn nhà, tường và trần nhà',
            packageArea: 20.0,
            packagePrice: 2500.00, // 'VND'
            itemList: [
                {
                  itemId: "I104",
                  itemName: "Sàn gạch",
                  itemArea: 15.0,
                  itemPrice: 2000.00,
                  materialId: "M237"
                },
                {
                  itemId: "I105",
                  itemName: "Trần thạch cao giật cấp",
                  itemArea: 20.0,
                  itemPrice: 2500.00,
                  materialId: "M239"
                },
                {
                  itemId: "I106",
                  itemName: "Gạch ốp tường",
                  itemArea: 15.0,
                  itemPrice: 2500.00,
                  materialId: "M241"
                }
            ]
        },
        {
            packageId: 'P790',
            packageName: 'Bộ phòng ngủ',
            description: 'Bao gồm sàn nhà, tường và trần nhà',
            packageArea: 20.0,
            packagePrice: 2500.00, // 'VND'
            itemList: [
                {
                  itemId: "I107",
                  itemName: "Sàn gạch",
                  itemArea: 15.0,
                  itemPrice: 2000.00,
                  materialId: "M237"
                },
                {
                  itemId: "I108",
                  itemName: "Trần thạch cao giật cấp",
                  itemArea: 20.0,
                  itemPrice: 2500.00,
                  materialId: "M239"
                },
                {
                  itemId: "I109",
                  itemName: "Gạch ốp tường",
                  itemArea: 15.0,
                  itemPrice: 2500.00,
                  materialId: "M241"
                }
            ]
        },
        {
            packageId: 'P791',
            packageName: 'Bộ phòng bếp',
            description: 'Bao gồm sàn nhà, tường và trần nhà',
            packageArea: 20.0,
            packagePrice: 2500.00, // 'VND'
            itemList: [
                {
                  itemId: "I110",
                  itemName: "Sàn gạch",
                  itemArea: 15.0,
                  itemPrice: 2000.00,
                  materialId: "M237"
                },
                {
                  itemId: "I111",
                  itemName: "Trần thạch cao giật cấp",
                  itemArea: 20.0,
                  itemPrice: 2500.00,
                  materialId: "M239"
                },
                {
                  itemId: "I112",
                  itemName: "Gạch ốp tường",
                  itemArea: 15.0,
                  itemPrice: 2500.00,
                  materialId: "M241"
                }
            ]
        },
        {
            packageId: 'P792',
            packageName: 'Bộ phòng tắm',
            description: 'Bao gồm sàn nhà, tường và trần nhà',
            packageArea: 20.0,
            packagePrice: 2500.00, // 'VND'
            itemList: [
                {
                  itemId: "I113",
                  itemName: "Sàn gạch",
                  itemArea: 15.0,
                  itemPrice: 2000.00,
                  materialId: "M237"
                },
                {
                  itemId: "I114",
                  itemName: "Trần thạch cao giật cấp",
                  itemArea: 20.0,
                  itemPrice: 2500.00,
                  materialId: "M239"
                },
                {
                  itemId: "I115",
                  itemName: "Gạch ốp tường",
                  itemArea: 15.0,
                  itemPrice: 2500.00,
                  materialId: "M241"
                }
            ]
        }
    ]
}

export const Request = [
    {
        requestId: 'REQ456',
        packageList: [
            {
                packageId: 'P789',
                packageName: 'Bộ phòng khách',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I104",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I105",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I106",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            },
            {
                packageId: 'P790',
                packageName: 'Bộ phòng ngủ',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I107",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I108",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I109",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            },
            {
                packageId: 'P791',
                packageName: 'Bộ phòng bếp',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I110",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I111",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I112",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            },
            {
                packageId: 'P792',
                packageName: 'Bộ phòng tắm',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I113",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I114",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I115",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            }
        ],
        description: 'Bao gồm sàn nhà, tường và trần nhà',
        type: 0, // 0: TEMPLATE, 1: QUOTATION
        totalPrice: 5000.00,
        totalArea: 50.0,
        style: 'Modern'
    }
]

export const QuotationRequest = [
    {
        requestId: 'REQ456',
        customerId: 'C123',
        status: 0, // 0: DRAFTING, 1: CREATED, 2: PENDING, 3: CLOSED
        packageList: [
            {
                packageId: 'P789',
                packageName: 'Bộ phòng khách',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I104",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I105",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I106",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            },
            {
                packageId: 'P790',
                packageName: 'Bộ phòng ngủ',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I107",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I108",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I109",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            },
            {
                packageId: 'P791',
                packageName: 'Bộ phòng bếp',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I110",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I111",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I112",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            },
            {
                packageId: 'P792',
                packageName: 'Bộ phòng tắm',
                description: 'Bao gồm sàn nhà, tường và trần nhà',
                packageArea: 20.0,
                packagePrice: 2500.00, // 'VND'
                itemList: [
                    {
                      itemId: "I113",
                      itemName: "Sàn gạch",
                      itemArea: 15.0,
                      itemPrice: 2000.00,
                      materialId: "M237"
                    },
                    {
                      itemId: "I114",
                      itemName: "Trần thạch cao giật cấp",
                      itemArea: 20.0,
                      itemPrice: 2500.00,
                      materialId: "M239"
                    },
                    {
                      itemId: "I115",
                      itemName: "Gạch ốp tường",
                      itemArea: 15.0,
                      itemPrice: 2500.00,
                      materialId: "M241"
                    }
                ]
            }
        ],
        totalPrice: 5000.00,
        totalArea: 50.0,
        style: 'Modern',
        createDate: '2024-03-15T09:00:00',
        updateDate: '2024-03-15T09:00:00',
        finishDate: '2024-03-15T09:00:00',
        deleteDate: '2024-03-15T09:00:00'
    }
];

export const Styles = [
    {
        style_id: 'S1',
        style_name: 'Modern',
        description: 'A minimalist style with emphasis on space and lighting',
        deviation: 0.10
    },
    {
        style_id: 'S2',
        style_name: 'Classic',
        description: 'A traditional style with emphasis on symmetry and elegance',
        deviation: 0.15
    },
    {
        style_id: 'S3',
        style_name: 'Contemporary',
        description: 'A style that combines modern and classic elements',
        deviation: 0.12
    },
    {
        style_id: 'S4',
        style_name: 'Industrial',
        description: 'A style that emphasizes raw materials and open spaces',
        deviation: 0.08
    },
    {
        style_id: 'S5',
        style_name: 'Scandinavian',
        description: 'A style that emphasizes simplicity and functionality',
        deviation: 0.09
    }
];

export const Packages = [
    {
        packageId: 'P789',
        packageName: 'Living Room Set',
        description: 'Includes sofa, coffee table, and 2 lamps',
        itemList: [
            {
                itemId: 'I101',
                itemName: 'Sofa',
                itemArea: 10.0,
                itemPrice: 1500.00,
                materialId: 'M234'
            }
        ],
        packageArea: 20.0,
        packagePrice: 2500.00
    }
];

export const Items = [
    {
        itemId: 'I101',
        itemName: 'Sofa',
        itemArea: 10.0,
        itemPrice: 1500.00,
        materialId: 'M234'
    },
    {
        itemId: 'I102',
        itemName: 'Coffee Table',
        itemArea: 5.0,
        itemPrice: 500.00,
        materialId: 'M235'
    },
    {
        itemId: 'I103',
        itemName: 'Lamp',
        itemArea: 2.0,
        itemPrice: 200.00,
        materialId: 'M236'
    },
    {
        itemId: 'I104',
        itemName: 'Sàn gạch',
        itemArea: 15.0,
        itemPrice: 2000.00,
        materialId: 'M237'
    },
    {
        itemId: 'I105',
        itemName: 'Trần thạch cao giật cấp',
        itemArea: 20.0,
        itemPrice: 2500.00,
        materialId: 'M239'
    },
    {
        itemId: 'I106',
        itemName: 'Gạch ốp tường',
        itemArea: 15.0,
        itemPrice: 2500.00,
        materialId: 'M241'
    }
];

export const Materials = [
    {
        materialId: 'M237',
        materialName: 'Sàn gạch',
        materialPrice: 200000,
        manEffort: 5.0,
        deviation: 0.05
    },
    {
        materialId: 'M238',
        materialName: 'Sàn vinyl',
        materialPrice: 120000,
        manEffort: 5.0,
        deviation: 0.05
    },
    {
        materialId: 'M239',
        materialName: 'Trần thạch cao giật cấp',
        materialPrice: 250000,
        manEffort: 5.0,
        deviation: 0.05
    },
    {
        materialId: 'M240',
        materialName: 'Trần nhôm',
        materialPrice: 300000,
        manEffort: 5.0,
        deviation: 0.05
    },
    {
        materialId: 'M241',
        materialName: 'Giấy dán tường',
        materialPrice: 150000,
        manEffort: 5.0,
        deviation: 0.05
    },
    {
        materialId: 'M241',
        materialName: 'Gạch ốp tường',
        materialPrice: 250000,
        manEffort: 5.0,
        deviation: 0.05
    }
];

export const Chats = [
    {
        requestId: 'REQ456',
        userId: 'U123',
        content: 'Can we add an armchair to the set?',
        isCustomer: true,
        time: '2024-03-20T09:30:00'
    }
];

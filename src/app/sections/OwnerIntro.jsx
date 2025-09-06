export default function OwnerIntro() {
    return (
        <>
            {/* Google Fonts Import */}
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
                rel="stylesheet"
            />
            
            <section id="about" className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="/owner.png"
                                    alt="Chủ cửa hàng Cẩm Trinh Thành Phát"
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Content Option 1 – Storytelling & Warmth */}
<div className="order-1 lg:order-2 text-center lg:text-left">
  <h2 
    className="text-3xl sm:text-4xl lg:text-5xl font-medium text-amber-900 mb-6"
    style={{fontFamily: 'Lora, serif', fontStyle: 'italic'}}
  >
    Câu chuyện từ bếp nhà
  </h2>
  
  <div className="space-y-4 text-gray-700 leading-relaxed">
    <p 
      className="text-base sm:text-lg"
      style={{fontFamily: 'Lora, serif'}}
    >
      Hơn 20 năm gắn bó với nghề làm bánh, gia đình chúng tôi gìn giữ và trao truyền bí quyết 
      để tạo nên những chiếc bánh pía đậm đà hương vị Sóc Trăng.
    </p>
    
    <p 
      className="text-base sm:text-lg"
      style={{fontFamily: 'Lora, serif'}}
    >
      Từ việc chọn từng nguyên liệu tươi ngon đến từng lớp bánh được gói ghém bằng tình yêu và sự 
      tỉ mỉ, <strong>Cẩm Trinh Thành Phát</strong> luôn mong muốn mang đến cho bạn không chỉ là chiếc bánh, 
      mà còn là một phần ký ức và truyền thống quê hương.
    </p>
    
    <p 
      className="text-base sm:text-lg font-medium text-amber-800"
      style={{fontFamily: 'Lora, serif', fontStyle: 'italic'}}
    >
      "Bánh pía thủ công – Mỗi lớp bánh, một câu chuyện"
    </p>
  </div>
</div>
                    </div>
                </div>
            </section>
        </>
    )
}

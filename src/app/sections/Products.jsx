export default function Products() {
    const products = [
        {
            id: 1,
            name: "Bánh Pía nhỏ Đậu Xanh + Sầu Riêng",
            description: "Bánh pía truyền thống với nhân đậu xanh thơm ngon, béo ngậy",
            image: "/banhpia.jpg",
            price: "27.000đ / 1 bì 10 cái"
        },
        {
            id: 2,
            name: "Bánh Trung Thu",
            description: "Bánh pía nhân dừa tươi, hương vị đặc trưng miền Tây",
            image: "/banhtrungthu.jpg",
            price: "300.000đ / 1 hộp 4 cái"
        },
        {
            id: 3,
            name: "Kẹo Đậu Phộng + Mè Đen",
            description: "Bánh pía nhân trứng muối béo ngậy, vị mặn ngọt hài hòa",
            image: "/keotheoleo.jpg",
            price: "30.000đ / 1 gói 250gr"
        }
    ];

    return (
        <>
            {/* Google Fonts Import */}
            <link
                href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
                rel="stylesheet"
            />
            
            <section id="products" className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 
                            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-amber-900 mb-4"
                            style={{fontFamily: 'Lora, serif', fontStyle: 'italic'}}
                        >
                            Sản phẩm của chúng tôi
                        </h2>
                        <p 
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                            style={{fontFamily: 'Lora, serif'}}
                        >
                            Ba đặc sản được chế biến theo công thức gia truyền
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    {/* Large Image - Adjusted for Portrait */}
                                    <div className="relative h-80 sm:h-96 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        
                                        {/* Price Badge */}
                                        <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg" style={{fontFamily: 'Lora, serif'}}>
                                            {product.price}
                                        </div>
                                    </div>

                                    {/* Simple Product Info */}
                                    <div className="p-6 text-center">
                                        <h3 
                                            className="text-lg sm:text-xl font-medium text-amber-900"
                                            style={{fontFamily: 'Lora, serif'}}
                                        >
                                            {product.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <p 
                            className="text-lg text-amber-800 font-medium"
                            style={{fontFamily: 'Lora, serif', fontStyle: 'italic'}}
                        >
                            Liên hệ ngay "0966860170" để đặt hàng và thưởng thức hương vị truyền thống!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

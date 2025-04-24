import React, { useState, useMemo, useCallback, useEffect } from 'react';

const ProductCarousel = ({ onProductClick }) => {
  const [current, setCurrent] = useState(0);
  const carouselItems = useMemo(() => [
    { id: 1, name: "Smartphone", price: 14999, img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg" },
    { id: 2, name: "Laptop", price: 49999, img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Headphones", price: 1999, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Smartwatch", price: 3999, img: "https://m.media-amazon.com/images/I/61GRy-zyB-L.jpg" },
    { id: 5, name: "Wireless Earbuds", price: 2999, img: "https://m.media-amazon.com/images/I/51fkoZe-K6L.jpg" },
    { id: 6, name: "4K Smart TV", price: 34999, img: "https://images.samsung.com/is/image/samsung/p6pim/in/ua55du7000klxl/gallery/in-crystal-uhd-du7000-499468-ua55du7000klxl-540328916?$684_547_PNG$" },
  ], []);

  const nextSlide = useCallback(() => setCurrent((prev) => (prev + 1) % carouselItems.length), [carouselItems.length]);
  const prevSlide = useCallback(() => setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length), [carouselItems.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full my-8 overflow-hidden">
      <div className="flex" style={{ transform: `translateX(-${current * 100}%)` }}>
        {carouselItems.map(item => (
          <div
            key={item.id}
            className="carousel-item flex-shrink-0 w-full text-center cursor-pointer relative"
            onClick={() => onProductClick(item)}
          >
            <img src={item.img} alt={item.name} className="h-80 w-full object-cover rounded-lg" />
            <div className="carousel-overlay absolute bottom-0 w-full p-4 text-white">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-green-300 font-bold text-xl">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-3xl hover:text-gray-700">❮</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-3xl hover:text-gray-700">❯</button>
    </div>
  );
};

export default React.memo(ProductCarousel);
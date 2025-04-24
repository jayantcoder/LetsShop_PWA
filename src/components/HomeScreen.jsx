import React, { useMemo, useCallback } from 'react';
import ProductCarousel from './ProductCarousel';
import Product from './Product';
import Footer from './Footer';

const HomeScreen = ({ onProductClick, setPage }) => {
  const products = useMemo(() => [
    { id: 1, name: "Smartphone", price: 14999, img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg" },
    { id: 2, name: "Laptop", price: 49999, img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Headphones", price: 1999, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Smartwatch", price: 3999, img: "https://m.media-amazon.com/images/I/61GRy-zyB-L.jpg" },
    { id: 5, name: "Wireless Earbuds", price: 2999, img: "https://m.media-amazon.com/images/I/51fkoZe-K6L.jpg" },
    { id: 6, name: "4K Smart TV", price: 34999, img: "https://images.samsung.com/is/image/samsung/p6pim/in/ua55du7000klxl/gallery/in-crystal-uhd-du7000-499468-ua55du7000klxl-540328916?$684_547_PNG$" },
    { id: 7, name: "Gaming Console", price: 39999, img: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?cs=srgb&dl=pexels-pixabay-275033.jpg&fm=jpg" },
    { id: 8, name: "Bluetooth Speaker", price: 4999, img: "https://images.pexels.com/photos/4917455/pexels-photo-4917455.jpeg?cs=srgb&dl=pexels-curayagjovan-4917455.jpg&fm=jpg" },
    { id: 9, name: "Tablet", price: 24999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWP1BXZM2dxwnA5s-q0BOGYePQZbSSmmKBw&s" },
    { id: 10, name: "Camera", price: 29999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxPedWjxkXJc2auRUiKEWahf_7ONYV_JkFQ&s" },
    { id: 11, name: "Fitness Tracker", price: 3499, img: "https://cdn.pixabay.com/photo/2021/11/03/05/33/fitness-band-6764739_640.jpg" },
    { id: 12, name: "Portable Charger", price: 1999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdBp7qfbbWEAgRwsvOFb9RuuUrSkq2_55DA&s"},
    { id: 13, name: "Smart Speaker", price: 7999, img: "https://i.pcmag.com/imagery/roundups/017S1tRIBIkr8Mfan0lnX4J-59..v1657221180.jpg" },
    { id: 14, name: "Monitor", price: 15999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7OX9pCBcAFK1d1KV95-lcmfJNsNp8T5_WWA&s" },
    { id: 15, name: "Keyboard", price: 2499, img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 16, name: "Mouse", price: 1499, img: "https://cdn.pixabay.com/photo/2013/07/13/12/17/mouse-159568_640.png" },
    { id: 17, name: "Drone", price: 44999, img: "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?cs=srgb&dl=pexels-inmortal-producciones-108299-336232.jpg&fm=jpg" },
    { id: 18, name: "VR Headset", price: 29999, img: "https://cdn.thewirecutter.com/wp-content/media/2024/10/vrheadsets-2048px-08406.jpg?auto=webp&quality=75&width=1024" },
    { id: 19, name: "Action Camera", price: 12999, img: "https://www.shutterstock.com/image-photo/action-camera-protective-box-on-260nw-2335362469.jpg" },
    { id: 20, name: "E-Reader", price: 8999, img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Amazon_Kindle_3.JPG" },
  ], []);

  const renderProducts = useCallback(() => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  ), [products, onProductClick]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-16">
      <main className="flex-grow">
        <ProductCarousel onProductClick={onProductClick} />
        <h2 className="text-3xl font-bold text-center my-8 text-gray-800">Explore More Products</h2>
        {renderProducts()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

export default HomeScreen;
import React, { useMemo, useCallback } from 'react';
import Footer from './Footer';
import Product from './Product';

const ProductDetails = ({ product, onProductClick, setPage }) => {
  const otherProducts = useMemo(() => [
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
  ], []);

  const renderOtherProducts = useCallback(() => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {otherProducts.map(item => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          onClick={() => onProductClick(item)}
        />
      ))}
    </div>
  ), [otherProducts, onProductClick]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-16">
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex">
          <div className="w-1/3 pr-8">
            <img src={product.img || 'https://via.placeholder.com/384x384'} alt={product.name} className="h-96 w-full object-cover rounded-lg sticky-image" />
          </div>
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-green-600 font-bold text-2xl mb-4">₹{product.price}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Offers</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>10% off on credit card payment</li>
                <li>Free shipping on orders above ₹5000</li>
                <li>EMI starting at ₹500/month</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">About This Item</h3>
              <p className="text-gray-600">Experience top-tier performance with cutting-edge technology. Perfect for work, play, and everything in between.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">More About This Item</h3>
              <p className="text-gray-600">Built with premium materials, this product offers durability and style. Includes a 1-year warranty and 24/7 customer support.</p>
               
              <h3 className="text-xl font-semibold text-gray-700 mb-2">More About This Item</h3>
              <p className="text-gray-600">Built with premium materials, this product offers durability and style. Includes a 1-year warranty and 24/7 customer support.</p>
                
              <h3 className="text-xl font-semibold text-gray-700 mb-2">More About This Item</h3>
              <p className="text-gray-600">Built with premium materials, this product offers durability and style. Includes a 1-year warranty and 24/7 customer support.</p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">More About This Item</h3>
              <p className="text-gray-600">Built with premium materials, this product offers durability and style. Includes a 1-year warranty and 24/7 customer support.</p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">More About This Item</h3>
              <p className="text-gray-600">Built with premium materials, this product offers durability and style. Includes a 1-year warranty and 24/7 customer support.</p>
            
            
            
            </div>


          </div>
        </div>
        <hr className="my-8 border-gray-300 max-w-6xl mx-auto" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Products</h2>
          {renderOtherProducts()}
        </div>
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

export default ProductDetails;
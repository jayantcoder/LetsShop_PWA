import { useState, useMemo, Suspense, lazy, useCallback } from 'react';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import ProductDetails from './components/ProductDetails';
import Loader from './components/Loader';
import { AuthProvider } from './context/AuthContext';

const ContactUsPage = lazy(() => import('./components/ContactUsPage'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  const [page, setPage] = useState('home');

  const handleProductClick = useCallback((product) => setPage({ name: 'product', data: product }), []);
  const handlePageChange = useCallback((newPage) => setPage(newPage), []);

  const renderPage = useMemo(() => {
    if (typeof page === 'object' && page.name === 'product') {
      return <ProductDetails product={page.data} onProductClick={handleProductClick} setPage={handlePageChange} />;
    }
    switch (page) {
      case 'home':
        return <HomeScreen onProductClick={handleProductClick} setPage={handlePageChange} />;
      case 'contact':
        return (
          <Suspense fallback={<Loader />}>
            <ContactUsPage setPage={handlePageChange} />
          </Suspense>
        );
      case 'dashboard':
        return (
          <Suspense fallback={<Loader />}>
            <Dashboard setPage={handlePageChange} />
          </Suspense>
        );
      default:
        return <HomeScreen onProductClick={handleProductClick} setPage={handlePageChange} />;
    }
  }, [page, handleProductClick, handlePageChange]);

  return (
    <AuthProvider>
      <div>
        <Navbar setPage={handlePageChange} />
        {renderPage}
      </div>
    </AuthProvider>
  );
}

export default App;
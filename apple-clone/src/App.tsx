import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'; // 필요에 따라

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* 추가 컴포넌트들 삽입 */}
      <Footer />
    </div>
  );
};

export default App;

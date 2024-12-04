import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
      <h1>{isMobile ? '감사합니다.' : '안녕하세요'}</h1>
      <h1>{isMobile ? '박태흠입니다.' : '저는 박태흠입니다.'}</h1>
      <p>Frontend Developer</p>
    </header>
  );
}

export default Header;

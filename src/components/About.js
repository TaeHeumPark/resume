import React from 'react';
import { useMediaQuery } from 'react-responsive';

function About() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section
      style={{
        padding: '20px',
        maxWidth: isMobile ? '90%' : '63%',
        margin: '0 auto',
        textAlign: isMobile ? 'left' : 'center',
      }}
    >
      <p
        style={{
          fontSize: isMobile ? '1rem' : '1.25rem',
          lineHeight: '1.6',
        }}
      >
        300명 이상이 사용하는 서비스를 제작하며, 사용자 피드백을 신속히 반영해 수정과 재배포를 반복한 경험이
        있습니다. 사용자 친화적 서비스를 만드는 데에 큰 관심이 있으며, 타인의 코드를 이해하고 문제를 해결하는
        관찰력과 원활한 소통으로 더 나은 해결책을 찾아내는 관철력을 겸비하고 있습니다.
      </p>
    </section>
  );
}

export default About;

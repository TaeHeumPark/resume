import React from 'react';
import '../styles/Skills.css'

function Skills() {
  const skills = [
    { skill: 'Java', description: '객체 지향 프로그래밍과 기본 문법을 잘 이해하고 활용할 수 있습니다.' },
    { skill: 'Kotlin', description: 'Null Safety와 Coroutines를 활용한 비동기 작업 구현 경험이 있습니다.' },
    { skill: 'JavaScript', description: '프레임워크와 라이브러리를 활용한 웹 개발 경험이 있습니다.' },
    { skill: 'Dart', description: 'Null Safety와 제네릭을 활용한 안정적이고 재사용 가능한 코드 작성이 가능합니다.' },
    { skill: 'HTML, CSS', description: 'HTML5와 CSS3를 사용해 시맨틱한 마크업과 애니메이션을 구현할 수 있습니다.' },
    { skill: 'Flutter', description: 'Stateful/Stateless 위젯을 활용해 크로스플랫폼 UI를 설계할 수 있습니다.' },
    { skill: 'Vue', description: 'Vuex와 라우팅을 활용해 SPA 개발 경험이 있습니다.' },
    { skill: 'React', description: 'Hooks와 Recoil을 활용한 상태 관리와 컴포넌트 기반 개발 경험이 있습니다.' },
    { skill: 'TypeScript', description: '타입 안정성과 인터페이스를 활용한 코드 작성 경험이 있습니다.' },
    { skill: 'Database(MySQL)', description: 'SQL 쿼리 작성 및 데이터베이스 설계 경험이 있습니다.' },
    { skill: 'Spring, SpringBoot', description: 'RESTful API와 RDBMS 연동을 통해 웹 애플리케이션을 구현할 수 있습니다.' },
];


  return (
    <section>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', margin: '20px 0' }}>Skills</h2>
      <div className="skills-table">
        {skills.map((item, index) => (
          <div className="skills-row" key={index}>
            <div className="skills-skill">{item.skill}</div>
            <div className="skills-description">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
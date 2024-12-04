import React from 'react';
import '../styles/Projects.css'
import { useMediaQuery } from 'react-responsive';

function Projects() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const projects = [
    {
      name: '피카쇼',
      role: 'Lead Android Developer',
      startDate: '2023.10',
      endDate: '2023.12',
      purpose: '사용자의 일정 맞춤 이미지 생성 및  배경화면 자동 설정 앱 개발',
      problem: '이미지 생성 중 화면을 벗어나면 코루틴이 취소 됨.\n그에 따라 이미지 URL을 저장하지 못하는 문제가 발생.',
      solutions: 'Service를 사용해 백그라운드 스레드로 작업을 처리.',
      result: '코루틴 취소 문제를 해결해 사용자가 이미지 생성 시간을 기다리지 않아도 됨.',
      tasks: [
        'WorkManager를 활용해 배경화면 설정을 백그라운드 작업으로 스케줄링하고 관리',
        'Jetpack Compose 활용한 UI/UX 구현',
        'LiveData를 사용하여 일정 변경 사항 실시간 반영',
        'Retrofit2를 통한 Fast API 통신',
        'Kotlin Coroutines 활용한 비동기 처리',
        '로딩 스피너 화면 구현',
        '유저 피드백 반영한 구현 기능 수정'
      ],
      techStack: ['Kotlin', 'WorkManager', 'Service', 'Coroutines', 'Glide', 'Jetpack Compose', 'MVVM'],
    },
    {
      name: '오늘의 운세(운동세포)',
      role: 'Lead Android Developer',
      startDate: '2023.08',
      endDate: '2023.10',
      purpose: '사용자의 심박수 기반 맞춤 운동 추천 및 대결 기능 앱 개발',
      problem: '화면 전환시 복잡한 데이터 쿼리로 인해 서버와의 통신 속도 저하.\n그에 따른 느린 UI 렌더링으로 사용자의 불편함 초래.',
      solutions: '로그인시 필요한 데이터를 Room database에 저장.\nRoom에서 데이터를 조회 후 UI를 렌더링.',
      result: '화면 전환시 UI 렌더링 속도 향상 1,500ms -> 130ms',
      tasks: [
        'BLE(Bluetooth Low Energy)를 사용해 스마트워치와 모바일 기기 간 심박수 데이터 전송',
        'Room을 사용하여 오프라인 접근 가능 및 빠른 데이터 처리.',
        'Retrofit2를 통한 REST API 통신',
      ],
      techStack: ['Kotlin', 'Room', 'BLE', 'Data Binding', 'Glide', 'Coroutines', 'MVVM'],
    },
    {
      name: '우린 약하지 않아',
      role: 'Lead Frontend Developer',
      startDate: '2023.07',
      endDate: '2023.08',
      purpose: '온라인 화상 채팅 기반의 마약 자조 모임 웹 서비스 제공',
      problem: '사용자가 화상 채팅 종료(상담 종료) 후 소감문 작성 단계를 건너뛰고 브라우저 창을 닫는 경우, 소감문을 작성하지 않은 상태로 시스템이 종료되어 데이터 누락이 발생.',
      solutions: '로그인 시 상담 Database를 확인하여 소감문이 공백 상태면 작성 페이지로 리다이렉트되도록 구현.',
      result: '데이터 누락 문제 해결로 사용자 경험 개선',
      tasks: [
        '재사용 가능한 컴포넌트 설계 및 구현(34개).',
        'OpenVidu를 활용해 WebRTC 기반의 화상채팅 기능을 구현',
        '다양한 React Hooks 사용하여 컴포넌트 로직 구현',
        'Axios를 사용해 REST API 통신',
        'recoil을 사용해 React의 상태 관리'
      ],
      techStack: ['React', 'JavaScript', 'TypeScript', 'OpenVidu', 'React Hooks', 'Styled-components', 'Recoil'],
    },
  ];

  return (
    <section className={`projects-section ${isMobile ? 'mobile' : ''}`}>
      <h2 className="projects-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className={`project-container ${isMobile ? 'mobile' : ''}`}>
          {/* 제목 */}
          <div className="project-left">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-role">
              {project.role}
              <br />
              {project.startDate} ~ {project.endDate}
            </p>
          </div>

          {/* 내용 */}
          <div className="project-right">
            <p className="project-section-title">Purpose</p>
            <p className="project-content">{project.purpose}</p>

            <p className="project-section-title">Problem</p>
            <p className="project-content">
              {project.problem.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            <p className="project-section-title">Solutions</p>
            <p className="project-content">
              {project.solutions.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            <p className="project-section-title">Result</p>
            <p className="project-content">{project.result}</p>

            <p className="project-section-title">What did I do</p>
            <ul className="project-tasks">
              {project.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="project-task">
                  {task}
                </li>
              ))}
            </ul>

            <p className="project-section-title">Tech Stack</p>
            <p className="project-content">{project.techStack.join(', ')}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;

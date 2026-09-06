import {
  ArrowDown,
  ArrowUpRight,
  Download,
  CodeXml as Github,
  Mail,
} from 'lucide-react';

const timeline = [
  {
    number: '01',
    date: '2022.10 — 2022.12',
    title: 'Snow Brothers 모작',
    type: '개인 프로젝트',
    description:
      '점프와 공격, 오브젝트 충돌을 구현하고 2개 스테이지를 구성했습니다.',
    href: '#snow',
  },
  {
    number: '02',
    date: '2023.05 — 2023.06',
    title: '지역별 꽃가루 검색',
    type: '2인 팀 프로젝트',
    description:
      'Python으로 지역 검색, 즐겨찾기, 지도와 나무 이미지를 연결했습니다.',
    href: '#pollen',
  },
  {
    number: '03',
    date: '2024.01 — 2024.05',
    title: '은밀하게 위대하게',
    type: '3인 팀 · 졸업작품',
    description:
      'DirectX 12 슈팅 게임에서 플레이어 이동, 발사와 충돌 처리를 담당했습니다.',
    href: '#directx',
  },
  {
    number: '04',
    date: '2026.05 — 진행 중',
    title: 'Wanted',
    type: '3인 팀 · 자체 엔진',
    description:
      'DirectX 11 기반 자체 엔진에서 전투, 애니메이션과 도탄·관통 시스템을 구현하고 있습니다.',
    href: '#wanted',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 이동
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="wordmark"
            href="#home"
            aria-label="김태현 포트폴리오 처음으로"
          >
            <span className="wordmark-symbol">
              TH<span>.</span>
            </span>
            <span className="wordmark-caption">
              KIM TAEHYUN
              <br />
              PORTFOLIO
            </span>
          </a>
          <nav className="main-nav" aria-label="주요 메뉴">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="header-github"
            href="https://github.com/akdl6632"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              GAME CLIENT PROGRAMMER
            </p>
            <h1 id="hero-title">
              게임의 움직임을
              <br />
              <span className="blue">코드로 만듭니다.</span>
            </h1>
            <div className="hero-intro">
              <span className="intro-line" aria-hidden="true" />
              <p>
                <strong>안녕하세요, 김태현입니다.</strong>
                <br />
                C++과 DirectX를 중심으로 플레이어의 조작과 상호작용을
                구현합니다.
              </p>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                프로젝트 보기
                <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a
                className="button button-outline"
                href="/portfolio-wanted.pptx"
                target="_blank"
                rel="noreferrer"
              >
                포트폴리오 PPTX
                <Download size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <a
            className="hero-project"
            href="#wanted"
            aria-label="Wanted 프로젝트 자세히 보기"
          >
            <div className="hero-project-top">
              <span className="eyebrow">FEATURED PROJECT</span>
              <span className="live-pill">
                <span />
                개발 중
              </span>
            </div>
            <div className="hero-visual">
              <img
                src="/images/wanted-gameplay.webp"
                alt="Wanted 전술 전투 플레이 화면"
                width="1280"
                height="720"
                fetchPriority="high"
              />
              <span className="image-corner">DX11 / CUSTOM ENGINE</span>
            </div>
            <div className="hero-project-bottom">
              <div>
                <span className="small-label">TACTICAL FPS · TEAM 03</span>
                <h2>Wanted</h2>
              </div>
              <span className="round-arrow">
                <ArrowUpRight size={22} aria-hidden="true" />
              </span>
            </div>
          </a>
          <div className="hero-bottom">
            <span>한국공학대학교 · 게임공학과</span>
            <span className="mono">
              SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" />
            </span>
          </div>
        </section>

        <section
          id="about"
          className="section shell"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / ABOUT</p>
              <h2 id="about-title">경험과 기록</h2>
            </div>
            <p className="section-intro">
              학부 프로젝트에서 시작해,
              <br />
              게임 플레이를 구현해 온 과정을 정리했습니다.
            </p>
          </div>
          <div className="profile-grid">
            <div className="profile-cell">
              <p className="eyebrow">EDUCATION</p>
              <h3>한국공학대학교</h3>
              <p>게임공학과</p>
              <span className="profile-note">마지막 학기 재학 중</span>
            </div>
            <div className="profile-cell">
              <p className="eyebrow">TECH STACK</p>
              <div className="stack-list">
                {['C / C++', 'DirectX 11 / 12', 'Custom Engine', 'Python'].map(
                  (stack) => (
                    <span key={stack}>{stack}</span>
                  ),
                )}
              </div>
            </div>
            <div className="profile-cell">
              <p className="eyebrow">FOCUS</p>
              <h3>Game Client Development</h3>
              <p>Gameplay · Collision · Rendering</p>
              <span className="profile-note">
                플레이어 조작과 게임 내 상호작용
              </span>
            </div>
          </div>
          <div className="timeline-label">
            <span>START · 2022</span>
            <span className="timeline-rule" />
            <span>CHRONOLOGICAL FLOW</span>
            <span className="timeline-rule" />
            <span>NOW · 2026</span>
          </div>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <a className="timeline-card" href={item.href} key={item.number}>
                <div className="timeline-meta">
                  <span>{item.date}</span>
                  <span className="timeline-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <span className="timeline-type">{item.type}</span>
                <p>{item.description}</p>
                <span className="timeline-link">
                  프로젝트 보기
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
          <div className="next-chapter">
            <span className="eyebrow">NOW BUILDING</span>
            <p>
              <strong>Wanted</strong> 전투 감각·애니메이션·탄도 시스템 고도화
            </p>
            <span className="planned-pill">진행 중</span>
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section shell"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2 id="projects-title">
                직접 만든 것들<span className="count">04</span>
              </h2>
            </div>
            <p className="section-intro">
              프로젝트의 규모보다,
              <br />
              직접 구현한 범위가 보이도록.
            </p>
          </div>
          <article id="wanted" className="featured-project">
            <div className="featured-media">
              <div className="featured-gallery">
                <img
                  src="/images/wanted-gameplay.webp"
                  alt="Wanted의 3인칭 전투와 적 캐릭터 상호작용 화면"
                  width="1280"
                  height="720"
                  loading="lazy"
                />
                <img
                  src="/images/wanted-first-person.webp"
                  alt="Wanted의 1인칭 스코프 조준 화면"
                  width="1280"
                  height="720"
                  loading="lazy"
                />
              </div>
              <div className="media-caption">
                <span>01 / PLAYABLE SYSTEMS</span>
                <span>3인칭 전투 · 1인칭 조준</span>
              </div>
            </div>
            <div className="featured-copy">
              <div className="project-kicker">
                <span className="eyebrow">FEATURED PROJECT</span>
                <span className="live-pill">
                  <span />
                  개발 중
                </span>
              </div>
              <h3>Wanted</h3>
              <p className="project-subtitle">
                DirectX 11 자체 엔진 기반 전술 FPS
              </p>
              <div className="project-tags">
                <span>DirectX 11</span>
                <span>Custom Engine</span>
                <span>3인 팀</span>
              </div>
              <dl className="project-facts">
                <div>
                  <dt>기간</dt>
                  <dd>2026.05 — 진행 중</dd>
                </div>
                <div>
                  <dt>구현</dt>
                  <dd>
                    에디터와 렌더링 최적화
                    <br />
                    캐릭터 애니메이션·조준 시스템
                    <br />
                    도탄·관통 시뮬레이션
                  </dd>
                </div>
              </dl>
              <p className="scope-note">
                현재 구현한 플레이, 탄도, 에디터 시스템을 중심으로 정리했습니다.
              </p>
            </div>
          </article>
          <article id="directx" className="featured-project legacy-project">
            <div className="featured-media">
              <video
                controls
                preload="none"
                playsInline
                poster="/images/directx-poster.webp"
                width="1280"
                height="720"
                aria-label="은밀하게 위대하게 이동 및 사격 시연 영상"
              >
                <source src="/videos/directx-demo.mp4" type="video/mp4" />
                동영상 재생을 지원하지 않는 브라우저입니다.{' '}
                <a href="/videos/directx-demo.mp4">시연 영상 다운로드</a>
              </video>
              <div className="media-caption">
                <span>02 / PLAYABLE SYSTEMS</span>
                <span>플레이어 이동 · 사격 시연</span>
              </div>
            </div>
            <div className="featured-copy">
              <div className="project-kicker">
                <span className="eyebrow">GRADUATION PROJECT</span>
                <span className="quiet-pill">졸업작품</span>
              </div>
              <h3>은밀하게 위대하게</h3>
              <p className="project-subtitle">DirectX 12 기반 3D 슈팅 게임</p>
              <div className="project-tags">
                <span>DirectX 12</span>
                <span>졸업작품</span>
                <span>3인 팀</span>
              </div>
              <dl className="project-facts">
                <div>
                  <dt>기간</dt>
                  <dd>2024.01 — 2024.05</dd>
                </div>
                <div>
                  <dt>담당</dt>
                  <dd>
                    플레이어 이동과 총알 발사
                    <br />
                    플레이어·투사체와 오브젝트 충돌 처리
                  </dd>
                </div>
              </dl>
              <p className="scope-note">
                졸업작품에서 직접 구현한 핵심 플레이 기능을 소개합니다.
              </p>
            </div>
          </article>
          <div className="secondary-projects">
            <article id="snow" className="project-card">
              <div className="project-image snow-image">
                <img
                  src="/images/snow-brothers.webp"
                  alt="Snow Brothers 모작의 캐릭터와 스테이지 화면"
                  width="828"
                  height="720"
                  loading="lazy"
                />
              </div>
              <div className="project-card-body">
                <div className="project-kicker">
                  <span className="eyebrow">03 / GAME PROJECT</span>
                  <span className="quiet-pill">학부 개인 프로젝트</span>
                </div>
                <h3>Snow Brothers 모작</h3>
                <p className="card-date">2022.10 — 2022.12 · 1인 개발</p>
                <p className="project-description">
                  캐릭터의 움직임부터 공격과 충돌까지,
                  <br className="desktop-break" />
                  기본 플레이 흐름을 직접 구현한 모작입니다.
                </p>
                <ul className="feature-list">
                  <li>점프와 공격 기능</li>
                  <li>오브젝트 충돌 처리</li>
                  <li>2개 스테이지 구성</li>
                </ul>
                <p className="asset-credit">
                  학습 목적의 모작입니다. 원작 및 에셋의 권리는 각 권리자에게
                  있습니다.
                </p>
              </div>
            </article>
            <article id="pollen" className="project-card">
              <div className="project-image pollen-image">
                <img
                  src="/images/pollen-search.webp"
                  alt="지역 검색, 즐겨찾기, 지도 및 나무 이미지를 보여주는 꽃가루 검색 프로그램"
                  width="441"
                  height="612"
                  loading="lazy"
                />
                <div className="pollen-caption" aria-hidden="true">
                  <span>PYTHON</span>
                  <strong>
                    지역 정보와
                    <br />
                    데이터를 연결하다.
                  </strong>
                </div>
              </div>
              <div className="project-card-body">
                <div className="project-kicker">
                  <span className="eyebrow">04 / OTHER PROJECT</span>
                  <span className="quiet-pill">학부 팀 프로젝트</span>
                </div>
                <h3>지역별 꽃가루 검색</h3>
                <p className="card-date">2023.05 — 2023.06 · 2인 팀</p>
                <p className="project-description">
                  지역을 검색하고 관심 지역을 저장하며,
                  <br className="desktop-break" />
                  지도와 나무 정보를 확인하는 Python 프로그램입니다.
                </p>
                <ul className="feature-list">
                  <li>지역 검색과 즐겨찾기</li>
                  <li>지도 및 나무 이미지 표시</li>
                  <li>Python 기반 데스크톱 UI</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="project-footer">
            <p>
              자세한 프로젝트 소개는 최신 포트폴리오에서 확인할 수 있습니다.
            </p>
            <a
              className="text-link"
              href="/portfolio-wanted.pptx"
              target="_blank"
              rel="noreferrer"
            >
              포트폴리오 PPTX 열기
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-inner">
            <div>
              <p className="eyebrow">03 / CONTACT</p>
              <h2 id="contact-title">
                다음 경험을
                <br />
                함께 만들고 싶습니다<span>.</span>
              </h2>
              <p>게임 클라이언트 개발 기회를 찾고 있습니다.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:akdl6632@naver.com">
                <span>
                  <Mail size={20} aria-hidden="true" />
                  Email
                </span>
                <strong>akdl6632@naver.com</strong>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/akdl6632"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Github size={20} aria-hidden="true" />
                  GitHub
                </span>
                <strong>github.com/akdl6632</strong>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <p>© 2026 KIM TAEHYUN</p>
        <a href="#home">
          BACK TO TOP <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

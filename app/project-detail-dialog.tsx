'use client';

import { ArrowUpRight, CodeXml as Github, X } from 'lucide-react';
import { useId, useRef } from 'react';

type ProjectKey = 'wanted' | 'directx' | 'snow' | 'pollen';

type ProjectDetail = {
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  summary: string;
  period: string;
  team: string;
  role: string;
  scale: string;
  stack: string[];
  capabilities: string[];
  implementation: string[];
  github: string;
  githubLabel: string;
};

const projects: Record<ProjectKey, ProjectDetail> = {
  wanted: {
    category: 'GRADUATION PROJECT · 2026',
    title: 'Wanted',
    image: '/images/wanted-engine-editor.png',
    imageAlt: 'Wanted 자체 엔진의 맵 편집 카메라와 실시간 성능 지표',
    summary:
      'DirectX 11 기반 자체 엔진으로 제작한 전술 FPS 졸업작품입니다. 플레이 감각을 만드는 캐릭터 제어와 애니메이션부터 에디터, 렌더링 최적화, 도탄·관통 시뮬레이션까지 구현했습니다.',
    period: '2026.05 — 2026.08',
    team: '2인 팀',
    role: '게임 클라이언트 · 엔진/에디터',
    scale: '자체 엔진 기반 전술 FPS',
    stack: ['C++', 'DirectX 11', 'HLSL', 'ImGui'],
    capabilities: [
      '렌더링 최적화',
      '애니메이션',
      'Aim IK',
      '도탄·관통',
      '에디터',
    ],
    implementation: [
      '에디터와 플레이 모드의 상태 전환 및 씬 데이터 관리',
      '캐릭터 이동·회전·조준 애니메이션과 Aim IK',
      '표면 각도와 재질에 따른 도탄·관통 및 탄흔 표현',
      '인스턴싱과 리소스 캐시를 활용한 렌더링 최적화',
    ],
    github: 'https://github.com/maybe0122/2026_Wanted',
    githubLabel: 'Wanted 저장소',
  },
  directx: {
    category: 'TEAM PROJECT · 2024',
    title: '은밀하게 위대하게',
    image: '/images/directx-poster.webp',
    imageAlt: '은밀하게 위대하게 플레이어 이동과 사격 시연 화면',
    summary:
      'DirectX 12로 제작한 3D 슈팅 팀 프로젝트입니다. 플레이어 이동과 총알 발사, 플레이어·투사체와 월드 오브젝트 사이의 충돌 처리를 담당했습니다.',
    period: '2024.01 — 2024.05',
    team: '3인 팀',
    role: '플레이어 시스템 · 충돌',
    scale: 'DirectX 12 기반 3D 슈팅',
    stack: ['C++', 'DirectX 12', 'HLSL'],
    capabilities: ['캐릭터 이동', '사격', '투사체', '충돌 처리'],
    implementation: [
      '입력에 따른 플레이어 이동과 카메라 제어',
      '총알 생성·발사와 투사체 수명 주기',
      '플레이어와 월드 오브젝트 충돌 처리',
      '투사체와 오브젝트의 피격 판정',
    ],
    github: 'https://github.com/akdl6632',
    githubLabel: 'GitHub 프로필',
  },
  snow: {
    category: 'GAME PROJECT · 2022',
    title: 'Snow Brothers 모작',
    image: '/images/snow-brothers.webp',
    imageAlt: 'Snow Brothers 모작의 캐릭터와 스테이지 화면',
    summary:
      '2D 게임 프로그래밍 수업에서 진행한 개인 모작입니다. 캐릭터 조작과 공격, 오브젝트 충돌을 직접 구현하고 두 개의 플레이 가능한 스테이지를 구성했습니다.',
    period: '2022.10 — 2022.12',
    team: '1인 개발',
    role: '게임 플레이 전반',
    scale: '2개 스테이지',
    stack: ['C++', '2D Game Programming'],
    capabilities: ['점프', '공격', '충돌 처리', '스테이지 구성'],
    implementation: [
      '캐릭터 이동과 점프 조작',
      '공격과 적 피격 흐름',
      '오브젝트 간 충돌 판정',
      '두 개 스테이지의 진행 구조',
    ],
    github: 'https://github.com/akdl6632/2DGP',
    githubLabel: '2DGP 저장소',
  },
  pollen: {
    category: 'TEAM PROJECT · 2023',
    title: '지역별 꽃가루 검색',
    image: '/images/pollen-search.webp',
    imageAlt:
      '지역 검색, 즐겨찾기, 지도 및 나무 이미지를 보여주는 꽃가루 검색 프로그램',
    summary:
      '지역과 수종 정보를 연결해 꽃가루 정보를 확인하는 Python 데스크톱 프로그램입니다. 지역 검색, 관심 지역 저장, 지도와 나무 이미지 표시 기능을 구현했습니다.',
    period: '2023.05 — 2023.06',
    team: '2인 팀',
    role: '검색 · 즐겨찾기 · UI',
    scale: '데스크톱 애플리케이션',
    stack: ['Python', 'Desktop UI', 'Map Data'],
    capabilities: ['지역 검색', '즐겨찾기', '지도 표시', '이미지 연동'],
    implementation: [
      '지역 키워드 검색과 결과 표시',
      '관심 지역 저장과 재조회',
      '검색 결과에 맞는 지도 정보 연결',
      '수종별 나무 이미지 표시',
    ],
    github: 'https://github.com/akdl6632',
    githubLabel: 'GitHub 프로필',
  },
};

export function ProjectDetailDialog({
  project,
  compact = false,
}: {
  project: ProjectKey;
  compact?: boolean;
}) {
  const detail = projects[project];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <button
        className={
          compact ? 'detail-trigger detail-trigger-compact' : 'detail-trigger'
        }
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
      >
        자세히 보기
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        className="project-detail-dialog"
        aria-labelledby={titleId}
      >
        <article className="project-detail-panel">
          <header className="project-detail-header">
            <div>
              <p className="eyebrow">{detail.category}</p>
              <h2 id={titleId}>{detail.title}</h2>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="상세 보기 닫기"
            >
              <X size={25} aria-hidden="true" />
            </button>
          </header>

          <div className="project-detail-content">
            <img
              className="project-detail-hero"
              src={detail.image}
              alt={detail.imageAlt}
              width="1920"
              height="1080"
            />

            <div className="project-detail-summary">
              <p>{detail.summary}</p>
              <dl>
                <div>
                  <dt>ROLE</dt>
                  <dd>{detail.role}</dd>
                </div>
                <div>
                  <dt>TEAM</dt>
                  <dd>{detail.team}</dd>
                </div>
              </dl>
            </div>

            <dl className="project-detail-stats">
              <div>
                <dt>PERIOD</dt>
                <dd>{detail.period}</dd>
              </div>
              <div>
                <dt>TEAM</dt>
                <dd>{detail.team}</dd>
              </div>
              <div>
                <dt>SCALE</dt>
                <dd>{detail.scale}</dd>
              </div>
              <div>
                <dt>STACK</dt>
                <dd>{detail.stack.join(' · ')}</dd>
              </div>
            </dl>

            <section
              className="project-detail-section"
              aria-labelledby={`${titleId}-capabilities`}
            >
              <h3 id={`${titleId}-capabilities`}>CAPABILITIES</h3>
              <div className="project-detail-chips">
                {detail.capabilities.map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>
            </section>

            <section
              className="project-detail-section"
              aria-labelledby={`${titleId}-implementation`}
            >
              <h3 id={`${titleId}-implementation`}>IMPLEMENTATION</h3>
              <ul>
                {detail.implementation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <a
              className="project-detail-github"
              href={detail.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              {detail.githubLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </article>
      </dialog>
    </>
  );
}

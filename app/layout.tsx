import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://akdl6632.github.io'),
  title: '김태현 | 게임 클라이언트 프로그래머',
  description: '김태현의 게임 클라이언트 개발 포트폴리오. DirectX 12 슈팅 게임과 학부 프로젝트, 직접 구현한 게임 플레이 기능을 소개합니다.',
  authors: [{ name: '김태현', url: 'https://github.com/akdl6632' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '김태현 | 게임 클라이언트 프로그래머',
    description: '게임의 움직임을 코드로 만듭니다. DirectX 12 · Gameplay · Collision',
    url: 'https://akdl6632.github.io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

# 개발일지 — JWIT 회사 홈페이지

> 프로젝트: IT 회사 공식 홈페이지  
> 리포지토리: https://github.com/jeongwoo-pjw/start02  
> 배포 URL: https://jeongwoo-pjw.github.io/start02  
> 배포 방식: gh-pages 수동 배포

---

## 2026-06-08 (Day 1) — 프로젝트 초기 설정 및 기본 구조 완성

### 작업 환경
- Node.js v24.16.0
- npm v11.13.0
- React (create-react-app)
- Git (GitHub Desktop 내장)

### 완료 작업

#### 1. 프로젝트 생성
- GitHub 리포지토리(`jeongwoo-pjw/start02`) ZIP 다운로드 후 `C:\coding\start02`에 배치
- `npx create-react-app .`으로 React 앱 초기화

#### 2. 디자인 시스템 구축
| 색상 | 용도 | HEX |
|------|------|-----|
| Dark Blue | 메인 배경 | `#0d1b2a` |
| Royal Blue | 주요 UI, 버튼 | `#1a3a6b` / `#2051a3` |
| Dark Green | 포인트 (신뢰) | `#1b4332` / `#2d6a4f` |
| Dark Red | 포인트 (강조) | `#7b1d1d` / `#a32323` |

- `src/styles/variables.css`에 CSS Custom Properties로 전체 변수 관리
- Google Fonts Noto Sans KR 적용

#### 3. 컴포넌트 구조

```
src/
├── styles/
│   └── variables.css       # 전역 CSS 변수
├── components/
│   ├── common/
│   │   ├── Header.js/.css  # 고정 헤더 + 스크롤 반응 + 모바일 햄버거 메뉴
│   │   └── Footer.js/.css  # 푸터 + 링크 + 창립일 표기
│   └── sections/
│       ├── HeroSection     # 메인 배너 (배경 그라디언트, 통계 3종)
│       ├── AboutSection    # 회사소개 + 연혁 타임라인 (2003~2023)
│       ├── ServicesSection # 3대 서비스 카드 (컴퓨터 판매 / 프로그램 개발 / 웹 개발)
│       ├── PortfolioSection# 주요 납품·개발 실적 6건
│       └── ContactSection  # 문의 폼 (이름·이메일·연락처·내용)
└── pages/
    └── HomePage.js         # 섹션 조합
```

#### 4. 주요 기능
- 반응형 레이아웃 (모바일 768px 대응)
- 스크롤 시 헤더 배경 변환 (투명 → 반투명 다크블루)
- 모바일 슬라이드-인 햄버거 메뉴
- 연혁 타임라인 (2003 창립 ~ 2023 AI 진출)
- 문의 폼 제출 완료 메시지 처리

#### 5. 배포 설정
- `gh-pages` 패키지 설치 (`npm install gh-pages --save-dev`)
- `package.json`에 `homepage`, `predeploy`, `deploy` 스크립트 추가
- 배포 명령: `npm run deploy`

#### 6. 추가 작업 (요청)
- 브랜드 Favicon (SVG) 생성
- README.md 작성
- DEV_LOG.md (본 문서) 작성

### 미결 사항 / 다음 작업 예정
- [ ] 실제 회사 주소, 전화번호, 이메일 입력
- [ ] 포트폴리오 실제 이미지 및 상세 내용 추가
- [ ] 문의 폼 백엔드 연동 (EmailJS 또는 서버)
- [ ] SEO 메타태그 추가 (og:title, og:description 등)
- [ ] 페이지 로딩 최적화

---

## 배포 명령 참고

```bash
# 소스 커밋 & 푸시
git add .
git commit -m "커밋 메시지"
git push origin main

# 빌드 & 배포 (gh-pages 브랜치에 자동 푸시)
npm run deploy
```

---

## 2026-06-08 (Day 1 추가) — 테마 시스템 구현

### 완료 작업

#### 1. 다크/라이트 모드 토글
- `ThemeContext.js` 전역 Context로 테마 상태 관리
- localStorage에 선택값 저장 → 페이지 재방문 시 유지
- 헤더 "문의하기" 버튼 우측에 ☀️/🌙 토글 버튼 배치

#### 2. 5가지 컬러 팔레트 전환
| 팔레트명 | 특징 |
|----------|------|
| 다크블루 | 기본 테마 (Dark Blue + Royal Blue) |
| 미드나잇 | 딥 퍼플 계열 |
| 오션 | 시안 블루 계열 |
| 슬레이트 | 모던 블루 계열 |
| 차콜 | 인디고/오렌지 포인트 |

- CSS Custom Properties(`--dark-blue`, `--royal-blue` 등) 런타임 교체 방식
- 팔레트 선택 시 드롭다운 메뉴로 5가지 스와치 색상 미리보기

#### 3. 추가 개선
- 브랜드 Favicon SVG `JW` 텍스트로 수정
- 헤더 로고 마크 `JS` → `JW` 수정
- 모바일 사이드 메뉴에 토글·팔레트 버튼 포함
- 외부 클릭 시 팔레트 드롭다운 자동 닫힘

### 동작 확인 (Playwright 스크린샷)
- 다크모드 기본 상태 ✅
- 팔레트 드롭다운 열기 → 5가지 항목 표시 ✅
- 라이트모드 전환 → 배경/텍스트 색상 변환 ✅

---

## 2026-06-08 (Day 1 마무리) — 디자인 완성 및 개발 종료

### 완료 작업

#### 1. 컬러 시스템 전면 재설계
- 시맨틱 토큰 분리: `--bg-page/card`, `--text-primary/secondary/muted`
- `data-theme` 속성 기반 CSS 전환 (다크/라이트 각각 독립 정의)
- 라이트 모드: 순백 배경 + 선명한 텍스트 (그레이 그라디언트 제거)

#### 2. 미래지향적 디자인 개편
- 다크 모드: 딥 스페이스(`#060d1a`) + 격자 오버레이 + 발광 오브
- 글래스모피즘 카드 (`backdrop-filter: blur`)
- 그라디언트 텍스트 통계 수치
- 서비스 카드: 상단 컬러 바 + 아이콘 뱃지 + hover glow

#### 3. 히어로 텍스트 버그 수정
- `--hero-text` 변수 의존 제거 → `color: #ffffff` 고정
- 다크→라이트→다크 전환 시 텍스트 소실 현상 완전 해결

#### 4. Font Awesome 아이콘 전면 교체
| 위치 | 교체 내용 |
|------|-----------|
| 헤더 토글 | ☀️/🌙 → `fa-sun` / `fa-moon` |
| 히어로 배지 | 점 → `fa-microchip` + pulse glow |
| 서비스 카드 | 🖥️/⚙️/🌐 → `fa-desktop` / `fa-code` / `fa-globe` |
| 리스트 마커 | ▸ → `fa-chevron-right` (컬러 연동) |
| CTA 링크 | → → `fa-arrow-right` (hover 슬라이드) |
| 문의 정보 | 📍📞✉️🕐 → FA 아이콘 (파란 뱃지 박스) |
| 제출 버튼 | → `fa-paper-plane` |
| 완료 메시지 | ✅ → `fa-circle-check` (green glow) |

#### 5. 히어로 그라디언트 텍스트
- "함께 만들어갑니다": Cyan → Purple → Pink → Orange shimmer 루프 애니메이션

#### 6. 라이트모드 네비게이션 개선
- Hero 구간(`in-hero`): 투명 배경 + 흰색 텍스트
- 스크롤 후: `rgba(255,255,255,0.88)` 프로스티드 글래스 + 짙은 텍스트

---

## 최종 커밋 이력

| 커밋 | 내용 |
|------|------|
| `6ccfcbd` | 초기 구축: React 19 + 5개 섹션 + 색상 시스템 |
| `2b526a8` | 다크/라이트 모드 + 5가지 컬러 팔레트 |
| `3f7ea49` | 컬러 시스템 전면 재설계 (시맨틱 토큰) |
| `14c71b5` | 미래지향적 디자인 개편 + 히어로 버그 수정 |
| `3d6ab3c` | Font Awesome 전면 교체 + 히어로 그라디언트 + nav 개선 |

## 최종 배포 정보

- **배포 URL**: https://jeongwoo-pjw.github.io/start02
- **배포 방식**: gh-pages 수동 (`npm run deploy`)
- **개발 기간**: 2026-06-08 (1일)
- **최종 배포**: 2026-06-08

---

## 향후 개선 가능 사항 (미구현)

- [ ] 실제 회사 주소·전화번호·이메일 입력
- [ ] 포트폴리오 실제 이미지 및 상세 페이지
- [ ] 문의 폼 백엔드 연동 (EmailJS 또는 서버)
- [ ] 페이지 전환 애니메이션 (스크롤 reveal)
- [ ] SEO 강화 (sitemap.xml, robots.txt 개선)
- [ ] 모바일 성능 최적화 (이미지 lazy loading)

---

**✅ 개발 완료 — 2026-06-08**

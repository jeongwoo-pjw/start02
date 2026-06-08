# JWIT — IT 전문 기업 공식 홈페이지

> 2003년 창립 | 컴퓨터 판매 · 프로그램 개발 · 웹 개발

[![Deploy](https://img.shields.io/badge/배포-GitHub%20Pages-1a3a6b?style=flat-square&logo=github)](https://jeongwoo-pjw.github.io/start02)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://reactjs.org)

---

## 소개

JWIT는 2003년 9월 23일 창립한 종합 IT 서비스 기업입니다.  
컴퓨터 하드웨어 판매부터 맞춤형 소프트웨어 개발, 반응형 웹사이트 구축까지 고객의 디지털 성장을 지원합니다.

## 주요 서비스

| 서비스 | 내용 |
|--------|------|
| 컴퓨터 판매 | 데스크탑·노트북·서버·네트워크 장비 납품 및 AS |
| 프로그램 개발 | ERP·CRM·재고관리 등 맞춤형 솔루션 개발 |
| 웹 개발 | 기업 홈페이지·쇼핑몰·관리자 대시보드 풀스택 개발 |

## 기술 스택

- **Frontend**: React 19, CSS3 (CSS Custom Properties)
- **폰트**: Noto Sans KR (Google Fonts)
- **배포**: GitHub Pages (gh-pages)

## 색상 시스템

| 구분 | 색상명 | HEX |
|------|--------|-----|
| 메인 배경 | Dark Blue | `#0d1b2a` |
| 주요 UI | Royal Blue | `#1a3a6b` |
| 포인트 A | Dark Green | `#2d6a4f` |
| 포인트 B | Dark Red | `#a32323` |

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start

# 빌드 & GitHub Pages 배포
npm run deploy
```

## 프로젝트 구조

```
src/
├── styles/variables.css        # CSS 변수 (색상·폰트·간격)
├── components/
│   ├── common/                 # Header, Footer
│   └── sections/               # Hero, About, Services, Portfolio, Contact
└── pages/HomePage.js
```

## 개발 기록

자세한 개발 과정은 [DEV_LOG.md](./DEV_LOG.md)를 참고하세요.

---

© 2003–2026 JWIT Co., Ltd. All rights reserved.

# 링크나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

## 프로젝트 구조

- `src/app/page.tsx` — 메인 페이지(프로필 + 링크 카드 목록)
- `src/components/` — UI 컴포넌트 (`Profile`, `LinkCard`, `LinkCardList`)

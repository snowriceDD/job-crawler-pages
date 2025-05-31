# 채용공고 크롤러 결과 웹사이트 (GitHub Pages)

- 정적 파일(index.html, style.css, app.js, jobs.json)만으로 구동
- jobs.json 파일에 크롤링 결과를 넣으면 자동으로 리스트업
- 별도 서버 없이 GitHub Pages로 배포 가능

## GitHub Pages 배포 방법
1. Settings → Pages → Branch를 `main`으로, 폴더는 `/ (root)`로 선택
2. 저장 후 안내되는 URL로 접속하면 웹사이트가 배포됩니다.
3. 크롤러가 jobs.json을 갱신하면 자동으로 최신 공고가 반영됩니다.

# AFTER SIX — 캐릭터 소개 페이지

화이트·남색의 회사 프로필에서 버튼을 누르면 같은 캐릭터의 분홍색 마법소녀 프로필로 전환됩니다. 서도윤, 라운드 게임즈, 블루밍 D는 모두 교체 가능한 임시 설정입니다.

## 미리 보기

압축을 풀고 `index.html`을 브라우저에서 여세요. 별도의 설치나 빌드가 필요 없습니다. 인터넷 연결 없이도 사용할 수 있습니다.

## 내용 수정

`content.js`를 열어 바꾸세요. `day`가 회사, `night`가 마법소녀 프로필입니다. 두 프로필의 키 구조는 같으므로 내용을 비교하며 편집할 수 있습니다.

| 바꿀 내용 | 위치 |
| --- | --- |
| 브라우저 탭 제목 | `pageTitle` |
| 회사/브랜드명 | `brand` |
| 이름, 직책, 영문 이름 | `name`, `role`, `englishName` |
| 첫 화면 제목과 소개 | `headline`, `description` |
| 해시태그 | `tags` |
| 넘기기 버튼 | `toggleLabel`, `headerToggle`, `toggleNote` |
| 사진 및 사진 하단 문구 | `image`, `imageAlt`, `captionName`, `captionBadge` |
| 간단 프로필 | `facts` 배열 |
| 캐릭터 소개 | `story` 배열 |
| 대사 및 성격 | `quote`, `quoteSource`, `traits` |
| 회사/세계관 카드 | `worldCards` 배열 |
| 시작 상황 | `scene`, `sceneDialogue`, `sceneRole` |
| 마지막 문구 및 고지 | `closingTitle`, `footer` |

따옴표 안의 글을 바꾸면 됩니다. 줄바꿈은 `<br>`을 사용하세요. 따옴표(`"`)를 본문에 넣을 때는 `\"`로 입력하거나 `“ ”`를 사용하세요. 배열에 항목을 추가하거나 삭제할 수도 있습니다. 모든 본문은 안전하게 텍스트로 표시하며 `<br>` 이외의 HTML은 실행하지 않습니다.

프로필 내용 외에 공통 메뉴 `PROFILE / STORY / SCENE`, 섹션 번호, `AFTER SIX` 푸터 로고, 화면 낭독 안내는 `index.html`과 `app.js`에서 수정할 수 있습니다. 검색 결과에 표시될 설명은 `index.html`의 `description` 메타 태그에서 바꾸세요.

## 이미지 수정

- 회사 이미지: `assets/character-day.webp`
- 마법소녀 이미지: `assets/character-night.webp`

두 이미지 파일을 같은 이름으로 교체하거나, `content.js`의 `image`를 새 파일 경로로 바꾸세요. 예: `assets/my-character.png`. PNG/JPG/WebP 모두 가능합니다. 3:4 세로 비율을 권장합니다. 얼굴 위치를 조정하려면 `style.css`의 `.portrait img`에서 `object-position`을 수정하세요. 임시 이미지는 이 페이지용으로 생성한 웹툰풍 일러스트입니다.

## 색상과 디자인 수정

`style.css` 맨 위 `:root`는 회사 프로필 색상, `html[data-mode="night"]`는 마법소녀 프로필 색상입니다. `--bg`는 배경, `--ink`는 제목, `--accent`는 버튼, `--surface`는 세계관 영역입니다. 시스템 한글 글꼴을 사용하므로 외부 폰트 서비스를 불러오지 않습니다.

## GitHub Pages에 올리기

1. GitHub에서 새 저장소를 만드세요. 무료 개인 계정이면 공개 저장소를 사용하세요.
2. 압축을 풀고 **이 폴더 안의 파일과 assets 폴더**를 저장소 최상위에 올리세요. `index.html`이 저장소 최상위에 있어야 합니다.
3. 저장소의 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 고르세요.
4. Branch는 **main**, 폴더는 **/(root)**로 설정하고 Save를 누르세요.
5. 배포가 끝나면 해당 설정 화면에 표시된 사이트 주소로 접속하세요.

추후 GitHub에서 `content.js`를 수정하고 커밋하면 페이지에 반영됩니다. 모든 경로가 상대 경로라 하위 프로젝트 주소에서도 동작합니다. 실제 GitHub 저장소에는 아직 업로드하지 않았습니다.

## 파일 구성

```
index.html       페이지 구조
content.js       수정할 문구와 설정
app.js           두 프로필 전환 동작
style.css        색상 / 디자인 / 모바일 대응
assets/          캐릭터 이미지와 파비콘
.nojekyll        GitHub Pages 정적 파일 설정
```

이미지 생성에 사용한 프롬프트: 같은 36세 가상 한국 남성을 두 장면으로 나눈 웹툰풍 일러스트. 한쪽은 남색 정장과 흰 셔츠, 다른 쪽은 분홍색 리본·마법소녀 의상·흰 장갑. 성숙한 남성의 얼굴과 체격은 유지. 회색/분홍 배경, 명확한 선화와 셀 채색, 문자 없음. 기본 이미지 생성 도구로 생성했습니다.

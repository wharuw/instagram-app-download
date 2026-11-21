# 유니릭스 뷰어 다운로드 페이지

공개 페이지: https://wharuw.github.io/instagram-app-download/

2026-11-21 GitHub Pages main/root 배포와 공개 HTTPS 페이지를 확인했습니다. Android/iPhone/PC 사용자 에이전트, 320·390·768·1024·1440px 가로 넘침, 복사 성공/권한 거부 대체 경로, 설정 누락/잘못된 ID 차단의 데스크톱 Chromium 검사를 통과했습니다. 실제 Android/iPhone Instagram 및 Safari 기기 동작은 미검증입니다.

Instagram 프로필 → 이 페이지 → 사용자가 직접 스토어 버튼 클릭. 정적 HTML/CSS/JS이며 서버·프레임워크·외부 API·분석 도구·쿠키가 없습니다. 기존 앱의 실제 아이콘을 사용합니다.

## 설정과 실행

`config.js` 한 곳에서 앱 이름, Android 패키지명, Apple 앱 ID를 관리합니다. 기존 정식 앱에서 확인한 값이 이미 들어 있어 사용자 추가 입력은 필요 없습니다. URL은 이 값으로 생성하며 다른 파일에 ID를 중복하지 않습니다. 설정이 유효하지 않으면 다운로드 링크를 비활성 상태로 두고 오류를 표시합니다.

로컬 확인: 이 폴더에서 `python -m http.server 8080` 후 `http://localhost:8080`을 여세요. 실제 클립보드 기능은 HTTPS 또는 localhost에서 확인하세요.

## GitHub Pages

앱 소스 저장소와 분리한 **이 폴더의 파일만** 전용 저장소에 업로드합니다. 공개되는 정보는 이미 공개된 앱 이름·아이콘·스토어 ID와 페이지 코드뿐입니다. 앱 원본 소스나 개인 파일·인증 정보를 업로드하지 않습니다.

Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save. `.nojekyll`을 포함합니다. 배포 후 GitHub가 반환한 HTTPS URL을 확인하고 Instagram 프로필의 링크 편집에서 등록하세요. 게시글·소개 텍스트에 URL을 적는 것만으로는 클릭 가능한 프로필 링크가 되지 않을 수 있습니다.

## 동작과 한계

- Android는 Google Play, iPhone/iPad는 App Store를 먼저 표시합니다. PC·감지 실패 시 두 버튼을 표시하며 모바일에서도 다른 OS 버튼을 유지합니다.
- 링크는 일반 HTTPS이며 같은 창에서 사용자의 클릭으로만 열립니다. 자동 이동·intent 실행·iframe·반복 시도는 없습니다. 다운로드 버튼은 돌아온 뒤 다시 누를 수 있습니다.
- 주소 복사를 누르면 수동 복사 가능한 원문 주소도 항상 표시합니다. 클립보드 오류 시 주소를 선택해 직접 복사할 수 있습니다.
- Instagram 내장 브라우저의 외부 앱 전환 성공을 감지하거나 보장하지 않습니다. 메뉴 이름은 버전마다 다를 수 있습니다. 필요하면 메뉴의 외부 브라우저 열기 또는 복사 후 Chrome/Safari 붙여넣기를 사용하세요.
- 잘못된 형식의 ID는 차단하지만, 형식이 맞는 다른 앱 ID까지 판별하려면 운영자가 실제 스토어 페이지를 확인해야 합니다.
- 이 페이지의 설치 버튼은 스토어에서 열람·설치할 기회를 제공합니다. 앱 이용권 가격과 조건은 앱/스토어에서 확인하세요.

## 검증

데스크톱 Chromium에서 모바일 크기·OS별 버튼 순서·HTTPS 링크·복사 성공/실패·설정 오류·가로 넘침·키보드 포커스를 자동 검사합니다. 에뮬레이션은 실기기 검증이 아닙니다.

배포 후 실제 Android Instagram에서 프로필 링크 → 페이지 → Google Play 버튼을 확인하세요. 실패하면 주소 복사 → Chrome 붙여넣기로 스토어 이동을 확인하세요. iPhone Safari/Instagram에서도 App Store 이동을 확인해야 합니다. 실기기 결과는 확인 전까지 미검증입니다.

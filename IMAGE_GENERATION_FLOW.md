# QGENETICS 이미지 제작 플로우

## 1) 아트 디렉션 고정
- 톤: cinematic, premium biotech, deep navy, sterile glow
- 키워드: human cell, membrane, nucleus, microscopy, volumetric light
- 제외: cartoon, clipart, over-saturated neon, space ship, galaxy motif

## 2) 샷리스트(우선순위)
1. Hero key visual (16:10)
2. Pipeline image A (골다공증/골절)
3. Pipeline image B (antiviral)
4. Pipeline image C (AI discovery)
5. Technology visual (MSC + AI diagram mood)
6. Partners strip A
7. Partners strip B
8. Partners strip C
9. Contact background

## 3) 생성 규격
- 해상도: 기본 1920x1200, 카드형은 1600x1000
- 비율: 16:10 또는 5:3 유지
- 포맷: webp(권장) 또는 png
- 파일명:
  - hero-cell-main.webp
  - pipeline-osteoporosis.webp
  - pipeline-antiviral.webp
  - pipeline-ai.webp
  - tech-msc-ai.webp
  - partners-1.webp / partners-2.webp / partners-3.webp
  - contact-bg.webp

## 4) 프롬프트 템플릿
"Premium biotech website background featuring human cellular structures under advanced microscopy, translucent cell membranes, subtle nucleus detail, deep navy and cyan palette, cinematic volumetric lighting, ultra-clean composition, professional pharmaceutical brand style, high detail, no text, no logos"

## 5) 네거티브 프롬프트
"cartoon, anime, illustration, low detail, noisy artifacts, watermark, text, logo, spaceship, planets, starscape"

## 6) 품질 게이트
- 텍스트/워터마크 없음
- 세포 디테일은 보이되 혐오감 없는 추상성 유지
- 어두운 배경에서도 흰 텍스트 대비 확보
- 같은 색감/광원으로 시리즈 일관성 유지

## 7) 반영 방법
- 현재 페이지는 아래 파일 경로를 교체하면 즉시 반영됨
  - ./assets/generated/cell-hero-main.svg
  - ./assets/generated/cell-pipeline-1.svg
  - ./assets/generated/cell-pipeline-2.svg
  - ./assets/generated/cell-pipeline-3.svg
  - ./assets/generated/cell-tech.svg
  - ./assets/generated/cell-contact.svg
- 실사 AI 이미지 확정 후, 동일 파일명으로 교체하거나 index.html의 src를 webp로 변경

// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// 여기에 구성 옵션을 작성합니다.

	site: "https://astross.mycafe24.com", // 프로덕션 사이트 URL 지정, 코드펜스에서 import.meta.env.SITE 로 사용할수 있음
	compressHTML: false, // 빌드 결과물 HTML을 보기 좋게 포메팅

	build: {
		format: "file", // 빌드 결과물을 ./dist/page.html 형식으로 출력
		inlineStylesheets: `never`, // css, js를 별도 파일로 분리
		assets: "assets",
	},

	scopedStyleStrategy: "class", // css selector 규칙을 class name 기반으로 출력

	image: {
		responsiveStyles: true,
	},
});

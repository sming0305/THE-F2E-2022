# 2022 4th The F2E 活動作品
<img alt="Let-s-Entertaining" src="https://i.imgur.com/iGafHEK.jpg">

參訪網址請點 : [The F2E 活動網站設計](https://sming0305.github.io/THE-F2E-2022/)

### 作品說明:

The F2E 活動旨在採UI、前端接力合作形式，前端工程師可採用 UI 設計師的設計稿，一同產出完整成果。

作品使用 GSAP 來處理設計稿中的動畫，主要使用 GSAP 中的 scrollTrigger 搭配 TimeLIne 來達到滾輪控制動畫，並可以順向及反向播放，  
並針對設計稿上的尺寸細節以及動畫做還原，且盡可能避免了如其他參賽者動畫持續及間隔過短的問題。

謝謝 EG 可愛的設計稿
本作品為採用設計師 : [設計師 EG](https://2022.thef2e.com/users/12061549261454740203/) 設計。
設計稿網址 : [設計稿](https://www.figma.com/file/WI0JIDVCdIwHDFjAJQFaxK/EGs-F2E---Week1-%E6%B4%BB%E5%8B%95%E7%B6%B2%E7%AB%99%E8%A8%AD%E8%A8%88?type=design&node-id=41-1702&t=FTWQoNxG9nt5odNW-0)

### 本地運行:
需求:
- 檢視網頁用瀏覽器
- 終端機 / 文字編輯器

使用終端機並確保您在 2022_The_F2E 此資料夾路徑下  
在終端機內輸入:
```
npm install  
npm run dev
```
待終端機出現 VITE v4.3.6  ready in xxx ms 字樣後，
將顯示的 Local 的路徑貼至瀏覽器即可。

### 資料夾說明:
`src` 主要資料存放處，請由此進入。

-`assets` 分類存放 font、SCSS、images 資料夾。  
-- `font` 字體。  
-- `helper` 工具、base、變數、mixin..等 SCSS  
-- `images` 圖片

-`components` 元件資料夾

-`router` 路由資料夾

-`stores` Pinia Store 資料夾  
--`GSAPanimationStore.js` ( GSAP 動畫集中撰寫於此 )

-`views` 頁面資料夾

### 使用技術
- Vue & Vite
- Vue Pinia
- GSAP
- Bootstrap 5
- SCSS
- vue-loading







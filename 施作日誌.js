// Date: 2022/5/18
// 0.閱讀設計稿 (大致了解頁面數量) 、 基本環境建立
// 1.按照設計稿---設定字型,字體大小
// 2.按照設計稿---設定使用顏色
// 3.bootstrap 變數設定至慣用狀態

// Date: 2022/5/19
// 1.注意畫面載入時需要loading
// 2.配置路由(大致決定頁面數量)
// 3.圖檔存入assets
// 4.確認可能會用到的元件，並且建立
// 5.確認可能會用到的view，並且建立
// 6.調整continer的寬度

// Date: 2022/5/20
// 完成 OffcanvasComponent
// 完成 LoginComponent
// 完成 JoinButtonComponent
// 建立 MapComponent (內容未完成)
// 初步研究如何用 gsap 達到動畫效果，及觀察設計稿中的動畫效果
// 動畫1:左右雲朵圖片在滾輪前三次滾動時，會逐次向中心靠攏，第三次時會消失，同時右側紅綠燈會逐次變化，預設全亮，接續滾動紅黃綠，READY變成GO
// 動畫2:第四次滾動，紅綠燈及中央文字消失
// 動畫3:第五次滾動，旗桿，大LOGO，標題消失
// 跑道永遠都是黏貼在畫面底部，但會隨著畫面滾動到特定區塊而縮放
// 三隻人物圖層在跑道上方，會隨著畫面滾動到特定區塊而縮放+移動，且滑鼠左移時人物會往右，滑鼠右移時人物會往左
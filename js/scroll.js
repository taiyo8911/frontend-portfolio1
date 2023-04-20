// // スクロールを無効にするための関数
// function disableScroll(event) {
//     event.preventDefault();
// }

// // touchmoveイベント時にスクロールを無効にする関数を呼び出すように設定
// document.addEventListener('touchmove', disableScroll, { passive: false });


// // スクロールを無効化
// document.documentElement.style.overflow = 'hidden';
// document.body.style.overflow = 'hidden';
// document.addEventListener('touchmove', scrollControl, { passive: false });

// // スクロールを有効化
// document.documentElement.style.overflow = '';
// document.body.style.overflow = '';
// document.removeEventListener('touchmove', scrollControl, { passive: false });


// // .js-can-scroll要素内はスクロールできるようにする
// var scrollControl = function (event) {
//     if (event.target.closest('.js-can-scroll')) {
//         event.stopPropagation();
//     } else {
//         event.preventDefault();
//     }
// };


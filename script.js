// HTMLから要素を取得
const background = document.querySelector('#bg'); // 背景要素
const buttons = document.querySelectorAll('button'); // ボタン要素

// 色の配列
const colors = ['red', 'green', 'blue', 'yellow'];

// 各ボタンに色を設定し、クリック時の処理を追加
buttons.forEach((btn, index) => {
    btn.style.backgroundColor = colors[index]; // 背景色を設定
    btn.addEventListener('click', () => { // クリック時の処理
        const color = colors[index]; // クリックされたボタンの色を取得
        background.className = 'bg ' + color; // 背景色を変更
    })
})

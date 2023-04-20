// HTMLから要素を取得
const bg = document.querySelector('#bg'); // 背景要素
const buttons = document.querySelectorAll('button'); // ボタン要素

// クラス名の配列
const colors = ['red', 'green', 'blue', 'yellow'];

// 各風船クリック時の処理を追加
buttons.forEach((btn, index) => {
    // 風船クリック時の処理
    btn.addEventListener('click', () => {
        document.querySelector('#main').style.display = 'none'; // #mainを非表示にする
        const color = colors[index]; // クリックされたボタンの色を取得
        bg.className = color; // クラス名を変更することで背景色を変える
    })
})
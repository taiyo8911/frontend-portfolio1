// モーダルウィンドウ要素を取得
const modals = document.querySelectorAll(".modal");

// モーダルウィンドウの閉じるボタン要素を取得
const close = document.querySelectorAll(".close");

// 各ボタンが押されたら、モーダルウィンドウを表示する
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // モーダルウィンドウを表示
        setTimeout(() => {
            const modal = modals[index];
            modal.classList.add("show");
        }, 1500);
    });
});

// モーダルウィンドウを閉じるボタンをクリックしたら、モーダルウィンドウを非表示にする
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const modal = this.closest(".modal");
        modal.classList.remove('show');
        // #mainを表示する
        document.querySelector('#main').style.display = 'flex';
        // 背景色を変更
        background.className = 'bg';
    }
}
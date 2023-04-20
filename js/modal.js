// モーダルウィンドウ要素を取得
const modals = document.querySelectorAll(".modal");

// モーダルウィンドウの閉じるボタン要素を取得
const closes = document.querySelectorAll(".close");

// 各風船ボタンが押されたら、モーダルウィンドウを表示する
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
closes.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        const modal = closeBtn.closest(".modal"); // .modalの親要素を取得
        modal.classList.remove("show"); // 親要素のクラスを削除
        setTimeout(() => {
            document.querySelector("#main").style.display = "flex"; // #mainを表示する
            // クラスを削除して背景色を初期化
            bg.classList.remove("red", "green", "blue", "yellow");
        }, 1500);

    });
});

// .modal-content要素以外がクリックされたら、モーダルウィンドウを非表示にする
modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            modal.classList.remove("show");
            setTimeout(() => {
                document.querySelector("#main").style.display = "flex";
                bg.classList.remove("red", "green", "blue", "yellow");
            }, 1500);
        }
    });
});
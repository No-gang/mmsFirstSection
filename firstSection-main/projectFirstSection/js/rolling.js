(() => {
  // 롤링할 텍스트
  let rollingData = [
    "세상도 바꿀 수 있어",
    "세상도 바꿀 수 있어",
    "세상도 바꿀 수 있어",
    "세상도 바꿀 수 있어",
  ];

  let first = document.getElementById("first"),
    second = document.getElementById("second"),
    third = document.getElementById("third");
  let move = 2;
  let dataCnt = 1;
  let listCnt = 1;

  first.innerHTML = rollingData[0];

  setInterval(() => {
    if (move == 2) {
      first.classList.remove("card_sliding");
      first.classList.add("card_sliding_after");

      second.classList.remove("card_sliding_after");
      second.classList.add("card_sliding");

      third.classList.remove("card_sliding_after");
      third.classList.remove("card_sliding");

      move = 0;
    } else if (move == 1) {
      first.classList.remove("card_sliding_after");
      first.classList.add("card_sliding");

      second.classList.remove("card_sliding_after");
      second.classList.remove("card_sliding");

      third.classList.remove("card_sliding");
      third.classList.add("card_sliding_after");

      move = 2;
    } else if (move == 0) {
      first.classList.remove("card_sliding_after");
      first.classList.remove("card_sliding");

      second.classList.remove("card_sliding");
      second.classList.add("card_sliding_after");

      third.classList.remove("card_sliding_after");
      third.classList.add("card_sliding");

      move = 1;
    }

    if (dataCnt < rollingData.length - 1) {
      document.getElementById("rolling_box").children[listCnt].innerHTML =
        rollingData[dataCnt];
      dataCnt++;
    } else if (dataCnt == rollingData.length - 1) {
      document.getElementById("rolling_box").children[listCnt].innerHTML =
        rollingData[dataCnt];
      dataCnt = 0;
    }

    if (listCnt < 2) {
      listCnt++;
    } else if (listCnt == 2) {
      listCnt = 0;
    }

    console.log(listCnt);
  }, 2000);
})();
